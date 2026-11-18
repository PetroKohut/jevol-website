import Link from "next/link";
import { categories } from "@/lib/categories";

export function Footer() {
  return (
    <footer className="bg-ink text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="text-2xl font-extrabold tracking-tight text-white">
            JEVOL<span className="text-accent">.</span>
          </span>
          <p className="mt-3 max-w-xs text-sm">
            Офіційний представник JEVOL в Україні. Обладнання для технічного
            контролю транспортних засобів.
          </p>
        </div>
        <nav aria-label="Прилади">
          <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white">
            Прилади
          </h2>
          <ul className="grid gap-2 text-sm">
            {categories.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-white">
            Контакти
          </h2>
          <ul className="grid gap-2 text-sm">
            <li>
              <a href="tel:+380504709561" className="font-mono transition-colors hover:text-white">
                +38 050 470 95 61
              </a>
            </li>
            <li>
              <a href="mailto:info.jevol@gmail.com" className="transition-colors hover:text-white">
                info.jevol@gmail.com
              </a>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Форма зворотного зв&apos;язку
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800 px-4 py-4 text-center text-xs text-zinc-600">
        © Всі права захищені. Jevol. 2026
      </div>
    </footer>
  );
}
