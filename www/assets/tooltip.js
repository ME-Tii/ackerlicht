(() => {
  const tip = document.createElement("div");
  tip.className = "desk-tip";
  tip.setAttribute("role", "tooltip");
  const mount = () => {
    if (!tip.isConnected) document.body.appendChild(tip);
  };
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);

  const isRailBtn = (el) => {
    const tools = el?.closest?.("[aria-label='Werkzeuge']");
    if (!tools || !el.classList?.contains("tool-btn")) return false;
    return el.parentElement === tools.firstElementChild;
  };

  const place = (btn) => {
    const r = btn.getBoundingClientRect();
    tip.style.left = `${Math.round(r.right + 8)}px`;
    tip.style.top = `${Math.round(r.top + r.height / 2)}px`;
  };

  const hide = () => {
    tip.classList.remove("on");
    tip.textContent = "";
  };

  document.addEventListener(
    "pointerover",
    (e) => {
      const btn = e.target?.closest?.(".tool-btn");
      if (!isRailBtn(btn)) {
        hide();
        return;
      }
      const label = btn.getAttribute("aria-label");
      if (!label) {
        hide();
        return;
      }
      tip.textContent = label;
      place(btn);
      tip.classList.add("on");
    },
    true,
  );

  document.addEventListener(
    "pointerout",
    (e) => {
      const btn = e.target?.closest?.(".tool-btn");
      if (!isRailBtn(btn)) return;
      const next = e.relatedTarget;
      if (next && (btn.contains(next) || btn === next)) return;
      hide();
    },
    true,
  );

  document.addEventListener("scroll", hide, true);
})();
