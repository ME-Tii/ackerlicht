import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("desktop", {
  isDesktop: true,
  open: () => ipcRenderer.invoke("desktop:open"),
  save: (name, text, dir, ext) => ipcRenderer.invoke("desktop:save", name, text, dir, ext),
  saveTo: (path, text) => ipcRenderer.invoke("desktop:saveTo", path, text),
  reveal: (path) => ipcRenderer.invoke("desktop:reveal", path),
  pdf: (name) => ipcRenderer.invoke("desktop:pdf", name),
  pickDir: () => ipcRenderer.invoke("desktop:pickDir"),
  quit: () => ipcRenderer.invoke("desktop:quit"),
  close: () => ipcRenderer.invoke("desktop:close"),
  fullscreen: () => ipcRenderer.invoke("desktop:fullscreen"),
  isFullscreen: () => ipcRenderer.invoke("desktop:isFullscreen"),
  newWindow: () => ipcRenderer.invoke("desktop:newWindow"),
  alwaysTop: () => ipcRenderer.invoke("desktop:alwaysTop"),
  syncMenu: (state) => ipcRenderer.send("desktop:sync-menu", state),
  onMenu: (fn) => {
    const h = (_e, action) => fn(action);
    ipcRenderer.on("desktop:menu", h);
    return () => ipcRenderer.removeListener("desktop:menu", h);
  },
  onWillClose: (fn) => {
    const h = () => fn();
    ipcRenderer.on("desktop:will-close", h);
    return () => ipcRenderer.removeListener("desktop:will-close", h);
  },
  flushed: () => ipcRenderer.send("desktop:flushed"),
  onFullscreen: (fn) => {
    const h = (_e, on) => fn(!!on);
    ipcRenderer.on("desktop:fullscreen-changed", h);
    return () => ipcRenderer.removeListener("desktop:fullscreen-changed", h);
  },
});