import Image from "next/image";
import Link from "next/link";
import { categoryBlurbs, categoryFocus } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

type Cat = { name: string; href: string; imageFolder: string; imagePath: string };

// Same card as the "Прилади" block on the homepage.
export function RelatedProducts({ items }: { items: Cat[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
        Інші прилади
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-5 [&>*:last-child:nth-child(odd)]:col-span-2 lg:[&>*:last-child:nth-child(odd)]:col-span-1">
        {items.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group flex flex-col overflow-hidden rounded-xl bg-navy shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="relative aspect-[4/3.4] bg-navy max-sm:[.group:last-child:nth-child(odd)_&]:aspect-[16/7] sm:aspect-[16/10] lg:aspect-[4/4.6]">
              <Image
                src={storageUrl("images", `${cat.imageFolder}/${cat.imagePath}`)}
                alt={cat.name}
                fill
                style={{ objectPosition: categoryFocus[cat.href] ?? "50% 50%" }}
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 text-white sm:p-4">
                <div>
                  <h3 className="text-[15px] font-extrabold leading-snug sm:text-[17px]">{cat.name}</h3>
                  <p className="mt-1 hidden text-[13px] sm:block leading-snug text-slate-200">
                    {categoryBlurbs[cat.href]}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="hidden h-9 w-9 shrink-0 items-center sm:flex justify-center rounded-full bg-brand text-base text-on-brand transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
