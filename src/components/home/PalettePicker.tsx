"use client";

import { useEffect, useState } from "react";

// TEMPORARY: lets the owner try palettes on the homepage. Remove once a
// palette is chosen (then move its values into the default @theme block).
const PALETTES = [
  { id: "blue", label: "Синій", color: "#1f5fd0" },
  { id: "graphite-orange", label: "Графіт і помаранчевий", color: "#e85d00" },
  { id: "graphite-red", label: "Графіт і червоний (як колесо в логотипі)", color: "#d62828" },
  { id: "teal", label: "Бірюзовий", color: "#0e8a8f" },
  { id: "green", label: "Зелений", color: "#1e7a4c" },
  { id: "burgundy", label: "Бордовий", color: "#9b1b30" },
  { id: "indigo", label: "Індиго", color: "#4338ca" },
  { id: "steel", label: "Сталевий", color: "#35607f" },
  { id: "copper", label: "Мідний", color: "#b4541a" },
];
const KEY = "jevol-palette";

export function PalettePicker() {
  const [active, setActive] = useState("blue");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved && PALETTES.some((p) => p.id === saved)) {
        setActive(saved);
        document.documentElement.dataset.palette = saved;
      }
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
