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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className={`reveal relative ${flip ? "lg:order-2" : ""}`}>
            <div
              aria-hidden
              className={`absolute -bottom-3 hidden h-full w-full rounded-xl border border-brand/50 sm:block ${
                flip ? "-left-3" : "-right-3"
              }`}
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
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
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[2.1rem]">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
          </div>
        </div>

        <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.title} className="reveal flex gap-4 border-t border-rule pt-6">
              <span
                aria-hidden
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m5 12 5 5 9-10" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-extrabold leading-snug">{it.title}</h3>
                <p className="mt-2 text-base leading-[1.7] text-muted">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
