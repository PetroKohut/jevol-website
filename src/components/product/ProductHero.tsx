import Image from "next/image";
import type { ReactNode } from "react";

// Product page header: copy on solid black, photo in its own frame (same
// language as the homepage hero).
export function ProductHero({
  image,
  title,
  lead,
  pdfHref,
}: {
  image: string;
  title: ReactNode;
  lead?: ReactNode;
  pdfHref: string;
}) {
  return (
    <section className="relative bg-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:gap-10 sm:py-14 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:py-20">
        <div>
          <h1 className="hero-in caps-title text-balance text-[1.35rem] font-extrabold leading-[1.18] tracking-tight sm:text-4xl lg:text-[2.4rem]">
            {title}
          </h1>
          {lead && (
            <p className="hero-in hero-in-2 mt-3 max-w-xl text-base text-slate-200 sm:mt-5 sm:text-lg">
              {lead}
            </p>
          )}
          <div className="hero-in hero-in-3 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/380504709561"
              className="btn-lift inline-flex h-12 w-full items-center justify-center rounded-md bg-brand px-6 text-sm font-bold text-on-brand transition-colors hover:bg-brand-dark sm:w-auto sm:min-w-[250px]"
            >
              Написати нам у WhatsApp
            </a>
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex h-12 w-full items-center justify-center rounded-md border border-white/40 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-navy sm:w-auto sm:min-w-[250px]"
            >
              Завантажити PDF
            </a>
          </div>
        </div>
        <div className="hero-photo relative">
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-xl border border-brand/50 sm:block"
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-navy-2 shadow-2xl sm:aspect-[4/3]">
            <Image
              src={image}
              alt=""
              aria-hidden
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
