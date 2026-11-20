"use client";

import Image from "next/image";
import { useState } from "react";

type Item = { title: string; text: string };
type Group = {
  id: string;
  label: string;
  title: string;
  intro: string;
  items: Item[];
  image: { src: string; alt: string };
};

// Every panel and every answer stays in the DOM (inactive panels are `hidden`,
// closed answers are visually collapsed and `inert`), so the full text remains
// in the page HTML for search engines.
export function FeatureTabs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(groups[0].id);
  const [open, setOpen] = useState<Record<string, number>>(() =>
    Object.fromEntries(groups.map((g) => [g.id, 0])),
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Можливості обладнання"
        className="inline-flex max-w-full flex-wrap gap-1 rounded-xl border border-rule bg-mist p-1"
      >
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
              className={`min-h-11 rounded-lg px-5 text-sm font-bold transition-colors ${
                on
                  ? "bg-navy text-white shadow"
                  : "text-ink hover:bg-surface hover:text-brand-ink"
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
          className="panel-in mt-10 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
        >
          <div>
            <h3 className="max-w-2xl text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
              {g.title}
            </h3>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{g.intro}</p>

            <div className="mt-8 overflow-hidden rounded-xl border border-rule bg-surface">
              {g.items.map((it, i) => {
                const isOpen = open[g.id] === i;
                const bodyId = `${g.id}-body-${i}`;
                return (
                  <div
                    key={it.title}
                    className={`relative border-b border-rule last:border-b-0 ${
                      isOpen ? "bg-mist" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-y-0 left-0 w-1 bg-brand transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "scale-y-100" : "scale-y-0"
                      }`}
                    />
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={bodyId}
                      onClick={() =>
                        setOpen((s) => ({ ...s, [g.id]: isOpen ? -1 : i }))
                      }
                      className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-mist"
                    >
                      <span
                        className={`font-extrabold leading-snug ${
                          isOpen ? "text-brand-ink" : "text-ink"
                        }`}
                      >
                        {it.title}
                      </span>
                      <span
                        aria-hidden
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none ${
                          isOpen
                            ? "rotate-45 border-brand bg-brand text-on-brand"
                            : "border-rule text-muted"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="h-3.5 w-3.5">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={bodyId}
                      inert={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-base leading-[1.7] text-muted">
                          {it.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative lg:sticky lg:top-28">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-xl border border-brand/50 sm:block"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy shadow-xl">
              <Image
                src={g.image.src}
                alt={g.image.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <span className="rounded bg-brand px-2.5 py-1 text-xs font-bold text-on-brand">
                  {g.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
