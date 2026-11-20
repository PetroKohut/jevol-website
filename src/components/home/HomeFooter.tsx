import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

const link = "transition-colors hover:text-white";
const heading = "mb-4 text-xs font-bold uppercase tracking-wider text-white";

export function HomeFooter() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-6xl px-4">
        {/* Row 1: brand */}
        <div className="flex flex-col gap-4 border-b border-white/10 py-8 md:flex-row md:items-center md:justify-between md:gap-10 md:py-10">
          <Image
            src="/logo-jevol-light.png"
            alt="JEVOL"
            width={285}
            height={97}
            className="h-11 w-auto shrink-0 self-start"
          />
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-right">
            Офіційний представник Shanghai JEVOL в Україні. Обладнання для
            випробувальних лабораторій та технічного контролю транспортних
            засобів.
          </p>
        </div>

        {/* Row 2: three aligned columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-3 md:gap-10 md:py-10">
          <nav aria-label="Навігація">
            <h2 className={heading}>Навігація</h2>
            <ul className="grid gap-2.5 text-sm">
              <li><Link href="/#categories" className={link}>Обладнання</Link></li>
              <li><Link href="/#complex" className={link}>Комплексні рішення</Link></li>
              <li><Link href="/#objects" className={link}>Реалізовані проєкти</Link></li>
              <li><Link href="/#service" className={link}>Сервіс</Link></li>
              <li><Link href="/contact" className={link}>Контакти</Link></li>
            </ul>
          </nav>

          <nav aria-label="Прилади">
            <h2 className={heading}>Прилади</h2>
            <ul className="grid gap-2.5 text-sm">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={link}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-1">
            <h2 className={heading}>Контакти</h2>
            <ul className="grid gap-2.5 text-sm">
              <li><a href="tel:+380504709561" className={link}>+38 050 470 95 61</a></li>
              <li><a href="https://wa.me/380504709561" className={link}>WhatsApp</a></li>
              <li><a href="mailto:info.jevol@gmail.com" className={`${link} break-all`}>info.jevol@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © Всі права захищені. Jevol. 2026
      </div>
    </footer>
  );
}
