"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string; width: number; height: number };

export function ObjectsGallery({
  photos,
  bigIndex,
  smallIndices,
}: {
  photos: Photo[];
  bigIndex: number;
  smallIndices: number[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  const isOpen = open !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
      if (e.key === "ArrowRight")
        setOpen((i) => (i === null ? i : (i + 1) % photos.length));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, photos.length]);

  const tile = (idx: number, className: string, sizes: string, priority = false) => (
    <button
      key={idx}
      type="button"
      onClick={() => setOpen(idx)}
      aria-label={`Збільшити фото: ${photos[idx].alt}`}
      className={`group relative overflow-hidden rounded-lg bg-navy ${className}`}
    >
      <Image
        src={photos[idx].src}
        alt={photos[idx].alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
      />
    </button>
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">
        {tile(
          bigIndex,
          "col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto",
          "(min-width: 1024px) 50vw, 100vw",
        )}
        {smallIndices.map((i) =>
          tile(i, "aspect-[4/3]", "(min-width: 1024px) 25vw, 50vw"),
        )}
        <button
          type="button"
          onClick={() => setOpen(0)}
          className="flex aspect-[4/3] flex-col items-center justify-center rounded-lg bg-navy p-4 text-center text-white transition-colors hover:bg-brand"
        >
          <span className="text-3xl font-extrabold">{photos.length}</span>
          <span className="mt-1 text-sm font-semibold">
            Переглянути всі фото
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Перегляд фото"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Закрити"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-3xl text-white"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
            }}
            aria-label="Попереднє фото"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl text-white sm:left-4"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i === null ? i : (i + 1) % photos.length));
            }}
            aria-label="Наступне фото"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl text-white sm:right-4"
          >
            ›
          </button>
          <Image
            src={photos[open].src}
            alt={photos[open].alt}
            width={photos[open].width}
            height={photos[open].height}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {open + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
}
