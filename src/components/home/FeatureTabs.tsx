"use client";

import { useState } from "react";

type Item = { title: string; text: string };
type Group = {
  id: string;
  label: string;
  title: string;
  intro: string;
  items: Item[];
};

// All panels stay in the DOM (inactive ones are `hidden`) so the full text
// remains in the page HTML for search engines.
export function FeatureTabs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(groups[0].id);

  return (
    <div>
      <div role="tablist" aria-label="Можливості обладнання" className="flex flex-wrap gap-2">
        {groups.map((g) => {
          const on = g.id === active;
          return (
            <button
              key={g.id}
              id={`tab-${g.id}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`panel-${g.id}`}
              onClick={() => setActive(g.id)}
              className={`min-h-11 rounded-md border px-5 text-sm font-bold transition-colors ${
                on
                  ? "border-brand bg-brand text-white"
                  : "border-rule bg-white text-navy hover:border-brand hover:text-brand"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      {groups.map((g) => (
        <div
          key={g.id}
          id={`panel-${g.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${g.id}`}
          hidden={g.id !== active}
          className="mt-8"
        >
          <h3 className="max-w-3xl text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
            {g.title}
          </h3>
          <p className="mt-3 max-w-2xl text-slate-600">{g.intro}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {g.items.map((it) => (
              <div
                key={it.title}
                className="rounded-lg border border-rule bg-white p-6 shadow-sm"
              >
                <h4 className="font-extrabold leading-snug text-navy">{it.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
