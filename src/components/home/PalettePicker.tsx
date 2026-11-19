"use client";

import { useEffect, useState } from "react";

// TEMPORARY: lets the owner try palettes on the homepage. Remove once a
// palette is chosen (then move its values into the default @theme block).
const PALETTES = [
  { id: "dark-steel", label: "Темний, сталевий синій", color: "#3a76c4" },
  { id: "dark-brick", label: "Темний, цегляний", color: "#b45a4e" },
  { id: "dark-bronze", label: "Темний, бронза", color: "#a8763f" },
  { id: "dark-mono", label: "Темний, монохром", color: "#5b6b7d" },
  { id: "blue", label: "Синій з макета (яскравий)", color: "#1f5fd0" },
  { id: "slate-blue", label: "Приглушений синій", color: "#3d6a9e" },
  { id: "graphite-brick", label: "Графіт і цегла", color: "#a8483e" },
  { id: "forest", label: "Темно-зелений", color: "#3e7a63" },
  { id: "petrol", label: "Морська хвиля", color: "#2f7384" },
  { id: "bronze", label: "Графіт і бронза", color: "#a06f3c" },
  { id: "olive", label: "Оливковий", color: "#5f6e36" },
  { id: "mono", label: "Монохром, сталевий", color: "#3a4756" },
  { id: "wine", label: "Приглушене бордо", color: "#8a3b4a" },
];
const KEY = "jevol-palette";

export function PalettePicker() {
  const [active, setActive] = useState("dark-steel");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      const start = saved && PALETTES.some((p) => p.id === saved) ? saved : "dark-steel";
      setActive(start);
      document.documentElement.dataset.palette = start;
    } catch {}
  }, []);

  function pick(id: string) {
    setActive(id);
    document.documentElement.dataset.palette = id;
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
      <span className="hidden text-xs font-bold text-slate-500 sm:inline">Кольори:</span>
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
