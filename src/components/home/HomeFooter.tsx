import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

export function HomeFooter() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1fr_1.3fr_1fr]">
        <div>
          <Image
            src="/logo-jevol-light.png"
            alt="JEVOL"
            width={285}
            height={97}
            className="h-11 w-auto"
          />
        </div>
        <nav aria-label="Прилади">
          <ul className="grid gap-2.5 text-sm">
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
          <ul className="grid gap-2.5 text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Головна
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Контакти
              </Link>
            </li>
            <li>
              <a href="mailto:info.jevol@gmail.com" className="break-all transition-colors hover:text-white">
                info.jevol@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © Всі права захищені. Jevol. 2026
      </div>
    </footer>
  );
}
