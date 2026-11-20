import Image from "next/image";
import type { CSSProperties } from "react";

type Item = { title: string; text: string };

// One equipment block: photo next to the heading, then every feature visible at
// once in two columns (no tabs, no clicks).
export function FeatureSection({
  label,
  title,
  intro,
  items,
  image,
  tone,
  flip = false,
}: {
  label: string;
  title: string;
  intro: string;
  items: Item[];
  image: { src: string; alt: string };
  tone: "light" | "mist";
  flip?: boolean;
}) {
  return (
    <section className={tone === "mist" ? "bg-mist" : "bg-surface"}>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className={`grid items-center gap-5 lg:gap-10 ${flip ? "lg:grid-cols-[1fr_300px]" : "lg:grid-cols-[300px_1fr]"}`}>
          <div
            className={`feat-photo relative ${flip ? "lg:order-2" : ""}`}
            style={
              { "--dx": flip ? "28px" : "-28px", "--fx": flip ? "12px" : "-12px" } as CSSProperties
            }
          >
            <div
              aria-hidden
              className={`feat-frame absolute -bottom-3 hidden h-full w-full rounded-xl border border-brand/50 sm:block ${
                flip ? "-left-3" : "-right-3"
              }`}
            />
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-navy shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 300px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <span className="rounded bg-brand px-2.5 py-1 text-xs font-bold text-on-brand">
                  {label}
                </span>
              </div>
            </div>
          </div>

          <div className="reveal">
            <h2 className="leading-tight text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              {title}
            </h2>
            <span aria-hidden className="feat-line mt-3 block h-0.5 w-16 bg-brand" />
            <p className="reveal-late mt-3 text-base leading-relaxed text-muted">{intro}</p>
          </div>
        </div>

        <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="reveal flex gap-3 border-t border-rule pt-3">
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" className="feat-check h-3.5 w-3.5">
                  <path pathLength={1} d="m5 12 5 5 9-10" />
                </svg>
              </span>
              <div>
                <h3 className="text-[17px] font-extrabold leading-snug">{it.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
