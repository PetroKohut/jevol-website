import Image from "next/image";

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
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className={`reveal relative ${flip ? "lg:order-2" : ""}`}>
            <div
              aria-hidden
              className={`absolute -bottom-3 hidden h-full w-full rounded-xl border border-brand/50 sm:block ${
                flip ? "-left-3" : "-right-3"
              }`}
            />
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-navy shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <span className="rounded bg-brand px-2.5 py-1 text-xs font-bold text-on-brand">
                  {label}
                </span>
              </div>
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-[1.7rem] lg:text-[1.9rem]">
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">{intro}</p>
          </div>
        </div>

        <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.title} className="reveal flex gap-3 border-t border-rule pt-4">
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="m5 12 5 5 9-10" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-extrabold leading-snug">{it.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
