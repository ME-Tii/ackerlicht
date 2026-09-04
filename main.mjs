import { app, BrowserWindow, Menu, dialog, ipcMain, shell, nativeTheme, screen } from "electron";
import { createReadStream, existsSync, statSync, writeFileSync, readFileSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { BAR_SECTIONS, insertGroups } from "./catalog.mjs";
import { datenbankMenu } from "./db-menu.mjs";
import { modellierenMenu } from "./model-menu.mjs";

app.commandLine.appendSwitch("ignore-gpu-blocklist");
app.commandLine.appendSwitch("enable-webgl");
app.commandLine.appendSwitch("disable-renderer-backgrounding");
app.commandLine.appendSwitch("high-dpi-support", "1");
if (process.platform === "win32") {
  app.commandLine.appendSwitch("use-angle", "d3d11");
  app.commandLine.appendSwitch("disable-direct-composition");
  app.commandLine.appendSwitch("disable-features", "CalculateNativeWinOcclusion,WinUseBrowserSpellChecker");
}

const here = dirname(fileURLToPath(import.meta.url));
const www = join(here, "www");

function mime(p) {
  return (
    {
      ".html": "text/html; charset=utf-8",
      ".js": "text/javascript; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".svg": "image/svg+xml",
      ".json": "application/json",
      ".ackerlicht": "application/json",
      ".png": "image/png",
      ".woff2": "font/woff2",
    }[extname(p)] ?? "application/octet-stream"
  );
}

function startServer() {
  return new Promise((resolveListen) => {
    const root = resolve(www);
    const server = createServer((req, res) => {
      let url = "/";
      try {
        url = decodeURIComponent((req.url ?? "/").split("?")[0] ?? "/");
      } catch {
        res.writeHead(400);
        res.end();
        return;
      }
      if (url === "/") url = "/desktop.html";
      const file = resolve(join(www, url.replace(/^[/\\]+/, "")));
      if (!file.startsWith(root)) {
        res.writeHead(403);
        res.end();
        return;
      }
      const send = (path) => {
        try {
          if (!existsSync(path) || statSync(path).isDirectory()) return false;
          res.writeHead(200, { "content-type": mime(path) });
          const stream = createReadStream(path);
          stream.on("error", () => {
            if (!res.headersSent) res.writeHead(404);
            res.end();
          });
          stream.pipe(res);
          return true;
        } catch {
          return false;
        }
      };
      if (send(file)) return;
      if (send(join(www, "desktop.html"))) return;
      res.writeHead(404);
      res.end();
    });
    server.listen(0, "127.0.0.1", () => resolveListen(server));
  });
}

function senderWin(e) {
  return BrowserWindow.fromWebContents(e.sender);
}

function pickDialog(win, fn, opts) {
  return win ? fn(win, opts) : fn(opts);
}

ipcMain.handle("desktop:open", async (e) => {
  try {
    const pick = await pickDialog(senderWin(e), dialog.showOpenDialog.bind(dialog), {
      title: "Projekt öffnen",
      filters: [{ name: "Ackerlicht", extensions: ["ackerlicht", "json"] }],
      properties: ["openFile"],
    });
    if (pick.canceled || !pick.filePaths[0]) return null;
    return { path: pick.filePaths[0], text: readFileSync(pick.filePaths[0], "utf8") };
  } catch (err) {
    console.error("desktop:open", err);
    return null;
  }
});

ipcMain.handle("desktop:save", async (e, name, text, dir, ext) => {
  try {
    const suffix = String(ext || "ackerlicht").replace(/^\./, "").replace(/[^a-z0-9]+/gi, "") || "ackerlicht";
    const file = `${String(name || "Garten").replace(/\s+/g, "-")}.${suffix}`;
    const pick = await pickDialog(senderWin(e), dialog.showSaveDialog.bind(dialog), {
      title: "Speichern unter",
      defaultPath: dir ? join(String(dir), file) : file,
      filters: [{ name: suffix.toUpperCase(), extensions: [suffix] }],
    });
    if (pick.canceled || !pick.filePath) return false;
    writeFileSync(pick.filePath, String(text ?? ""), "utf8");
    return pick.filePath;
  } catch (err) {
    console.error("desktop:save", err);
    return false;
  }
});

ipcMain.handle("desktop:saveTo", async (_e, path, text) => {
  try {
    if (!path) return false;
    writeFileSync(String(path), String(text ?? ""), "utf8");
    return true;
  } catch (err) {
    console.error("desktop:saveTo", err);
    return false;
  }
});

ipcMain.handle("desktop:reveal", async (_e, path) => {
  if (path) shell.showItemInFolder(String(path));
});

ipcMain.handle("desktop:pdf", async (e, name) => {
  const win = senderWin(e);
  if (!win) return false;
  try {
    const pick = await dialog.showSaveDialog(win, {
      title: "PDF exportieren",
      defaultPath: `${String(name || "Garten").replace(/\s+/g, "-")}.pdf`,
      filters: [{ name: "PDF", extensions: ["pdf"] }],
    });
    if (pick.canceled || !pick.filePath) return false;
    const pdf = await win.webContents.printToPDF({ printBackground: true, landscape: true });
    writeFileSync(pick.filePath, pdf);
    return true;
  } catch (err) {
    console.error("desktop:pdf", err);
    return false;
  }
});

ipcMain.handle("desktop:pickDir", async (e) => {
  try {
    const pick = await pickDialog(senderWin(e), dialog.showOpenDialog.bind(dialog), {
      title: "Standardordner",
      properties: ["openDirectory"],
    });
    return pick.canceled || !pick.filePaths[0] ? false : pick.filePaths[0];
  } catch (err) {
    console.error("desktop:pickDir", err);
    return false;
  }
});

ipcMain.handle("desktop:quit", () => {
  shutdown(0);
});

ipcMain.handle("desktop:fullscreen", (e) => {
  const win = senderWin(e);
  if (!win) return false;
  win.setFullScreen(!win.isFullScreen());
  return win.isFullScreen();
});

ipcMain.handle("desktop:isFullscreen", (e) => Boolean(senderWin(e)?.isFullScreen()));
ipcMain.handle("desktop:newWindow", () => {
  if (servePort) openPlannerWindow(servePort);
  return true;
});
ipcMain.handle("desktop:close", (e) => {
  closeWindow(senderWin(e));
  return true;
});

ipcMain.handle("desktop:alwaysTop", (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  if (!win) return false;
  const next = !win.isAlwaysOnTop();
  win.setAlwaysOnTop(next);
  return next;
});

let recents = [];
let autoOn = true;
let hasFile = false;
let farmReadonly = false;
let unitsCm = false;
let printOn = false;
let servePort = 0;
let httpServer = null;
let quitting = false;
let mainWin;

function shutdown(code = 0) {
  if (quitting) {
    try {
      app.exit(code);
    } catch {
      /* ignore */
    }
    return;
  }
  quitting = true;
  for (const w of BrowserWindow.getAllWindows()) {
    try {
      if (!w.isDestroyed()) w.webContents.send("desktop:will-close");
    } catch {
      /* ignore */
    }
  }
  const finish = () => {
    try {
      httpServer?.close();
    } catch {
      /* ignore */
    }
    httpServer = null;
    for (const w of BrowserWindow.getAllWindows()) {
      try {
        w.removeAllListeners("close");
        if (!w.isDestroyed()) w.destroy();
      } catch {
        /* ignore */
      }
    }
    try {
      app.exit(code);
    } catch {
      /* ignore */
    }
  };
  setTimeout(finish, 450);
}

function closeWindow(win) {
  if (!win || win.isDestroyed()) {
    if (BrowserWindow.getAllWindows().length === 0) shutdown(0);
    return;
  }
  if (BrowserWindow.getAllWindows().length <= 1 && process.platform !== "darwin") {
    shutdown(0);
    return;
  }
  try {
    win.webContents.send("desktop:will-close");
  } catch {
    /* ignore */
  }
  setTimeout(() => {
    try {
      if (!win.isDestroyed()) {
        win.removeAllListeners("close");
        win.destroy();
      }
    } catch {
      /* ignore */
    }
    if (BrowserWindow.getAllWindows().length === 0 && process.platform !== "darwin") shutdown(0);
  }, 400);
}

function openPlannerWindow(port) {
  const wa = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width: Math.max(1280, Math.min(wa.width, 3840)),
    height: Math.max(800, Math.min(wa.height, 2160)),
    minWidth: 800,
    minHeight: 560,
    title: "Ackerlicht Gartensoftware 126",
    backgroundColor: "#161a17",
    autoHideMenuBar: false,
    backgroundMaterial: "none",
    closable: true,
    thickFrame: true,
    webPreferences: {
      preload: join(here, "preload.mjs"),
      contextIsolation: true,
      sandbox: false,
      webgl: true,
      backgroundThrottling: false,
      offscreen: false,
    },
  });
  if (!mainWin) mainWin = win;
  win.on("close", (e) => {
    if (quitting) return;
    e.preventDefault();
    closeWindow(win);
  });
  win.on("closed", () => {
    if (mainWin === win) mainWin = BrowserWindow.getAllWindows()[0] ?? null;
    if (!quitting && BrowserWindow.getAllWindows().length === 0 && process.platform !== "darwin") shutdown(0);
  });
  win.on("enter-full-screen", () => {
    win.setMenuBarVisibility(true);
    win.webContents.send("desktop:fullscreen-changed", true);
  });
  win.on("leave-full-screen", () => {
    win.setMenuBarVisibility(true);
    win.setAutoHideMenuBar(false);
    win.webContents.send("desktop:fullscreen-changed", false);
  });
  win.once("ready-to-show", () => {
    win.webContents.setZoomFactor(1);
    win.setMenuBarVisibility(true);
  });
  attachMenu(win);
  win.webContents.on("did-finish-load", () => {
    win.webContents.insertCSS(
      "html,body,#root{background:#161a17!important;color:#e8e3d8!important;color-scheme:dark} header,nav,footer,[aria-label='Hauptmenü'],[aria-label='Objekte']{-webkit-font-smoothing:antialiased!important;font-family:system-ui,'Segoe UI',sans-serif!important;background:#1a1f1c!important;color:#e8e3d8!important}",
    );
  });
  void win.loadURL(`http://127.0.0.1:${port}/desktop.html`);
  return win;
}

function attachMenu(win) {
  const send = (action) => () => win.webContents.send("desktop:menu", action);
  const recentSub = recents.length
    ? recents
        .map((name, i) => ({
          label: String(name).slice(0, 42),
          accelerator: i < 8 ? `CmdOrCtrl+${i + 1}` : undefined,
          registerAccelerator: false,
          click: send(`recent-${i}`),
        }))
        .concat([{ type: "separator" }, { label: "Liste leeren", click: send("recent-clear") }])
    : [{ label: "Keine Einträge", enabled: false }];
  const template = [
      {
        label: "Datei",
        submenu: [
          { label: "Neu", accelerator: "CmdOrCtrl+N", registerAccelerator: false, click: send("neu") },
          { label: "Öffnen…", accelerator: "CmdOrCtrl+O", registerAccelerator: false, click: send("open") },
          { label: "Zuletzt verwendet", submenu: recentSub },
          { label: "Projekte…", click: send("projects") },
          { label: "Duplizieren", click: send("dup-project") },
          { label: "Löschen…", click: send("delete-project") },
          { label: "Umbenennen…", click: send("rename") },
          { type: "separator" },
          { label: "Speichern", accelerator: "CmdOrCtrl+S", registerAccelerator: false, click: send("save-local") },
          { label: "Speichern unter…", accelerator: "CmdOrCtrl+Shift+S", registerAccelerator: false, click: send("save") },
          { label: "Als Kopie", click: send("save-copy") },
          { label: "Version speichern", click: send("ver-save") },
          { label: "Versionen…", click: send("ver") },
          { label: autoOn ? "Automatisch speichern ✓" : "Automatisch speichern", click: send("auto-save") },
          { label: "Änderungen verwerfen", click: send("revert") },
          { label: "Wiederherstellen…", click: send("restore") },
          { type: "separator" },
          { label: "Importieren…", click: send("import") },
          { label: "Zusammenführen…", click: send("merge") },
          { label: "CSV importieren…", click: send("csv-in") },
          {
            label: "Exportieren",
            submenu: [
              { label: "CSV exportieren", click: send("csv") },
              { label: "Bild (SVG)", click: send("svg") },
              { label: "PNG 2D…", click: send("png") },
              { label: "Luftbild…", click: send("aerial") },
              { label: "PDF…", click: send("pdf") },
              { label: "Backup", click: send("backup") },
              { label: "DXF exportieren…", click: send("dxf") },
              { label: "DXF importieren…", click: send("dxf-in") },
              { label: "GeoJSON…", click: send("geojson") },
              { label: "KML / Google Earth…", click: send("kml") },
              { label: "Als ZIP archivieren", click: send("zip-pack") },
              { label: "PNG 3D…", click: send("png3") },
              { label: "glTF exportieren…", click: send("gltf") },
              { label: "glTF importieren…", click: send("gltf-in") },
              { type: "separator" },
              { label: "Bibliothek exportieren", click: send("lib-export") },
              { label: "Bibliothek importieren…", click: send("lib-import") },
            ],
          },
          { label: "Jahreskopie", click: send("year-copy") },
          { label: "Beispielgarten", click: send("sample") },
          { label: unitsCm ? "Einheiten m/cm ✓" : "Einheiten m/cm", click: send("units") },
          { label: "EPSG / Kataster…", click: send("epsg") },
          { label: "GPS-Punkt…", click: send("gps") },
          { label: "Luftbild einpassen…", click: send("pass") },
          { label: "Versionen vergleichen…", click: send("compare") },
          { type: "separator" },
          { label: "Vorlage speichern", click: send("tpl-save") },
          { label: "Vorlage anwenden…", click: send("tpl") },
          { label: "Neu aus Vorlage…", click: send("tpl-new") },
          { type: "separator" },
          { label: "Eigenschaften…", click: send("props") },
          { label: "Dateiinfo…", click: send("file-info") },
          { label: farmReadonly ? "Schreibschutz ✓" : "Schreibschutz", click: send("farm-readonly") },
          { label: "Seite einrichten…", click: send("page") },
          { label: "Druckvorschau…", click: send("preview") },
          { label: printOn ? "Druckplan ✓" : "Druckplan…", click: send("print-plan") },
          { label: "Drucken…", accelerator: "CmdOrCtrl+P", registerAccelerator: false, click: send("print") },
          { label: "Einstellungen…", click: send("settings") },
          { type: "separator" },
          { label: "Standardordner…", click: send("std-dir") },
          { label: "Im Explorer zeigen", enabled: hasFile, click: send("folder") },
          { label: "Gelöschte Projekte…", click: send("trash") },
          { label: "Neues Fenster", click: send("new-window") },
          { type: "separator" },
          { label: "Schließen", accelerator: "CmdOrCtrl+W", click: () => closeWindow(win) },
          { label: "Beenden", accelerator: "CmdOrCtrl+Q", click: () => shutdown(0) },
        ],
      },
      {
        label: "Bearbeiten",
        submenu: [
          { label: "Rückgängig", accelerator: "CmdOrCtrl+Z", registerAccelerator: false, click: send("undo") },
          { label: "Wiederholen", accelerator: "CmdOrCtrl+Y", registerAccelerator: false, click: send("redo") },
          { type: "separator" },
          { label: "Ausschneiden", accelerator: "CmdOrCtrl+X", registerAccelerator: false, click: send("cut") },
          { label: "Kopieren", accelerator: "CmdOrCtrl+C", registerAccelerator: false, click: send("copy") },
          { label: "Einfügen", accelerator: "CmdOrCtrl+V", registerAccelerator: false, click: send("paste") },
          { label: "Duplizieren", accelerator: "CmdOrCtrl+D", registerAccelerator: false, click: send("dup") },
          { label: "Löschen", accelerator: "Delete", registerAccelerator: false, click: send("delete") },
          { type: "separator" },
          { label: "Alles auswählen", accelerator: "CmdOrCtrl+A", registerAccelerator: false, click: send("select-all") },
          { label: "Auswahl aufheben", click: send("deselect") },
          { label: "Auswahl umkehren", click: send("invert") },
          { label: "Suchen…", accelerator: "CmdOrCtrl+F", registerAccelerator: false, click: send("find") },
          { label: "Suchen und ersetzen…", click: send("find-replace") },
          { type: "separator" },
          { label: "Nach vorn", click: send("z-up") },
          { label: "Nach hinten", click: send("z-down") },
          { label: "Ganz nach vorn", click: send("z-top") },
          { label: "Ganz nach hinten", click: send("z-bottom") },
          { type: "separator" },
          {
            label: "Ausrichten",
            submenu: [
              { label: "Links", click: send("align-left") },
              { label: "Rechts", click: send("align-right") },
              { label: "Oben", click: send("align-top") },
              { label: "Unten", click: send("align-bottom") },
              { label: "Mitte waagerecht", click: send("align-cx") },
              { label: "Mitte senkrecht", click: send("align-cy") },
            ],
          },
          {
            label: "Gleicher Abstand",
            submenu: [
              { label: "Waagerecht", click: send("dist-h") },
              { label: "Senkrecht", click: send("dist-v") },
            ],
          },
          { label: "Verschieben um…", click: send("nudge") },
          { label: "Drehen 15°", click: send("rot+") },
          { label: "Drehen −15°", click: send("rot-") },
          { label: "Weg verlängern", click: send("extend") },
          { label: "Versatz 0,4 m", click: send("offset") },
          { label: "Versatz Maß…", click: send("offset-dlg") },
          { label: "An Schnitt trimmen", click: send("trim") },
          { label: "Ecken runden", click: send("round") },
          { label: "Spiegeln waagerecht", click: send("mirror-h") },
          { label: "Spiegeln senkrecht", click: send("mirror-v") },
          { label: "Polarkopie…", click: send("polar-dlg") },
          { label: "Gruppieren", accelerator: "CmdOrCtrl+G", registerAccelerator: false, click: send("group") },
          { label: "Gruppe lösen", click: send("ungroup") },
          { label: "Beet teilen", click: send("split") },
          { label: "Beete vereinen", click: send("merge-beds") },
          { label: "Koordinate…", click: send("coord") },
          { label: "Skalieren um…", click: send("scale-dlg") },
          { label: "Drehen um Winkel…", click: send("rot-dlg") },
          { label: "Größe numerisch…", click: send("size-dlg") },
          { label: "Sperren / Entsperren", accelerator: "CmdOrCtrl+L", registerAccelerator: false, click: send("lock") },
          { label: "Entsperren", click: send("unlock") },
          { label: "Alle entsperren", click: send("unlock-all") },
          { label: "Ausblenden", click: send("hide") },
          { label: "Andere ausblenden", click: send("isolate") },
          { label: "Alle einblenden", click: send("unhide") },
          { label: "Gleiche auswählen", click: send("select-same") },
          { label: "22,5° drehen", accelerator: "CmdOrCtrl+R", registerAccelerator: false, click: send("rot-90") },
          { label: "Gleiche Breite", click: send("same-w") },
          { label: "Gleiche Höhe", click: send("same-h") },
          { label: "Fase", click: send("chamfer") },
          { label: "Als Bild kopieren", click: send("copy-png") },
          { label: "Rechteckige Kopie", click: send("array-rect") },
          { label: "Eigenschaften übertragen", click: send("format-paint") },
          { type: "separator" },
          { label: "22,5° drehen", accelerator: "CmdOrCtrl+R", registerAccelerator: false, click: send("rot-90") },
          { label: "Karte leeren", click: send("clear") },
        ],
      },
      {
        label: "Einfügen",
        submenu: [
          { label: "Pflanze", click: send("ins-plant") },
          { label: "Vorlage hier", click: send("tpl-here") },
          { label: "Favorit erneut", click: send("last-ins") },
          { type: "separator" },
          { label: "Maßband", click: send("tool-measure") },
          { label: "Bemaßung", click: send("dim-save") },
          { label: "Polygon-Beet", click: send("tool-poly") },
          { label: "Reihe entlang Linie", click: send("tool-array") },
          { label: "Schnittlinie", click: send("tool-section") },
          { label: "Bogen", click: send("tool-arc") },
          { label: "Spline", click: send("tool-spline") },
          { label: "Bewässerungsleitung", click: send("tool-pipe") },
          { label: "Rechteck", click: send("tool-rect") },
          { label: "Kreis zeichnen", click: send("tool-circle") },
          { label: "Schlag zeichnen", click: send("tool-schlag") },
          { label: "Hilfslinie", click: send("ins-guide") },
          { type: "separator" },
          { label: "Text / Beschriftung", click: send("ins-text") },
          { label: "Hinweis / Pfeil", click: send("ins-hint") },
          { label: "Nordpfeil", click: send("ins-north") },
          { label: "Maßstabsleiste", click: send("ins-scalebar") },
          { label: "Schriftfeld", click: send("ins-title") },
          { label: "Punkt / Vermessung", click: send("ins-punkt") },
          { label: "Bild auf der Karte…", click: send("aerial") },
          { label: "Objekt suchen…", click: send("ins-search") },
          { type: "separator" },
          { label: "Standardbeet 1,20 × 10 m", click: send("std-bed") },
          { label: "Kreis / Tank", click: send("ins-tank") },
          { label: "Tropfer / Schlauch", click: send("ins-tropfschlauch") },
          { label: "Sprenger", click: send("ins-bewaesserung") },
          { label: "Standardweg", click: send("ins-weg") },
          { label: "Hecke", click: send("ins-hecke") },
          { label: "Baum", click: send("ins-apfel") },
          { label: "Gewächshaus", click: send("ins-gewaechshaus") },
          { label: "Kompost", click: send("ins-kompost") },
          { type: "separator" },
          {
            label: "Objekte",
            submenu: [
              { label: "Objekte einfügen", click: send("objects-fly") },
              { label: "Leiste ein/aus", click: send("objects") },
              { type: "separator" },
              ...BAR_SECTIONS.map((s) => ({
                label: s.label,
                submenu: insertGroups()
                  .filter((g) => s.groups.includes(g.label))
                  .map((g) => ({ label: `${g.label} (${g.items.length})`, click: send(`ins-group:${g.label}`) })),
              })),
            ],
          },
        ],
      },
      {
        label: "Kultur",
        submenu: [
          {
            label: "Beetlogik",
            submenu: [
              { label: "Beetlogik öffnen…", click: send("bed-logic") },
              { type: "separator" },
              { label: "Lage", click: send("bed-lage") },
              { label: "Raster / Muster", click: send("bed-raster") },
              { label: "Wasserjahr", click: send("bed-wasser") },
              { label: "Nährstoffe NPK", click: send("bed-npk") },
              { label: "Fruchtfolge / Folge", click: send("bed-folge") },
              { label: "Mischkultur…", click: send("bed-mix") },
              { label: "Jahresbelegung", click: send("bed-jahr") },
              { label: "Aufgaben der KW", click: send("bed-aufgaben") },
              { label: "Alle Beete", click: send("bed-liste") },
              { type: "separator" },
              {
                label: "Pflanzmuster",
                submenu: [
                  { label: "Quadrat", click: send("bed-pattern:quadrat") },
                  { label: "Dreieck versetzt", click: send("bed-pattern:dreieck") },
                  { label: "Doppelreihe", click: send("bed-pattern:doppelreihe") },
                  { label: "Bandsaat", click: send("bed-pattern:band") },
                ],
              },
              {
                label: "Mulchart",
                submenu: [
                  { label: "Stroh", click: send("bed-mulch:stroh") },
                  { label: "Holzhäcksel", click: send("bed-mulch:holz") },
                  { label: "Lebendmulch", click: send("bed-mulch:lebend") },
                  { label: "Folie", click: send("bed-mulch:folie") },
                  { label: "Kompostdecke", click: send("bed-mulch:kompost") },
                  { label: "Mulch aus", click: send("bed-mulch:aus") },
                ],
              },
              {
                label: "Beetvorlage",
                submenu: [
                  { label: "Salatbeet Sätze", click: send("bed-tpl:salat") },
                  { label: "Tomate Rank", click: send("bed-tpl:tomate") },
                  { label: "Möhre + Zwiebel", click: send("bed-tpl:moehre") },
                  { label: "Kartoffel Damm", click: send("bed-tpl:kartoffel") },
                  { label: "Kohl + Salat", click: send("bed-tpl:kohl") },
                  { label: "Buschbohne N-Sammler", click: send("bed-tpl:bohne") },
                  { label: "Kräuter", click: send("bed-tpl:kraeuter") },
                  { label: "Gründüngung Pause", click: send("bed-tpl:gruenduengung") },
                ],
              },
            ],
          },
          { label: "Kultur wählen…", click: send("kultur") },
          { label: "Sorte aus Katalog…", click: send("kultur-cat") },
          { label: "Sorte anlegen…", click: send("farm-crop-new") },
          { type: "separator" },
          { label: "Beet füllen", click: send("fill") },
          { label: "Einzelpflanze setzen", click: send("tool-plant") },
          { label: "Pflanzabstand…", click: send("space-dlg") },
          { label: "Reihenabstand…", click: send("row-space") },
          { label: "Kultur dem Beet zuweisen", click: send("bed-crop") },
          { label: "Alle Beete diese Kultur", click: send("crop-all") },
          { label: "Kultur tauschen", click: send("crop-swap") },
          { label: "Setzlinge / Stückzahl", click: send("seedlings") },
          { type: "separator" },
          { label: "Beet ernten", click: send("harvest") },
          { label: "Ernte zurücknehmen", click: send("unharvest") },
          { label: "Alle Beete ernten", click: send("harvest-all") },
          { label: "Abgeerntete entfernen", click: send("clear-harvest") },
          { label: "Beet räumen", click: send("bed-clear") },
          { type: "separator" },
          { label: "Saat- / Pflanzdatum…", click: send("crop-dates") },
          { label: "Direktsaat", click: send("sow-saat") },
          { label: "Jungpflanze", click: send("sow-jung") },
          { label: "Nächster Satz", click: send("next-satz") },
          { label: "Fruchtfolge prüfen", click: send("rotation") },
          { label: "Fruchtfolge Jahre…", click: send("rot-years") },
          { label: "Gründüngung", click: send("cover-crop") },
          { label: "Mulch", click: send("mulch") },
          { label: "Rankhilfe / Netz", click: send("support") },
          { label: "Krankheit / Schädlingsnotiz…", click: send("pest") },
          { label: "Saatgutlager…", click: send("seed") },
          { label: "Düngergabe…", click: send("fert") },
          { label: "Ist gegen Prognose…", click: send("yield-cmp") },
          { label: "Wasserbedarf Beet", click: send("kultur-water") },
          { label: "Beet ausdünnen", click: send("bed-thin") },
          { label: "Nächste Kultur", click: send("bed-next") },
          { label: "Nächstes Feld (4 Jahre)", click: send("bed-four") },
          { label: "Jahr in Fruchtfolge", click: send("bed-hist") },
          { label: "Mischkultur füllen", click: send("bed-mix-fill") },
          { label: "Beete CSV", click: send("bed-csv") },
          { label: "Jahresplan CSV", click: send("bed-year-csv") },
          { label: "Fruchtfolge CSV", click: send("bed-rot-csv") },
          { label: "Aufgaben CSV", click: send("bed-task-csv") },
          { label: "Wasserjahr CSV", click: send("bed-water-csv") },
          { label: "Stückliste Kultur", click: send("kultur-list") },
          { label: "Ist-Ertrag…", click: send("yield-ist") },
        ],
      },
      {
        label: "Garten",
        submenu: [
          { label: "Gartenplanung…", click: send("garten") },
          { type: "separator" },
          { label: "Fläche ziehen (Kanten)", click: send("field-hint") },
          { label: "Nach Osten +10 m", click: send("extend-e") },
          { label: "Nach Norden +10 m", click: send("extend-n") },
          { label: "Nach Westen +10 m", click: send("extend-w") },
          { label: "Nach Süden +10 m", click: send("extend-s") },
          { label: "Fläche erweitern…", click: send("extend-dlg") },
          { label: "Eigenschaften (m)…", click: send("props") },
          { type: "separator" },
          { label: "Beet zeichnen", click: send("tool-beet") },
          { label: "Standardbeet 1,20 × 10 m", click: send("std-bed") },
          { label: "Hochbeet 1,20 × 2 m", click: send("raised") },
          { label: "Hochbeet-Schichten…", click: send("raised-layers") },
          { label: "Hügelbeet", click: send("ins-huegelbeet") },
          { label: "Keyhole-Beet", click: send("ins-keyhole-beet") },
          { label: "Wege zwischen Beeten", click: send("bed-paths") },
          { label: "Beete-Generator…", click: send("beds-gen") },
          { label: "Schläge teilen…", click: send("parcels") },
          { label: "Schlag zeichnen", click: send("tool-schlag") },
          { label: "Beet füllen", click: send("fill") },
          { label: "Einzelpflanze", click: send("tool-plant") },
          { label: "Pflanzabstand…", click: send("space-dlg") },
          { type: "separator" },
          { label: "Frühbeet", click: send("ins-fruehbeet") },
          { label: "Folientunnel", click: send("ins-folientunnel") },
          { label: "Kräuterspirale", click: send("ins-spirale") },
          { label: "Kompostplatz", click: send("compost-place") },
          { label: "Regenfass", click: send("rain-barrel") },
          { label: "Rasen / Wiese", click: send("ins-wiese") },
          { label: "Sitzplatz", click: send("ins-sitzplatz") },
          { label: "Obstbaum mit Abstand", click: send("fruit-tree") },
          { label: "Wildblumenstreifen", click: send("ins-bluehstreifen") },
          { label: "Grenzabstand…", click: send("setback") },
          { type: "separator" },
          { label: "Beetlogik…", click: send("bed-logic") },
          { label: "Raster / Muster", click: send("bed-raster") },
          { label: "Mischkultur…", click: send("bed-mix") },
          { label: "Jahresbelegung", click: send("bed-jahr") },
          { label: "Fruchtfolge prüfen", click: send("rotation") },
          { label: "Saatkalender…", click: send("kalender-sow") },
          { label: "Erntekalender…", click: send("kalender-harvest") },
          { label: "Frost / Pflanzfenster", click: send("frost") },
          { type: "separator" },
          { label: "Wasserbedarf Beet", click: send("kultur-water") },
          { label: "Gießplan KW", click: send("kalender-guss") },
          { label: "Düngergabe…", click: send("fert") },
          { label: "Saatgutlager…", click: send("seed") },
          { label: "Bodenprofil…", click: send("boden") },
          { type: "separator" },
          { label: "Beispiel Hausgarten", click: send("farm-ex:haus") },
        ],
      },
      {
        label: "Kalender",
        submenu: [
          { label: "Diese Woche…", click: send("kalender") },
          { label: "Heute (KW jetzt)", click: send("week-now") },
          { label: "KW vor", click: send("week-") },
          { label: "KW nach", click: send("week+") },
          { type: "separator" },
          { label: "KW 1 Frühjahr", click: send("week:1") },
          { label: "KW 12 Saat", click: send("week:12") },
          { label: "KW 22 Frühsommer", click: send("week:22") },
          { label: "KW 32 Hochsommer", click: send("week:32") },
          { label: "KW 42 Herbst", click: send("week:42") },
          { label: "KW 52", click: send("week:52") },
          { type: "separator" },
          { label: "Saatkalender…", click: send("kalender-sow") },
          { label: "Pflanzkalender…", click: send("kalender-plant") },
          { label: "Erntekalender…", click: send("kalender-harvest") },
          { label: "Jahresübersicht", click: send("kalender-year") },
          { label: "Gießplan KW", click: send("kalender-guss") },
          { label: "KW direkt…", click: send("week-goto") },
          { label: "Zur Saat der Kultur", click: send("week-sow") },
          { type: "separator" },
          { label: "Anzucht / Vorkultur", click: send("kalender-start") },
          { label: "Satzplan", click: send("kalender-satz") },
          { label: "Schnittkalender", click: send("kalender-cut") },
          { label: "Mondkalender", click: send("kalender-moon") },
          { label: "Frost- und Hitzewochen", click: send("kalender-climate") },
          { type: "separator" },
          { label: "Aufgaben dieser Woche", click: send("kalender-tasks") },
          { label: "Aufgabe hinzufügen…", click: send("task-add") },
          { label: "Aufgabe erledigen", click: send("task-done") },
          { label: "Regen eintragen…", click: send("regen") },
          { label: "ICS exportieren", click: send("ics") },
        ],
      },
      {
        label: "Kennzahlen",
        submenu: [
          { label: "Rechner…", click: send("kz") },
          { label: "Matheagent…", click: send("math") },
          { label: "Übersichtstabelle", click: send("math-table") },
          { label: "Saison 52 Wochen", click: send("math-saison") },
          { label: "Statistik", click: send("math-stats") },
          { label: "Hinweise", click: send("math-alerts") },
          { label: "Bericht", click: send("math-report") },
          { label: "Mathe CSV", click: send("math-csv") },
          { label: "Bodenprofil…", click: send("boden") },
          { type: "separator" },
          { label: "Sand", click: send("soil:sand") },
          { label: "lehmiger Sand", click: send("soil:sls") },
          { label: "Lehm", click: send("soil:lehm") },
          { label: "Ton", click: send("soil:ton") },
          { label: "Humus", click: send("soil:humus") },
          { type: "separator" },
          { label: "Fläche & Beete", click: send("kz-area") },
          { label: "Wasserbilanz", click: send("kz-water") },
          { label: "Nährstoffe NPK", click: send("kz-npk") },
          { label: "Ertragsprognose", click: send("kz-yield") },
          { label: "Stückliste", click: send("kz-list") },
          { label: "Fruchtfolge", click: send("rotation") },
          { label: "Humusbilanz", click: send("kz-humus") },
          { label: "Saisonwasser", click: send("kz-season") },
          { label: "Kosten", click: send("kz-cost") },
          { label: "CSV exportieren", click: send("kz-csv") },
        ],
      },
      {
        label: "Matheagent",
        submenu: [
          { label: "Matheagent…", click: send("math") },
          { label: "Andocken", click: send("dock-math") },
          { type: "separator" },
          { label: "3D-Raum", click: send("math-3d") },
          { label: "Übersicht", click: send("math-table") },
          { label: "Statistik", click: send("math-stats") },
          { label: "Hinweise", click: send("math-alerts") },
          { label: "Beete", click: send("math-beds") },
          { label: "Rechnen", click: send("math-chat") },
          { label: "Variablen", click: send("math-vars") },
          { label: "Formeln", click: send("math-formeln") },
          { label: "Kulturen", click: send("math-kulturen") },
          { label: "Saison 52 Wochen", click: send("math-saison") },
          { label: "Szenario", click: send("math-szenario") },
          { label: "Bericht", click: send("math-report") },
          { type: "separator" },
          { label: "Orbit", click: send("math-orbit") },
          { label: "Gehen", click: send("math-walk") },
          { label: "Fliegen", click: send("math-fly") },
          { label: "Draufsicht", click: send("math-top") },
          { label: "Isometrie", click: send("math-iso") },
          { label: "Kennzahlen-Netz", click: send("math-netz") },
          { label: "Norden", click: send("math-north") },
          { label: "Westen", click: send("math-west") },
          { label: "Osten", click: send("math-east") },
          { label: "Süden", click: send("math-south") },
          { label: "Zum Knoten", click: send("math-focus") },
          { label: "Zoom plus", click: send("math-in") },
          { label: "Zoom minus", click: send("math-out") },
          { label: "Zurück", click: send("math-reset") },
          { type: "separator" },
          { label: "Mathe CSV", click: send("math-csv") },
          { label: "Bericht-Datei", click: send("math-report-file") },
          { label: "Log leeren", click: send("math-clear") },
          { label: "Kennzahlen-Rechner…", click: send("kz") },
        ],
      },
      {
        label: "Inspector",
        submenu: [
          { label: "Inspector", click: send("insp") },
          { label: "Eigenschaften…", click: send("props") },
          { type: "separator" },
          { label: "Nächstes Objekt", click: send("sel-next") },
          { label: "Vorheriges Objekt", click: send("sel-prev") },
          { label: "Auswahl einpassen", click: send("zoom-sel") },
          { label: "Suchen…", click: send("find") },
          { type: "separator" },
          { label: "Duplizieren", click: send("dup") },
          { label: "Löschen", click: send("delete") },
          { label: "Beet füllen", click: send("fill") },
          { label: "Sperren / Entsperren", accelerator: "CmdOrCtrl+L", registerAccelerator: false, click: send("lock") },
          { label: "Ausblenden", click: send("hide") },
          { label: "Alles einblenden", click: send("unhide") },
          { type: "separator" },
          { label: "Maße…", click: send("size-dlg") },
          {
            label: "Als Körper",
            submenu: [
              { label: "Als Quader", click: send("m3-box") },
              { label: "Als Zylinder", click: send("m3-cyl") },
              { label: "Als Kegel", click: send("m3-cone") },
              { label: "Als Kugel", click: send("m3-sphere") },
              { label: "Als Prisma", click: send("m3-prism") },
              { label: "Als Treppe", click: send("m3-stairs") },
              { label: "Als Silo", click: send("m3-silo") },
              { label: "Als Trog", click: send("m3-trough") },
              { label: "Als Pyramide", click: send("m3-pyramid") },
              { label: "Als Kuppel", click: send("m3-dome") },
              { label: "Als Satteldach", click: send("m3-gable") },
              { label: "Als Pfosten", click: send("m3-post") },
              { label: "Als Balken", click: send("m3-beam") },
              { label: "Als Platte", click: send("m3-slab") },
              { label: "Als Zelt", click: send("m3-tent") },
              { label: "Als Rohr", click: send("m3-tube") },
              { label: "Als Achteck", click: send("m3-oct") },
              { label: "Als Schale", click: send("m3-bowl") },
              { label: "Als Ring", click: send("m3-ring") },
              { label: "Als Torus", click: send("m3-torus") },
              { label: "Als Kapsel", click: send("m3-capsule") },
              { label: "Als Keil", click: send("m3-wedge") },
              { label: "Als Bogen", click: send("m3-arch") },
              { label: "Als Ebene", click: send("m3-plane") },
            ],
          },
        ],
      },
      {
        label: "Controlpanel",
        submenu: [
          { label: "Control Panel", click: send("control") },
          { type: "separator" },
          { label: "KW vor", click: send("week-") },
          { label: "KW nach", click: send("week+") },
          { label: "Heute (KW jetzt)", click: send("week-now") },
          { label: "KW direkt…", click: send("week-goto") },
          { label: "Regen eintragen…", click: send("regen") },
          { type: "separator" },
          { label: "Maße der Fläche…", click: send("garten") },
          { label: "Fläche erweitern…", click: send("extend-dlg") },
          { label: "Alles einpassen", click: send("zoom-fit") },
          { type: "separator" },
          { label: "Sand", click: send("soil:sand") },
          { label: "lehmiger Sand", click: send("soil:sls") },
          { label: "Lehm", click: send("soil:lehm") },
          { label: "Ton", click: send("soil:ton") },
          { label: "Humus", click: send("soil:humus") },
          { type: "separator" },
          { label: "2D", click: send("2d") },
          { label: "3D", click: send("3d") },
          { label: "Inspector", click: send("insp") },
          { label: "Minimap", click: send("mini") },
        ],
      },
      {
        label: "Ansicht",
        submenu: [
          { label: "2D", click: send("2d") },
          { label: "3D", click: send("3d") },
          { label: "Vollbild", accelerator: "F11", click: send("fullscreen") },
          { label: "Vollbild Karte", click: send("full") },
          { label: printOn ? "Druckplan ✓" : "Druckplan", click: send("print-plan") },
          { type: "separator" },
          { label: "Zoom plus", accelerator: "CmdOrCtrl+=", registerAccelerator: false, click: send("zoom-in") },
          { label: "Zoom minus", accelerator: "CmdOrCtrl+-", registerAccelerator: false, click: send("zoom-out") },
          { label: "100 %", click: send("zoom-100") },
          { label: "Alles einpassen", accelerator: "Home", registerAccelerator: false, click: send("zoom-fit") },
          { label: "Auswahl einpassen", click: send("zoom-sel") },
          { label: "Zoom-Fenster", click: send("zoom-box") },
          { label: "Vorherige Ansicht", click: send("view-back") },
          { label: "Nächste Ansicht", click: send("view-fwd") },
          { label: "Karte 90° drehen", click: send("rot90") },
          { type: "separator" },
          { label: "Inspector", click: send("insp") },
          { label: "Objekte", click: send("objects") },
          { label: "Control Panel", click: send("control") },
          { label: "Minimap", click: send("mini") },
          { label: "Minimap groß", click: send("mini-large") },
          { label: "Raster", click: send("grid") },
          { label: "Raster 0,1 m", click: send("grid-01") },
          { label: "Raster 0,25 m", click: send("grid-025") },
          { label: "Raster 1 m", click: send("grid-1") },
          { label: "Beschriftung", click: send("labels") },
          { label: "Pflanzen", click: send("ly-plants") },
          { label: "Wege", click: send("ly-paths") },
          { label: "Wasser", click: send("ly-water") },
          { label: "Bemaßung", click: send("ly-dims") },
          { label: "Legende", click: send("ly-legend") },
          { label: "Nordpfeil", click: send("ly-north") },
          { label: "Lineal", click: send("ly-rulers") },
          { label: "Maßstabsleiste", click: send("ly-scalebar") },
          { label: "Koordinaten-HUD", click: send("ly-hud") },
          { label: "Luftbild", click: send("ly-aerial") },
          { label: "GPS-Punkte", click: send("ly-gps") },
          { label: "Schwarzweiß-Plan", click: send("ly-bw") },
          { label: "Karte dunkel", click: send("ly-dark") },
          { label: "Höhenlinien", click: send("ly-contours") },
          { label: "Achsen 3D", click: send("ly-axes3") },
          { label: "Sonne/Schatten", click: send("ly-sun") },
          { label: "Höhenfarbe", click: send("ly-heatmap") },
          { label: "Neigung", click: send("ly-slope") },
          { label: "Orthogonal 3D", click: send("ly-ortho3") },
          { label: "Pflanzraster", click: send("ly-gridp") },
          { label: "Bewässerung", click: send("ly-irrig") },
          { label: "Nur Auswahl", click: send("only-sel") },
          { label: "Fang ein", click: send("snap") },
          { label: "Rasterfang", click: send("snap-grid") },
          { label: "Endpunkt", click: send("snap-end") },
          { label: "Mittelpunkt", click: send("snap-mid") },
          { label: "Schnittpunkt", click: send("snap-ints") },
          { label: "Kante / Lot", click: send("snap-perp") },
          { label: "Layer…", click: send("layers") },
          { label: "Schwenken links", click: send("pan-left") },
          { label: "Schwenken rechts", click: send("pan-right") },
          { label: "Schwenken oben", click: send("pan-up") },
          { label: "Schwenken unten", click: send("pan-down") },
          { type: "separator" },
          { label: "Geteilte Ansicht 2D | 3D", click: send("split-view") },
          { label: "Statuszeile", click: send("status") },
          { label: "Modellieren-Leiste", click: send("model3-bar") },
          { label: "UI 100 %", click: send("ui-100") },
          { label: "UI 125 %", click: send("ui-125") },
          { label: "UI 150 %", click: send("ui-150") },
          { label: "Präsentation (UI aus)", click: send("present") },
          { type: "separator" },
          { role: "reload", label: "Neu laden" },
          { role: "toggleDevTools", label: "Werkzeuge" },
        ],
      },
      {
        label: "Fenster",
        submenu: [
          { label: "Inspector", click: send("insp") },
          { label: "Objekte", click: send("objects") },
          { label: "Modellieren", click: send("model3-bar") },
          { label: "Control Panel", click: send("control") },
          { label: "Minimap", click: send("mini") },
          { label: "Minimap groß", click: send("mini-large") },
          { type: "separator" },
          { label: "Geteilte Ansicht 2D | 3D", click: send("split-view") },
          { label: "Vollbild", click: send("fullscreen") },
          { label: "Nur Karte", click: send("layout-map") },
          { label: "Layout Standard", click: send("layout-std") },
          { label: "Layout CAD", click: send("layout-cad") },
          { label: "Layout 3D", click: send("layout-3d") },
          { label: "Alle Panels", click: send("layout-all") },
          { label: "Panels schließen", click: send("layout-none") },
          { type: "separator" },
          { label: "Matheagent", click: send("dock-math") },
          { label: "Kennzahlen", click: send("dock-kz") },
          { label: "Kalender", click: send("dock-kal") },
          { label: "Layer-Palette", click: send("dock-layers") },
          { type: "separator" },
          { label: "Arbeitsbereich speichern", click: send("ws-save") },
          { label: "Arbeitsbereich laden", click: send("ws-load") },
          { label: "Neues Fenster", click: send("new-window") },
          { label: "Immer im Vordergrund", click: send("always-top") },
        ],
      },
      {
        label: "3D",
        submenu: [
          { label: "3D-Karte", click: send("3d") },
          { label: "Zurück zu 2D", click: send("2d") },
          { label: "Vollbild", click: send("fullscreen") },
          { type: "separator" },
          { label: "Kamera zurück", click: send("cam3-reset") },
          { label: "Auswahl anvisieren", click: send("cam3-sel") },
          { label: "Draufsicht", click: send("cam3-top") },
          { label: "Ansicht vorn", click: send("cam3-front") },
          { label: "Ansicht seitlich", click: send("cam3-side") },
          { label: "Isometrie", click: send("cam3-iso") },
          { label: "Zoom plus", click: send("cam3-in") },
          { label: "Zoom minus", click: send("cam3-out") },
          { label: "Schwenken links", click: send("cam3-left") },
          { label: "Schwenken rechts", click: send("cam3-right") },
          { label: "Schwenken oben", click: send("cam3-up") },
          { label: "Schwenken unten", click: send("cam3-down") },
          { label: "Blick nach Norden", click: send("cam3-north") },
          { type: "separator" },
          { label: "Raster", click: send("grid") },
          { label: "Beschriftung", click: send("labels") },
          { label: "Nordpfeil", click: send("ly-north") },
          { label: "Achsen 3D", click: send("ly-axes3") },
          { label: "Höhenlinien", click: send("ly-contours") },
          { label: "Maßstabsleiste", click: send("ly-scalebar") },
          { label: "Bemaßung", click: send("ly-dims") },
          { label: "Lineal", click: send("ly-rulers") },
          { label: "Sonne/Schatten", click: send("ly-sun") },
          { label: "Höhenfarbe", click: send("ly-heatmap") },
          { label: "Neigung", click: send("ly-slope") },
          { label: "Orthogonal", click: send("ly-ortho3") },
          { label: "Pflanzraster", click: send("ly-gridp") },
          { label: "Bewässerung", click: send("ly-irrig") },
          { label: "GPS-Punkte", click: send("ly-gps") },
          { label: "Nur Auswahl", click: send("only-sel") },
          { type: "separator" },
          { label: "Morgen", click: send("sun-dawn") },
          { label: "Mittag", click: send("sun-noon") },
          { label: "Abend", click: send("sun-dusk") },
          { label: "Schatten", click: send("gfx-shadows") },
          { label: "Nebel", click: send("gfx-fog") },
          { label: "Drahtgitter", click: send("gfx-wire") },
          { label: "Gelände", click: send("gfx-terrain") },
          { label: "Pflanzen aus (LOD)", click: send("gfx-plants0") },
          { type: "separator" },
          { label: "Frühling", click: send("season:10") },
          { label: "Sommer", click: send("season:22") },
          { label: "Herbst", click: send("season:36") },
          { label: "Winter", click: send("season:48") },
          { type: "separator" },
          { label: "Grafik…", click: send("gfx") },
          { label: "Grafik zurücksetzen", click: send("gfx-reset") },
          { type: "separator" },
          {
            label: "Modellieren",
            submenu: modellierenMenu(send),
          },
          { type: "separator" },
          { label: "PNG 3D…", click: send("png3") },
          { label: "PNG 4K…", click: send("png3-4k") },
          { label: "glTF exportieren…", click: send("gltf") },
          { label: "glTF Pflanze laden…", click: send("gltf-in") },
          { label: "Sonne animieren", click: send("sun-play") },
          { label: "Kamera speichern", click: send("cam-save") },
          { label: "Kamera laden", click: send("cam-load") },
          { label: "Kamera 1 speichern", click: send("slot-save:0") },
          { label: "Kamera 1", click: send("slot:0") },
          { label: "Kamera 2 speichern", click: send("slot-save:1") },
          { label: "Kamera 2", click: send("slot:1") },
          { label: "Kamera 3 speichern", click: send("slot-save:2") },
          { label: "Kamera 3", click: send("slot:2") },
          { label: "Kamera 4 speichern", click: send("slot-save:3") },
          { label: "Kamera 4", click: send("slot:3") },
          { label: "Beet-Schnitt", click: send("cut3") },
          { label: "Wachstum abspielen", click: send("grow-play") },
          { label: "Schwenken links", click: send("cam3-left") },
          { label: "Schwenken rechts", click: send("cam3-right") },
        ],
      },
      {
        label: "Modellieren",
        submenu: modellierenMenu(send),
      },
      {
        label: "Betrieb",
        submenu: [
          { label: "Hofbüro…", click: send("farm-ops") },
          { label: "Befehlspalette…", accelerator: "CommandOrControl+K", registerAccelerator: false, click: send("farm-cmd") },
          { label: "Führung…", click: send("farm-tour") },
          { type: "separator" },
          { label: "Wetter KW…", click: send("farm-weather") },
          { label: "Feiertage BY", click: send("farm-holidays") },
          { label: "Wochenzettel", click: send("farm-weekprint") },
          { type: "separator" },
          { label: "Team…", click: send("farm-team") },
          { label: "Kosten…", click: send("farm-cost") },
          { label: "Solawi-Anteile…", click: send("farm-csa") },
          { label: "Bewässerungsplan", click: send("farm-irrig") },
          { label: "Hang / Erosion", click: send("farm-slope") },
          { label: "Beschattung Beete", click: send("farm-shade") },
          { label: "Saatgutbedarf", click: send("farm-seed") },
          { type: "separator" },
          { label: "Beispiel Solawi", click: send("farm-ex:solawi") },
          { label: "Beispiel Hausgarten", click: send("farm-ex:haus") },
          { label: "Beispiel Erwerb", click: send("farm-ex:erwerb") },
          { type: "separator" },
          { label: "Sicherungskopie…", click: send("farm-backup") },
          { label: "Sync-Datei…", click: send("farm-sync") },
          { label: "Projekt sperren", click: send("farm-readonly") },
          { label: "Passwort setzen…", click: send("farm-lock") },
          { label: "Sorte anlegen…", click: send("farm-crop-new") },
          { type: "separator" },
          { label: "Schlagkartei", click: send("farm-schlag") },
          { label: "Erntebuch", click: send("farm-ernte") },
          { label: "Pflanzenschutz", click: send("farm-spray") },
          { label: "Bestände", click: send("farm-stock") },
          { label: "Mitglieder / Abholort", click: send("farm-members") },
          { label: "Arbeitsstunden", click: send("farm-hours") },
          { label: "Packliste Kiste", click: send("farm-pack") },
          { label: "Wetter importieren…", click: send("farm-wx-in") },
          { label: "Betriebsdaten", click: send("farm-id") },
        ],
      },
      {
        label: "Sensorik",
        submenu: [
          { label: "Sensorik…", click: send("lab-sensorik") },
          { label: "Live-Werte", click: send("lab-sensorik") },
          { label: "Bodenfeuchte", click: send("lab-sensor-feuchte") },
          { label: "Temperatur", click: send("lab-sensor-temp") },
          { label: "Luft und VPD", click: send("lab-sensor-luft") },
          { label: "pH und EC", click: send("lab-sensor-ph") },
          { label: "Alarme", click: send("lab-sensorik") },
          { type: "separator" },
          { label: "Auf Karte anlegen", click: send("lab-sensor-map") },
          { label: "Feuchtesensor +", click: send("lab-sensor-add:feuchte") },
          { label: "Temperatursensor +", click: send("lab-sensor-add:temp") },
          { label: "pH-Sensor +", click: send("lab-sensor-add:ph") },
          { label: "Sensoren CSV", click: send("lab-sensor-csv") },
        ],
      },
      {
        label: "Wetter",
        submenu: [
          { label: "Wetter…", click: send("lab-wetter") },
          { label: "Diese Woche", click: send("lab-wetter") },
          { label: "Jahresgang", click: send("lab-wetter") },
          { label: "Frost und Hitze", click: send("lab-wetter") },
          { label: "Arbeitsfenster", click: send("lab-wetter") },
          { label: "Phänologie", click: send("lab-wetter") },
          { type: "separator" },
          { label: "Station Chiemgau", click: send("lab-wx-station:chiemgau") },
          { label: "Station Alpenrand", click: send("lab-wx-station:alpin") },
          { label: "Station Warmlage", click: send("lab-wx-station:warm") },
          { label: "Wetter importieren…", click: send("farm-wx-in") },
          { label: "Jahr als CSV", click: send("lab-wx-csv") },
          { label: "Wetter KW (Hofbüro)", click: send("farm-weather") },
        ],
      },
      {
        label: "Coding",
        submenu: [
          { label: "Coding…", click: send("lab-coding") },
          { label: "Neue Regel", click: send("lab-coding") },
          { label: "Regeln ausführen", click: send("lab-coding-run") },
          { label: "Jahr simulieren", click: send("lab-coding-sim") },
          { label: "Beispielregeln", click: send("lab-coding-ex") },
          { label: "Bibliothek", click: send("lab-coding-lib") },
          { label: "Regeln CSV", click: send("lab-coding-csv") },
        ],
      },
      {
        label: "Biosystemmodelling",
        submenu: [
          { label: "Modell…", click: send("lab-biosystem") },
          { label: "Wasserhaushalt", click: send("lab-biosystem") },
          { label: "Szenario +2 °C", click: send("lab-biosystem") },
          { label: "Szenario Trocken", click: send("lab-biosystem") },
        ],
      },
      {
        label: "Datenbank",
        submenu: datenbankMenu(send),
      },
      { label: "Hilfe", submenu: [
        { label: "Handbuch…", accelerator: "F1", registerAccelerator: false, click: send("handbuch") },
        { label: "Im Handbuch suchen…", click: send("handbuch-find") },
        { type: "separator" },
        { label: "Kapitel", submenu: [
          { label: "Start", submenu: [
            { label: "Erste Schritte", click: send("book:start") },
            { label: "Oberfläche und Leisten", click: send("book:oberflaeche") },
            { label: "Die Hofdatei", click: send("book:datei-format") },
          ] },
          { label: "Datei", submenu: [
            { label: "Neu, Öffnen, Projekte", click: send("book:datei-neu") },
            { label: "Speichern und Versionen", click: send("book:datei-save") },
            { label: "Import, Export, Austausch", click: send("book:datei-ex") },
            { label: "Vorlagen", click: send("book:datei-tpl") },
            { label: "Drucken und Seite", click: send("book:datei-print") },
            { label: "Einheiten, GPS, Kataster", click: send("book:datei-geo") },
            { label: "Schreibschutz und Ordner", click: send("book:datei-lock") },
          ] },
          { label: "Bearbeiten", submenu: [
            { label: "Auswahl, Kopieren, Suchen", click: send("book:edit") },
            { label: "Ausrichten, Reihenfolge, Sperren", click: send("book:edit-align") },
            { label: "Fang, Ortho, Versatz", click: send("book:fang") },
            { label: "Drehen, Skalieren, Teilen", click: send("book:edit-form") },
          ] },
          { label: "Einfügen", submenu: [
            { label: "Objektleiste und Katalog", click: send("book:objekte") },
            { label: "Zeichnen: Beet, Spline, Leitung", click: send("book:zeichnen") },
            { label: "Planzeichen", click: send("book:plan") },
          ] },
          { label: "Kultur", submenu: [
            { label: "Beet füllen und ernten", click: send("book:kultur") },
            { label: "Beetlogik", click: send("book:beetlogik") },
            { label: "Raster, Mulch, Vorlagen", click: send("book:beetlogik-raster") },
            { label: "Fruchtfolge und Mischkultur", click: send("book:beetlogik-folge") },
            { label: "Saatgut, Dünger, Ertrag", click: send("book:saat") },
          ] },
          { label: "Garten", submenu: [
            { label: "Fläche und Beete", click: send("book:garten") },
            { label: "Strukturen und Pflege", click: send("book:garten-struktur") },
          ] },
          { label: "Kalender", submenu: [
            { label: "KW, Saat, Ernte, Aufgaben", click: send("book:kalender") },
          ] },
          { label: "Kennzahlen", submenu: [
            { label: "Wasser, NPK, Ertrag", click: send("book:kz") },
            { label: "Bodenprofil", click: send("book:kz-boden") },
          ] },
          { label: "Matheagent", submenu: [
            { label: "Rechnen und Bericht", click: send("book:math-menu") },
            { label: "3D-Raum und Kamera", click: send("book:math-3d") },
          ] },
          { label: "Inspector", submenu: [
            { label: "Inspector", click: send("book:insp-menu") },
          ] },
          { label: "Controlpanel", submenu: [
            { label: "Control Panel", click: send("book:control-menu") },
          ] },
          { label: "Ansicht", submenu: [
            { label: "Karte 2D steuern", click: send("book:2d") },
            { label: "Panels, Layer, Vollbild", click: send("book:ansicht") },
            { label: "Grafik und Auflösung", click: send("book:gfx") },
          ] },
          { label: "Fenster", submenu: [
            { label: "Layouts und Andocken", click: send("book:fenster") },
          ] },
          { label: "3D", submenu: [
            { label: "Kamera und Werkzeuge", click: send("book:3d") },
            { label: "Modellieren in der Karte", click: send("book:3d-edit") },
            { label: "Pflanzen in 3D", click: send("book:3d-pflanzen") },
            { label: "Tomatenpflanze", click: send("book:tomate-3d") },
            { label: "Modellieren-Atelier", click: send("book:modellieren") },
          ] },
          { label: "Betrieb", submenu: [
            { label: "Hofbüro", click: send("book:betrieb") },
            { label: "Hofbuch", click: send("book:betrieb-buch") },
          ] },
          { label: "Labor", submenu: [
            { label: "Sensorik, Wetter, Coding, Biosystem", click: send("book:labor") },
            { label: "Sensorik", click: send("book:sensorik") },
            { label: "Wetter", click: send("book:wetter") },
            { label: "Coding", click: send("book:coding") },
            { label: "Biosystemmodelling", click: send("book:biosystem") },
          ] },
          { label: "Datenbank", submenu: [
            { label: "Pflanzen-Lexikon und 3D-Modelle", click: send("book:datenbank") },
          ] },
          { label: "Tasten", submenu: [
            { label: "Tastenkürzel", click: send("book:tasten") },
          ] },
          { label: "Hilfe", submenu: [
            { label: "Handbuch suchen", click: send("book:suche") },
            { label: "Führung und Beispiele", click: send("book:tour") },
            { label: "Windows-Programm", click: send("book:windows") },
            { label: "Wenn etwas fehlt oder abstürzt", click: send("book:fehler") },
          ] },
        ] },
        { type: "separator" },
        { label: "Kurzanleitung…", click: send("hilfe") },
        { label: "Tastenkürzel", click: send("tasten") },
        { label: "Was ist neu", click: send("news") },
        { label: "Beispielgarten", click: send("sample") },
        { label: "Führung am Beispiel…", click: send("farm-tour") },
        { label: "Über Ackerlicht", click: send("about") },
      ] },
    ];
  if (process.platform === "darwin") template.unshift({ role: "appMenu" });
  const inToolbar = new Set(["Bearbeiten", "Kultur", "Garten", "Matheagent", "Inspector", "Controlpanel", "Ansicht", "3D", "Modellieren"]);
  const items = template.filter((item) => !inToolbar.has(item.label));
  const dateiAt = items.findIndex((item) => item.label === "Datei");
  items.splice(dateiAt < 0 ? 0 : dateiAt + 1, 0, {
    label: "Bearbeiten",
    submenu: [
      { label: "Rückgängig", accelerator: "CmdOrCtrl+Z", click: send("undo") },
      { label: "Wiederholen", accelerator: "CmdOrCtrl+Y", click: send("redo") },
      { label: "Wiederholen", accelerator: "CmdOrCtrl+Shift+Z", click: send("redo") },
      { type: "separator" },
      { label: "Löschen", accelerator: "Delete", click: send("delete") },
      { label: "Löschen", accelerator: "Backspace", click: send("delete") },
    ],
  });
  const menu = Menu.buildFromTemplate(items);
  Menu.setApplicationMenu(menu);
  win.setMenu(menu);
  win.setMenuBarVisibility(true);
  win.setAutoHideMenuBar(false);
}

ipcMain.on("desktop:sync-menu", (e, state) => {
  recents = Array.isArray(state?.recent) ? state.recent.map(String) : [];
  autoOn = !!state?.autoSave;
  hasFile = !!state?.hasPath;
  farmReadonly = !!state?.readonly;
  unitsCm = state?.units === "cm";
  printOn = !!state?.printMode;
  const win = senderWin(e);
  if (win) attachMenu(win);
});

app.whenReady().then(async () => {
  nativeTheme.themeSource = "dark";
  httpServer = await startServer();
  servePort = httpServer.address().port;
  openPlannerWindow(servePort);
});

app.on("before-quit", (e) => {
  if (quitting) return;
  e.preventDefault();
  shutdown(0);
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0 && servePort) openPlannerWindow(servePort);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") shutdown(0);
});
