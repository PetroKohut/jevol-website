import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

export function HomeFooter() {
  return (
    <footer className="bg-navy text-slate-200">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 md:gap-10 md:py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logo-jevol-light.png"
            alt="JEVOL"
            width={285}
            height={97}
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-slate-300">
            Офіційний представник Shanghai JEVOL в Україні. Обладнання для
            випробувальних лабораторій та технічного контролю транспортних
            засобів.
          </p>
        </div>

        <nav aria-label="Навігація">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Навігація
          </h2>
          <ul className="grid gap-2.5 text-sm">
            <li><Link href="/#categories" className="hover:text-white">Обладнання</Link></li>
            <li><Link href="/#complex" className="hover:text-white">Комплексні рішення</Link></li>
            <li><Link href="/#objects" className="hover:text-white">Реалізовані проєкти</Link></li>
            <li><Link href="/#service" className="hover:text-white">Сервіс</Link></li>
            <li><Link href="/contact" className="hover:text-white">Контакти</Link></li>
          </ul>
        </nav>

        <nav aria-label="Прилади">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Прилади
          </h2>
          <ul className="grid gap-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 md:col-span-1">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Контакти
          </h2>
          <ul className="grid gap-2.5 text-sm">
            <li>
              <a href="tel:+380504709561" className="hover:text-white">
                +38 050 470 95 61
              </a>
            </li>
            <li>
              <a href="https://wa.me/380504709561" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:info.jevol@gmail.com" className="break-all hover:text-white">
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
