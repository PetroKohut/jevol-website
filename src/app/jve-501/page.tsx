import type { Metadata } from "next";
import Image from "next/image";
import { HomeHeader } from "@/components/home/HomeHeader";
import { ProductHero } from "@/components/product/ProductHero";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { HomeFooter } from "@/components/home/HomeFooter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HomeContact } from "@/components/home/HomeContact";
import { FaqAccordion } from "@/components/FaqAccordion";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

const TITLE =
  "Газоаналізатор JVE-501 — 5-канальний аналіз вихлопних газів для техогляду в Україні | JEVOL";
const DESCRIPTION =
  "Газоаналізатор JVE-501 JEVOL — 5-канальний аналіз CO, CH, CO₂, O₂, NO для техогляду. Відповідає ISO/IEC 17025:2019. Офіційний представник в Україні.";
const URL = "https://jevol.com.ua/jve-501";

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "gazoanalizator-jve-501";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "2.webp",
  alt: "Газоаналізатор JVE-501 JEVOL на пересувному візку",
};

const OG_IMAGE = imageUrl(heroImage.path);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const faqs = [
  {
    question: "Для чого призначений газоаналізатор JVE-501?",
    answer:
      "Газоаналізатор JVE-501 — сучасний 5-канальний прилад для точного вимірювання складу відпрацьованих газів транспортних засобів з бензиновими, газовими та комбінованими двигунами під час проведення обов'язкового технічного контролю в Україні.",
  },
  {
    question: "Що вимірює JVE-501?",
    answer:
      "Прилад одночасно вимірює п'ять ключових показників якості вихлопних газів: CO (оксид вуглецю), CH (вуглеводні), CO₂ (діоксид вуглецю), O₂ (кисень) та NO (оксид азоту). Повний аналіз за одне вимірювання — без додаткових приладів.",
  },
  {
    question: "Яким стандартам відповідає JVE-501?",
    answer:
      "Газоаналізатор JVE-501 повністю відповідає вимогам міжнародного стандарту ISO/IEC 17025:2019 та може застосовуватись у складі лінії технічного контролю при проведенні сертифікаційних випробувань транспортних засобів, обов'язкового державного технічного контролю в Україні та досліджень в акредитованих лабораторіях НААУ.",
  },
  {
    question: "Як відображаються та друкуються результати?",
    answer:
      "Всі вимірювання та розрахунки відображаються в режимі реального часу на великому LCD екрані. За потреби результати можуть бути роздруковані безпосередньо на місці за допомогою вбудованого мікропринтера (додаткове обладнання) — зручно для оформлення протоколів на місці випробування.",
  },
  {
    question: "Чи підтримує прилад базу даних випробувань?",
    answer:
      "Так. Прилад підтримує програмне забезпечення для ведення повноцінної бази даних випробувань на комп'ютерних носіях — автоматичне збереження всіх результатів, швидкий пошук та формування звітів.",
  },
  {
    question: "Чи інтегрується JVE-501 з іншим обладнанням JEVOL?",
    answer:
      "Так. Газоаналізатор JVE-501 працює в системі \"єдиний протокол\" разом з гальмівним стендом RRT7500S (перевірка гальмівної системи), димоміром JVS-600 (вимірювання димності дизельних двигунів), реглоскопом JVH-M100 (контроль та налаштування світла фар) та детектором люфтів (діагностика ходової частини). Всі результати автоматично об'єднуються в єдиний протокол технічного контролю транспортного засобу та зберігаються в базі даних на ПК.",
  },
];

const specs = [
  { label: "Вхідна номінальна напруга", value: "220 В / 1 фаза / 50 Гц / 150 Вт" },
  { label: "Діапазон вимірювання CO", value: "0 – 10 %" },
  { label: "Діапазон вимірювання CO₂", value: "0 – 20 %" },
  { label: "Діапазон вимірювання HC", value: "0 – 9999 ppm" },
  { label: "Діапазон вимірювання O₂", value: "0 – 30 %" },
  { label: "Діапазон вимірювання NO", value: "0 – 5000 ppm" },
  { label: "Лямбда", value: "0.5 – 1.8" },
  { label: "Вага", value: "7 кг" },
];

const galleryImages = [
  { path: "1.webp", alt: "Комплекс JEVOL: газоаналізатор JVE-501 та димомір JVS-600" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Головна",
          item: "https://jevol.com.ua/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Прилади",
          item: "https://jevol.com.ua/#categories",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Газоаналізатор JVE-501",
          item: URL,
        },
      ],
    },
    {
      "@type": "Product",
      name: "Газоаналізатор JVE-501",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      image: imageUrl(heroImage.path),
      url: URL,
      additionalProperty: specs.map((s) => ({
        "@type": "PropertyValue",
        name: s.label,
        value: s.value,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const relatedCategories = categories.filter((c) => c.href !== "/jve-501");

export default function Jve501Page() {
  return (
    <div className="flex flex-1 flex-col bg-surface font-[family-name:var(--font-manrope)] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHeader />

      <main className="flex-1">
        <ProductHero
          image={imageUrl(heroImage.path)}
          title={
            <>
              Газоаналізатор JVE-501 — 5-канальний аналіз вихлопних газів для
              техогляду в Україні
            </>
          }
          pdfHref="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/Gas_JEVOL_%20JVE-501.pdf"
        />

        <Breadcrumb current="Газоаналізатор JVE-501" />

        {/* FAQ */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16 lg:py-20">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Поширені запитання
            </h2>
            <FaqAccordion items={faqs} theme="light" className="mt-10" />
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-surface py-10 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {galleryImages.map((img) => (
                <div
                  key={img.path}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={imageUrl(img.path)}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical specs table */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16 lg:py-20">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Загальні технічні параметри
            </h2>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between border-b border-rule py-3 text-sm"
                >
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="font-extrabold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Related products */}
        <section className="bg-surface">
          <RelatedProducts items={relatedCategories} />
        </section>

        <HomeContact />
      </main>

      <HomeFooter />
    </div>
  );
}
