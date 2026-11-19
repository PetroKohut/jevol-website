"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Item = { title: string; text: string };

// One equipment section: original heading + intro, accordion of the original
// feature texts, and a photo. All answers stay in the DOM (collapsed ones are
// visually hidden and `inert`) so the full text remains in the page HTML.
export function FeatureAccordion({
  tone,
  title,
  intro,
  items,
  image,
  cta,
  flip = false,
}: {
  tone: "light" | "mist";
  title: string;
  intro: string;
  items: Item[];
  image: { src: string; alt: string };
  cta: ReactNode;
  flip?: boolean;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className={tone === "mist" ? "bg-mist" : "bg-surface"}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="reveal max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
          {title}
        </h2>
        <p className="reveal mt-4 max-w-2xl text-muted">{intro}</p>

        <div
          className={`mt-10 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 ${
            flip ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div>
            <div className="overflow-hidden rounded-xl border border-rule bg-surface">
              {items.map((it, i) => {
                const isOpen = open === i;
                const bodyId = `${title.slice(0, 12)}-${i}`.replace(/\s/g, "-");
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
                      onClick={() => setOpen(isOpen ? -1 : i)}
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
                        <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted">
                          {it.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">{cta}</div>
          </div>

          <div className="reveal relative lg:sticky lg:top-28">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-xl border border-brand/50 sm:block"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
