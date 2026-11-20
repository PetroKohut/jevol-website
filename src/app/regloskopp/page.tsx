import type { Metadata } from "next";
import { HomeHeader } from "@/components/home/HomeHeader";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { HomeFooter } from "@/components/home/HomeFooter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeCta } from "@/components/home/HomeCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

const TITLE =
  "Реглоскоп JVH-M100 — контроль та налаштування світла фар для техогляду в Україні | JEVOL";
const DESCRIPTION =
  "Реглоскоп JVH-M100 JEVOL — лазерне наведення, контроль сили світла фар та покажчиків поворотів. Відповідає ДСТУ 3649:2010. Офіційний представник в Україні.";
const URL = "https://jevol.com.ua/regloskopp";

const STORAGE_BUCKET = "images";
// Note: the real folder in Supabase Storage is "regloskop-jvh-m1oo" (typo'd
// with letter "oo" instead of "00" when it was created) — using it as-is.
const STORAGE_FOLDER = "regloskop-jvh-m1oo";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "!IMG_3733.webp",
  alt: "Реглоскоп JVH-M100 JEVOL — блок з екраном та лазерним наведенням",
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
    question: "Для чого призначений реглоскоп JVH-M100?",
    answer:
      "Реглоскоп JVH-M100 — високотехнологічний прилад для контролю та налаштування світла фар транспортних засобів під час проведення обов'язкового державного технічного контролю в Україні. Дозволяє виконувати випробування технічного стану світлових приладів відповідно до вимог ДСТУ 3649:2010.",
  },
  {
    question: "Чи має прилад лазерне наведення?",
    answer:
      "Так. Прилад оснащено системою лазерного наведення та фокусування — точне позиціонування відносно фар транспортного засобу без зайвих налаштувань. Висока точність вимірювань при мінімальному часі підготовки до випробування.",
  },
  {
    question: "Як відображаються та передаються результати?",
    answer:
      "Вмонтований LCD екран відображає покрокові вказівки щодо налаштування геометричних параметрів світлотехніки автомобіля в режимі реального часу. Результати тестування автоматично передаються до програмного забезпечення на комп'ютер — для формування протоколу технічного контролю.",
  },
  {
    question: "Яким стандартам відповідає реглоскоп JVH-M100?",
    answer:
      "Реглоскоп JVH-M100 повністю відповідає вимогам ДСТУ 3649:2010 (український стандарт технічного стану світлових приладів) та ISO/IEC 17025:2017 (міжнародний стандарт акредитації випробувальних лабораторій). Прилад може використовуватись у складі лінії технічного контролю при проведенні сертифікаційних випробувань та обов'язкового державного технічного контролю транспортних засобів в акредитованих лабораторіях НААУ.",
  },
  {
    question: "Чи інтегрується реглоскоп з іншим обладнанням JEVOL?",
    answer:
      "Так. Реглоскоп JVH-M100 працює в системі \"єдиний протокол\" разом з гальмівним стендом RRT7500S (перевірка гальмівної системи), газоаналізатором JVE-501 (аналіз вихлопних газів), димоміром JVS-600 (вимірювання димності дизельних двигунів) та детектором люфтів (діагностика ходової частини). Всі результати автоматично об'єднуються в єдиний протокол технічного контролю транспортного засобу.",
  },
];

const specs = [
  {
    title: "Вимірювання сили світла",
    range: "1 – 120 000 кд",
    text: "Широкий діапазон охоплює всі типи світлових приладів — від денних ходових вогнів до потужних фар вантажних транспортних засобів.",
  },
  {
    title: "Контроль покажчиків поворотів",
    range: "30 – 180 імпульсів/хв",
    text: "Діапазон вимірювання частоти проходження проблисків покажчиків поворотів та бічних повторювачів. Точний контроль відповідності нормам технічного контролю.",
  },
  {
    title: "Час реакції світлового сигналу",
    range: "0,1 – 10 с",
    text: "Діапазон вимірювання часу від моменту увімкнення покажчиків поворотів до появи першого блиску. Виявлення несправностей у системі освітлення на ранній стадії.",
  },
  {
    title: "Регулювання нахилу світлотіньової межі",
    range: "15 – 140 кутових хвилин",
    text: "Точне налаштування геометрії світлового пучка фар відповідно до нормативних вимог.",
  },
  {
    title: "Регулювання висоти",
    range: "250 – 1300 мм",
    text: "Підходить для діагностики світлових приладів легкових та вантажних транспортних засобів різної висоти.",
  },
  {
    title: "Живлення",
    range: "батарея 9В / мережа 220В",
    text: "Прилад підтримує два режими живлення — автономне живлення від батареї 9В для мобільного використання та підключення до мережі 220В для стаціонарної роботи в лабораторії.",
  },
];

const galleryImages = [
  { path: "IMG-3ed9cc1a7c29d1e49a2340031c2e9dac-V.webp", alt: "Реглоскоп JVH-M100 JEVOL — вигляд спереду" },
  { path: "IMG-753cc0fde3524d5c89e5a5bd5d04b13d-V.webp", alt: "Реглоскоп JVH-M100 JEVOL — вигляд збоку" },
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
          name: "Реглоскоп JVH-M100",
          item: URL,
        },
      ],
    },
    {
      "@type": "Product",
      name: "Реглоскоп JVH-M100",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      image: imageUrl(heroImage.path),
      url: URL,
      additionalProperty: specs.map((s) => ({
        "@type": "PropertyValue",
        name: s.title,
        value: s.range,
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

const relatedCategories = categories.filter((c) => c.href !== "/regloskopp");

export default function RegloskopPage() {
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
              ПРИЛАД НАЛАШТУВАННЯ СВІТЛА ФАР - РЕГЛОСКОП (Фотометр) JVH-M100
            </>
          }
          lead={
            <>
              Реглоскоп JVH-M100 — контроль та налаштування світла фар для
              техогляду в Україні.
            </>
          }
          pdfHref="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/JEVOL_JVH_M100.pdf"
        />

        <Breadcrumb current="Реглоскоп JVH-M100" />

        {/* FAQ */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Поширені запитання
            </h2>
            <FaqAccordion items={faqs} theme="light" className="mt-5 sm:mt-6" />
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-surface py-8 sm:py-10">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Фото обладнання
            </h2>
            <ProductGallery
              photos={galleryImages.map((img) => ({
                src: imageUrl(img.path),
                alt: img.alt,
              }))}
            />
          </div>
        </section>

        {/* Technical specs */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Технічні параметри реглоскопа JVH-M100
            </h2>
            <p className="just mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              Реглоскоп JVH-M100 розроблений для точних вимірювань
              світлотехніки транспортних засобів в умовах акредитованої
              лабораторії технічного контролю відповідно до вимог ДСТУ
              3649:2010 та ISO/IEC 17025:2017.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {specs.map((s) => (
                <div key={s.title} className="info-card">
                  <h3 className="font-extrabold text-ink">
                    {s.title} —{" "}
                    <span className="text-brand-ink">{s.range}</span>
                  </h3>
                  <p className="just mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="bg-surface">
          <RelatedProducts items={relatedCategories} />
        </section>

        <HomeCta />
        <HomeContact />
      </main>

      <HomeFooter />
    </div>
  );
}
