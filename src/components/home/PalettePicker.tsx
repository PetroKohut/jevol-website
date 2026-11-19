"use client";

import { useEffect, useState } from "react";

// TEMPORARY: lets the owner try palettes on the homepage. Remove once a
// palette is chosen (then move its values into the default @theme block).
const PALETTES = [
  { id: "gold", label: "Світлий: білий, чорний, золото", color: "#b89b5e" },
  { id: "dark-gold", label: "Темний: чорний і золото", color: "#0d0d0d" },
];
const KEY = "jevol-palette";

function apply(id: string) {
  if (id === "gold") delete document.documentElement.dataset.palette;
  else document.documentElement.dataset.palette = id;
}

export function PalettePicker() {
  const [active, setActive] = useState("gold");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      const start = saved && PALETTES.some((p) => p.id === saved) ? saved : "gold";
      setActive(start);
      apply(start);
    } catch {}
  }, []);

  function pick(id: string) {
    setActive(id);
    apply(id);
    try {
      localStorage.setItem(KEY, id);
    } catch {}
  }

  return (
    <div
      role="group"
      aria-label="Тимчасовий вибір кольорів"
      className="fixed bottom-4 left-4 z-50 flex max-w-[calc(100vw-5rem)] flex-wrap items-center gap-2 rounded-2xl border border-rule bg-white px-3 py-2 shadow-xl"
    >
      <span className="hidden text-xs font-bold text-slate-500 sm:inline">Стиль:</span>
      {PALETTES.map((p) => (
        <button
          key={p.id}
          type="button"
          title={p.label}
          aria-label={p.label}
          aria-pressed={active === p.id}
          onClick={() => pick(p.id)}
          style={{ backgroundColor: p.color }}
          className={`h-7 w-7 rounded-full ring-offset-2 transition ${
            active === p.id ? "ring-2 ring-slate-900" : "ring-0 hover:ring-2 hover:ring-slate-400"
          }`}
        />
      ))}
    </div>
  );
}
