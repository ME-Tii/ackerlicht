(() => {
  /* ---------- tooltips (original) ---------- */
  const tip = document.createElement("div");
  tip.className = "desk-tip";
  tip.setAttribute("role", "tooltip");
  const mountTip = () => {
    if (!tip.isConnected) document.body.appendChild(tip);
  };
  if (document.body) mountTip();
  else document.addEventListener("DOMContentLoaded", mountTip);

  const isRailBtn = (el) => {
    const tools = el?.closest?.("[aria-label='Werkzeuge']");
    if (!tools || !el.classList?.contains("tool-btn")) return false;
    return el.parentElement === tools.firstElementChild;
  };
  const isFlyoutBtn = (el) => {
    const tools = el?.closest?.("[aria-label='Werkzeuge']");
    if (!tools || !el.classList?.contains("tool-btn")) return false;
    return el.parentElement !== tools.firstElementChild;
  };
  const isTopBtn = (el) =>
    !!el?.classList?.contains("tool-btn") && !!el.closest?.(".desk-topbar");
  const isMiniBtn = (el) => !!el?.classList?.contains("mini-ico");

  // label → real keyboard shortcut only (no angles / requirements / other hints)
  const KBD = {
    Auswahl: "V",
    Löschen: "Entf",
    Zoom: "Z",
    Inspector: "I",
    Gruppen: "G",
    Mathe: "M",
    Rückgängig: "Strg+Z",
    Wiederholen: "Strg+Y",
    Duplizieren: "Strg+D",
    Kopieren: "Strg+C",
    Einfügen: "Strg+V",
    Ausschneiden: "Strg+X",
    Spiegeln: "Strg+M",
    Gruppe: "Strg+G",
    Lösen: "Strg+Umschalt+G",
    Sperren: "Strg+L",
    "Sperren / Entsperren": "Strg+L",
    Verschieben: "Umschalt+Pfeil",
    "Verschieben…": "Umschalt+Pfeil",
    "Verschieben um…": "Umschalt+Pfeil",
    Beet: "B",
    Rechteck: "R",
    Polygon: "P",
    Kreis: "C",
    Weg: "W",
    Pflanze: "N",
    Maß: "M",
    Bogen: "A",
    Spline: "G",
    Leitung: "L",
    Text: "T",
    Speichern: "Strg+S",
    Öffnen: "Strg+O",
    Neu: "Strg+N",
  };

  const btnLabel = (btn) =>
    (btn.getAttribute("aria-label") || btn.textContent || "").trim().replace(/\s+/g, " ");

  const isRealShortcut = (s) =>
    !!s &&
    !/°/.test(s) &&
    !/^\d+\+/.test(s) &&
    !/Beete|Felder|möglich|Auswahl/i.test(s);

  const kbdFor = (label) => {
    if (!label) return "";
    if (Object.prototype.hasOwnProperty.call(KBD, label)) {
      const v = KBD[label];
      return isRealShortcut(v) ? v : "";
    }
    for (const [k, v] of Object.entries(KBD)) {
      if (label === k || label.startsWith(k + " ") || label.startsWith(k + "…")) {
        return isRealShortcut(v) ? v : "";
      }
    }
    return "";
  };

  const ensureDataKbd = (btn) => {
    if (btn.hasAttribute("title")) {
      btn.setAttribute("data-title", btn.getAttribute("title") || "");
      btn.removeAttribute("title");
    }
    const k = kbdFor(btnLabel(btn));
    if (k) btn.setAttribute("data-kbd", k);
    else btn.removeAttribute("data-kbd");
  };

  const placeRail = (btn) => {
    const r = btn.getBoundingClientRect();
    tip.classList.remove("desk-tip-top");
    tip.style.left = `${Math.round(r.right + 8)}px`;
    tip.style.top = `${Math.round(r.top + r.height / 2)}px`;
  };
  const placeTop = (btn) => {
    const r = btn.getBoundingClientRect();
    tip.classList.add("desk-tip-top");
    tip.style.left = `${Math.round(r.left + r.width / 2)}px`;
    tip.style.top = `${Math.round(r.bottom + 8)}px`;
  };
  const placeFlyout = (btn) => {
    const r = btn.getBoundingClientRect();
    tip.classList.remove("desk-tip-top");
    tip.style.left = `${Math.round(r.right + 8)}px`;
    tip.style.top = `${Math.round(r.top + r.height / 2)}px`;
  };

  const hideTip = () => {
    tip.classList.remove("on", "desk-tip-top");
    tip.textContent = "";
  };

  const showTip = (btn) => {
    // suppress native browser tooltip (double tip)
    if (btn.hasAttribute("title")) {
      btn.setAttribute("data-title", btn.getAttribute("title"));
      btn.removeAttribute("title");
    }
    const label = btnLabel(btn);
    if (!label) {
      hideTip();
      return;
    }
    ensureDataKbd(btn);
    const kbd = kbdFor(label);
    // hover tip: tool name + shortcut only (no extra info)
    tip.textContent = "";
    tip.appendChild(document.createTextNode(label));
    if (kbd) {
      const k = document.createElement("span");
      k.className = "tip-kbd";
      k.textContent = kbd;
      tip.appendChild(k);
    }
    if (isRailBtn(btn)) placeRail(btn);
    else if (isFlyoutBtn(btn)) placeFlyout(btn);
    else if (isTopBtn(btn) || isMiniBtn(btn)) placeTop(btn);
    else placeFlyout(btn);
    tip.classList.add("on");
  };

  // stamp data-kbd on flyout buttons when panels open
  const stampAll = () => {
    try {
      document.querySelectorAll(".tool-btn").forEach(ensureDataKbd);
    } catch {}
  };
  const mo = new MutationObserver(() => stampAll());
  const startMo = () => {
    stampAll();
    if (document.body) mo.observe(document.body, { childList: true, subtree: true });
  };
  if (document.body) startMo();
  else document.addEventListener("DOMContentLoaded", startMo);

  document.addEventListener(
    "pointerover",
    (e) => {
      const btn = e.target?.closest?.(".tool-btn");
      if (!btn) {
        hideTip();
        return;
      }
      showTip(btn);
    },
    true,
  );

  document.addEventListener(
    "pointerout",
    (e) => {
      const btn = e.target?.closest?.(".tool-btn");
      if (!btn) return;
      const next = e.relatedTarget;
      if (next && (btn.contains(next) || btn === next)) return;
      hideTip();
    },
    true,
  );
  document.addEventListener("scroll", hideTip, true);

  /* ---------- right-click menu ---------- */
  /* No full-screen backdrop — that blocked map selection. */
  const ITEMS = [
    { label: "Eigenschaften…", action: "props" },
    { label: "Duplizieren", action: "dup" },
    { label: "Löschen", action: "delete" },
    { sep: true },
    { label: "Ausschneiden", action: "cut" },
    { label: "Kopieren", action: "copy" },
    { label: "Einfügen", action: "paste" },
    { sep: true },
    { label: "Gruppieren", action: "group" },
    { label: "Gruppe lösen", action: "ungroup" },
    { label: "Drehen", action: "rot-22.5" },
    { label: "Spiegeln", action: "mirror-h" },
    { label: "Verschieben…", action: "nudge" },
    { label: "Sperren", action: "lock" },
    { sep: true },
    { label: "Rückgängig", action: "undo" },
    { label: "Wiederholen", action: "redo" },
    { label: "Alles auswählen", action: "select-all" },
    { label: "Auswahl aufheben", action: "deselect" },
  ];

  let menuEl = null;

  const scrubOrphans = () => {
    try {
      document.querySelectorAll("[data-acker-ctx],[data-acker-ctx-bg]").forEach((n) => n.remove());
    } catch {}
  };

  const runAction = (action) => {
    try {
      if (window.desktop && typeof window.desktop.run === "function") {
        window.desktop.run(action);
        return;
      }
    } catch {}
  };

  const closeMenu = () => {
    try {
      menuEl?.remove();
    } catch {}
    menuEl = null;
    scrubOrphans();
  };

  const openMenu = (clientX, clientY) => {
    closeMenu();
    hideTip();

    menuEl = document.createElement("div");
    menuEl.setAttribute("data-acker-ctx", "1");
    menuEl.setAttribute("role", "menu");
    Object.assign(menuEl.style, {
      position: "fixed",
      zIndex: "2147483647",
      minWidth: "15rem",
      maxHeight: "min(78vh, 36rem)",
      overflowY: "auto",
      padding: "0.4rem",
      borderRadius: "0.4rem",
      background: "#1e2420",
      color: "#e8e3d8",
      border: "1px solid #2e3531",
      boxShadow: "0 14px 36px rgba(0,0,0,0.55)",
      fontFamily: "system-ui, 'Segoe UI', sans-serif",
      fontSize: "14px",
      lineHeight: "1.3",
      pointerEvents: "auto",
    });

    const title = document.createElement("div");
    title.textContent = "Bearbeiten";
    Object.assign(title.style, {
      fontSize: "11px",
      fontWeight: "600",
      color: "#9b968c",
      padding: "4px 10px 6px",
      borderBottom: "1px solid #2e3531",
      marginBottom: "4px",
    });
    menuEl.appendChild(title);

    for (const it of ITEMS) {
      if (it.sep) {
        const sep = document.createElement("div");
        Object.assign(sep.style, {
          height: "1px",
          margin: "4px 6px",
          background: "#2e3531",
        });
        menuEl.appendChild(sep);
        continue;
      }
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = it.label;
      Object.assign(btn.style, {
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "8px 12px",
        margin: "0",
        border: "0",
        borderRadius: "6px",
        background: "transparent",
        color: "#e8e3d8",
        cursor: "pointer",
        font: "inherit",
      });
      btn.onmouseenter = () => {
        btn.style.background = "#2a322c";
      };
      btn.onmouseleave = () => {
        btn.style.background = "transparent";
      };
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const a = it.action;
        closeMenu();
        // defer so menu is gone before app handles action
        setTimeout(() => runAction(a), 0);
      };
      menuEl.appendChild(btn);
    }

    document.body.appendChild(menuEl);

    const pad = 6;
    const mw = menuEl.offsetWidth || 240;
    const mh = menuEl.offsetHeight || 360;
    const vw = window.innerWidth || 800;
    const vh = window.innerHeight || 600;
    const x = Math.max(pad, Math.min(Number(clientX) || 0, vw - mw - pad));
    const y = Math.max(pad, Math.min(Number(clientY) || 0, vh - mh - pad));
    menuEl.style.left = x + "px";
    menuEl.style.top = y + "px";
  };

  // Close on outside click WITHOUT preventDefault — selection still works
  const onPointerDown = (e) => {
    if (!menuEl) return;
    if (e.button === 2) return;
    if (e.target?.closest?.("[data-acker-ctx]")) return;
    closeMenu();
  };

  const onContextMenu = (e) => {
    const t = e.target;
    if (t?.closest?.("input,textarea,select,[contenteditable='true'],[contenteditable=true]")) {
      return;
    }
    // only on the map / main stage, not chrome chrome buttons
    const onMap =
      t?.closest?.("canvas") ||
      t?.closest?.(".desk-stage") ||
      t?.closest?.("[class*='min-h-[360px]']") ||
      t?.tagName === "CANVAS";
    if (!onMap) {
      closeMenu();
      return;
    }
    e.preventDefault();
    // do not stopPropagation — let app still know about the event if needed
    openMenu(e.clientX, e.clientY);
  };

  const start = () => {
    scrubOrphans();
    window.addEventListener("contextmenu", onContextMenu, true);
    window.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") closeMenu();
      },
      true,
    );
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
