"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

// Photo grid with a lightbox: click to enlarge, arrows / keys / swipe to browse,
// close with the cross, Esc or a click on the empty area (page behind is dimmed
// and blurred).
export function ProductGallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const isOpen = open !== null;
  const n = photos.length;

  const go = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)),
    [n],
  );

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, go]);

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4 lg:grid-cols-5">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Збільшити фото: ${p.alt}`}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-xl bg-navy shadow-md"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 50vw"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Перегляд фото"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={() => setOpen(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Закрити"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition-colors hover:bg-white/30 sm:right-5 sm:top-5"
          >
            ×
          </button>
          {n > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Попереднє фото"
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition-colors hover:bg-white/30 sm:left-5"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Наступне фото"
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition-colors hover:bg-white/30 sm:right-5"
              >
                ›
              </button>
            </>
          )}
          <Image
            key={photos[open].src}
            src={photos[open].src}
            alt={photos[open].alt}
            width={1600}
            height={1200}
            sizes="92vw"
            className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-sm text-white/90">
            {open + 1} / {n}
          </div>
        </div>
      )}
    </>
  );
}
