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

const TITLE = "Димомір JVS-600 — вимірювання димності для техогляду в Україні | JEVOL";
const DESCRIPTION =
  "Димомір JVS-600 JEVOL для точного вимірювання димності дизельних двигунів під час техогляду. Відповідає ДСТУ 4276:2004. Офіційний представник в Україні.";
const URL = "https://jevol.com.ua/jvs-600";

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "dymomir-jvs-600";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "1.webp",
  alt: "Димомір JVS-600 JEVOL на пересувному візку",
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
    question: "Для чого призначений димомір JVS-600?",
    answer:
      "Димомір JVS-600 призначений для точного вимірювання димності відпрацьованих газів дизельних та газодизельних автомобільних двигунів під час проведення обов'язкового технічного контролю транспортних засобів в Україні.",
  },
  {
    question: "Що вимірює димомір JVS-600?",
    answer:
      "Прилад вимірює два ключових показники якості відпрацьованих газів: натуральний показник послаблення світлового потоку (К) — основний параметр димності, та коефіцієнт послаблення світлового потоку (N) — додатковий показник для повного аналізу.",
  },
  {
    question: "Яким стандартам відповідає димомір JVS-600?",
    answer:
      "Димомір JVS-600 дозволяє проводити випробування у повній відповідності до вимог ДСТУ 4276:2004 (український стандарт вимірювання димності) та ISO/TS 16949:2002 (міжнародний стандарт якості автомобільної промисловості). Прилад підходить для застосування в акредитованих лабораторіях технічного контролю, сертифікованих НААУ.",
  },
  {
    question: "Які додаткові вимірювання підтримує прилад?",
    answer:
      "До складу комплектації входить цифровий тахометр та датчик вимірювання температури мастила — додаткові параметри для повноцінного технічного контролю двигуна.",
  },
  {
    question: "Як відображаються результати вимірювань?",
    answer:
      "Всі показники відображаються на вбудованому LCD дисплеї в режимі реального часу та одночасно передаються на діагностичний комп'ютер до бази даних програмного забезпечення TSR — для автоматичного формування протоколу випробувань.",
  },
  {
    question: "Чи інтегрується JVS-600 з іншим обладнанням JEVOL?",
    answer:
      "Так. Димомір JVS-600 працює в системі \"єдиний протокол\" разом з гальмівним стендом RRT7500S (перевірка гальмівної системи), газоаналізатором JVE-501 (аналіз вихлопних газів бензинових двигунів) та реглоскопом JVH-M100 (контроль та налаштування світла фар). Всі результати автоматично об'єднуються в єдиний протокол технічного контролю.",
  },
];

const specs = [
  { label: "Вхідна номінальна напруга", value: "220 В / 1 фаза / 50 Гц / 200 Вт" },
  { label: "Діапазон вимірювань (N)", value: "від 0 до 99.9" },
  { label: "Вимірювання коефіцієнта поглинання (К)", value: "від 0 до 16.0 м⁻¹" },
  { label: "Вимірювання температури мастила", value: "від 0 до 150°С" },
  { label: "Габаритні розміри", value: "450 × 300 × 200 мм" },
  { label: "Вага", value: "14 кг" },
];

const galleryImages = [
  { path: "2.webp", alt: "Комплекс JEVOL: газоаналізатор JVE-501 та димомір JVS-600" },
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
          name: "Димомір JVS-600",
          item: URL,
        },
      ],
    },
    {
      "@type": "Product",
      name: "Димомір JVS-600",
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

const relatedCategories = categories.filter((c) => c.href !== "/jvs-600");

export default function Jvs600Page() {
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
              Димомір JVS-600 — вимірювання димності для техогляду в Україні
            </>
          }
          pdfHref="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/Smoke_%20JVS-600.pdf"
        />

        <Breadcrumb current="Димомір JVS-600" />

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
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Фото обладнання
            </h2>
            <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
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
