import { CATALOG, BAR_SECTIONS } from "./catalog.mjs";

function speciesKey(label) {
  if (label.includes("'")) return label.split("'")[0].trim();
  return label.replace(/\s+\d+$/, "");
}

function cultivar(label) {
  const m = label.match(/'([^']+)'/);
  return m ? m[1] : null;
}

const PLANT_GROUPS = ["Gemüse", "Kräuter", "Beeren", "Obst", "Blumen", "Getreide", "Wild & Rarität"];

const PRIMS = [
  ["prim-box", "Quader"],
  ["prim-cyl", "Zylinder"],
  ["prim-cone", "Kegel"],
  ["prim-sphere", "Kugel"],
  ["prim-prism", "Prisma"],
  ["prim-torus", "Torus"],
  ["prim-capsule", "Kapsel"],
  ["prim-wedge", "Keil"],
  ["prim-arch", "Bogen"],
  ["prim-plane", "Ebene"],
  ["prim-pyramid", "Pyramide"],
  ["prim-dome", "Kuppel"],
  ["prim-tube", "Rohr"],
  ["prim-oct", "Achteck"],
  ["prim-stairs", "Treppe"],
  ["prim-gable", "Satteldach"],
  ["prim-bowl", "Schale"],
  ["prim-ring", "Ring"],
  ["prim-post", "Pfosten"],
  ["prim-beam", "Balken"],
  ["prim-slab", "Platte"],
  ["prim-tent", "Zelt"],
  ["prim-silo", "Silo"],
  ["prim-trough", "Trog"],
];

export function datenbankMenu(send) {
  const byGroup = new Map();
  for (const o of CATALOG) {
    if (!PLANT_GROUPS.includes(o.group)) continue;
    const sp = speciesKey(o.label);
    if (!byGroup.has(o.group)) byGroup.set(o.group, new Map());
    const g = byGroup.get(o.group);
    if (!g.has(sp)) g.set(sp, { id: o.kind, vars: [] });
    const rec = g.get(sp);
    const c = cultivar(o.label);
    if (c) rec.vars.push({ kind: o.kind, cultivar: c });
    else if (!/"/.test(o.label) && !/\s+\d+$/.test(o.label)) rec.id = o.kind;
  }

  const plantMenus = [];
  for (const [gLabel, species] of byGroup) {
    const items = [];
    for (const [name, rec] of species) {
      if (rec.vars.length) {
        items.push({
          label: name,
          submenu: [
            { label: `Art: ${name}`, click: send(`db-plant:${rec.id}`) },
            ...rec.vars.map((v) => ({ label: `'${v.cultivar}'`, click: send(`db-plant:${v.kind}`) })),
          ],
        });
      } else {
        items.push({ label: name, click: send(`db-plant:${rec.id}`) });
      }
    }
    plantMenus.push({ label: gLabel, submenu: items });
  }

  const objGroups = BAR_SECTIONS.filter((s) => s.id !== "pflanzen").map((s) => {
    const items = CATALOG.filter((o) => s.groups.includes(o.group)).map((o) => ({
      label: o.label,
      click: send(`db-model:${o.kind}`),
    }));
    return { label: s.label, submenu: items };
  });

  const plantBodies = [];
  for (const [gLabel, species] of byGroup) {
    plantBodies.push({
      label: gLabel,
      submenu: [...species.entries()].map(([name, rec]) => ({ label: name, click: send(`db-model:plant-${rec.id}`) })),
    });
  }

  return [
    { label: "Lexikon öffnen…", click: send("db-lexikon") },
    { type: "separator" },
    ...plantMenus,
    { type: "separator" },
    {
      label: "3D-Modelle",
      submenu: [
        { label: "Atelier öffnen…", click: send("db-modelle") },
        { type: "separator" },
        { label: "Primitive", submenu: PRIMS.map(([id, lab]) => ({ label: lab, click: send(`db-model:${id}`) })) },
        ...objGroups,
        { label: "Pflanzen-Körper", submenu: plantBodies },
      ],
    },
  ];
}
