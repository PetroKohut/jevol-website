import Image from "next/image";
import Link from "next/link";
import { storageUrl } from "@/lib/storage";

type Cat = { name: string; href: string; imageFolder: string; imagePath: string };

export function RelatedProducts({ items }: { items: Cat[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16 lg:py-20">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
        Інші прилади
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-5">
        {items.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-navy shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <Image
              src={storageUrl("images", `${cat.imageFolder}/${cat.imagePath}`)}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              sizes="(min-width: 1024px) 20vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 line-clamp-2 p-3 text-sm font-extrabold leading-snug text-white">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
