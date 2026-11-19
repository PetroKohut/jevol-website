"use client";

import { useEffect, useState } from "react";

// TEMPORARY: lets the owner try styles and accent colours on the homepage.
// Remove once chosen (then move the chosen values into the default @theme block).
const STYLES = [
  { id: "light", label: "Світлий: білий і чорний", color: "#ffffff" },
  { id: "dark-gold", label: "Темний: чорний", color: "#0d0d0d" },
];
const ACCENTS = [
  { id: "gold", label: "Золото (приглушене)", color: "#b89b5e" },
  { id: "red", label: "Червоний, як колесо в логотипі", color: "#b23a3a" },
  { id: "blue", label: "Сталевий синій", color: "#3d6a9e" },
  { id: "silver", label: "Срібло", color: "#9aa3ae" },
  { id: "copper", label: "Мідь", color: "#a9582d" },
  { id: "green", label: "Темно-зелений", color: "#2f6f55" },
  { id: "mono", label: "Без кольору: чорні кнопки", color: "#111111" },
];
const KEY_STYLE = "jevol-style";
const KEY_ACCENT = "jevol-accent";

function applyStyle(id: string) {
  if (id === "light") delete document.documentElement.dataset.palette;
  else document.documentElement.dataset.palette = id;
}
function applyAccent(id: string) {
  if (id === "gold") delete document.documentElement.dataset.accent;
  else document.documentElement.dataset.accent = id;
}

export function PalettePicker() {
  const [style, setStyle] = useState("light");
  const [accent, setAccent] = useState("gold");

  useEffect(() => {
    try {
      const s = localStorage.getItem(KEY_STYLE);
      const a = localStorage.getItem(KEY_ACCENT);
      const st = STYLES.some((x) => x.id === s) ? (s as string) : "light";
      const ac = ACCENTS.some((x) => x.id === a) ? (a as string) : "gold";
      setStyle(st);
      setAccent(ac);
      applyStyle(st);
      applyAccent(ac);
    } catch {}
  }, []);

  function pickStyle(id: string) {
    setStyle(id);
    applyStyle(id);
    try {
      localStorage.setItem(KEY_STYLE, id);
    } catch {}
  }
  function pickAccent(id: string) {
    setAccent(id);
    applyAccent(id);
    try {
      localStorage.setItem(KEY_ACCENT, id);
    } catch {}
  }

  const dot = (on: boolean) =>
    `h-7 w-7 rounded-full border border-slate-300 ring-offset-2 transition ${
      on ? "ring-2 ring-slate-900" : "hover:ring-2 hover:ring-slate-400"
    }`;

  return (
    <div
      role="group"
      aria-label="Тимчасовий вибір стилю та кольору"
      className="fixed bottom-4 left-4 z-50 flex max-w-[calc(100vw-5rem)] flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-xl"
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-500">Фон:</span>
        {STYLES.map((p) => (
          <button
            key={p.id}
            type="button"
            title={p.label}
            aria-label={p.label}
            aria-pressed={style === p.id}
            onClick={() => pickStyle(p.id)}
            style={{ backgroundColor: p.color }}
            className={dot(style === p.id)}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-500">Колір:</span>
        {ACCENTS.map((p) => (
          <button
            key={p.id}
            type="button"
            title={p.label}
            aria-label={p.label}
            aria-pressed={accent === p.id}
            onClick={() => pickAccent(p.id)}
            style={{ backgroundColor: p.color }}
            className={dot(accent === p.id)}
          />
        ))}
      </div>
    </div>
  );
}
