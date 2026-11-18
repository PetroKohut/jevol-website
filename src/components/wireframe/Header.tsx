import Link from "next/link";
import { CategoriesDropdown } from "@/components/CategoriesDropdown";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:py-4">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-white sm:text-2xl"
        >
          JEVOL<span className="text-accent">.</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-semibold tracking-wide text-zinc-400 md:flex">
          <Link href="/" className="transition-colors hover:text-white">
            Головна
          </Link>
          <CategoriesDropdown />
          <Link href="/contact" className="transition-colors hover:text-white">
            Контакти
          </Link>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="tel:+380504709561"
            className="hidden font-mono text-sm text-white transition-colors hover:text-accent lg:inline"
          >
            +38 050 470 95 61
          </a>
          <a
            href="https://wa.me/380504709561"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-accent px-4 text-xs font-bold tracking-wide text-white transition-colors hover:bg-orange-600 sm:px-5 sm:text-sm"
          >
            Запросити ціну
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
