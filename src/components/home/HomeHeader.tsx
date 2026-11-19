"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories } from "@/lib/categories";

const NAV = [
  { label: "Комплексні рішення", href: "/#complex" },
  { label: "Наші об'єкти", href: "/#objects" },
  { label: "Сервіс", href: "/#service" },
  { label: "Контакти", href: "/contact" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function HomeHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setCatOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!catOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!dropRef.current?.contains(e.target as Node)) setCatOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCatOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [catOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setCatOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[68px]">
        <Link
          href="/"
          aria-label="JEVOL — на головну"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo-jevol.png"
            alt="JEVOL"
            width={285}
            height={97}
            priority
            className="h-9 w-auto sm:h-10"
          />

        </Link>

        <nav
          aria-label="Основне меню"
          className="hidden items-center gap-7 text-sm font-semibold text-ink lg:flex"
        >
          <div
            ref={dropRef}
            className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={catOpen}
              onClick={() => setCatOpen((v) => !v)}
              className="flex items-center gap-1 py-2 transition-colors hover:text-brand-ink"
            >
              Обладнання
              <Chevron open={catOpen} />
            </button>
            <div
              className={`absolute left-0 top-full z-50 w-80 pt-2 transition duration-150 motion-reduce:transition-none ${
                catOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="rounded-lg border border-rule bg-surface py-2 shadow-xl">
                <Link
                  href="/#categories"
                  onClick={closeAll}
                  tabIndex={catOpen ? 0 : -1}
                  className="block border-b border-rule px-4 py-2.5 text-sm font-bold text-brand-ink hover:bg-mist"
                >
                  Усі прилади
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={closeAll}
                    tabIndex={catOpen ? 0 : -1}
                    className="block px-4 py-2.5 text-sm hover:bg-mist hover:text-brand-ink"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="py-2 transition-colors hover:text-brand-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden h-11 items-center gap-2 rounded-md bg-brand px-5 text-sm font-bold text-on-brand transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="h-4 w-4"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Отримати консультацію
          </Link>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-rule bg-surface lg:hidden">
          <nav aria-label="Мобільне меню" className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-base font-semibold text-ink">
            <p className="pt-3 text-xs font-bold uppercase tracking-wider text-neutral-500">
              Обладнання
            </p>
            {categories.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={closeAll}
                className="flex min-h-11 items-center py-2 text-[15px] font-medium text-muted"
              >
                {c.name}
              </Link>
            ))}
            <div className="my-2 border-t border-rule" />
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={closeAll}
                className="flex min-h-11 items-center py-2"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={closeAll}
              className="mb-4 mt-2 inline-flex h-12 items-center justify-center rounded-md bg-brand text-sm font-bold text-on-brand"
            >
              Отримати консультацію
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
