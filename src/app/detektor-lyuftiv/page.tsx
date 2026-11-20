import type { Metadata } from "next";
import Image from "next/image";
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
  "Детектор люфтів ходової частини JEVOL PDT-500/PDT-800 — купити в Україні | JEVOL";
const DESCRIPTION =
  "Детектор люфтів JEVOL PDT-500/PDT-800 для діагностики підвіски та рульового керування авто під час техогляду в Україні. Гідравлічні платформи, рух у 8 напрямках.";
const URL = "https://jevol.com.ua/detektor-lyuftiv";

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "detektor-lyuftiv";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "fotoLuft1.webp",
  alt: "Детектор люфтів JEVOL — платформи, вмонтовані в оглядову яму",
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
    question: "Для чого призначений детектор люфтів JEVOL?",
    answer:
      "Детектор люфтів JEVOL призначений для автоматизованої діагностики ходової частини транспортних засобів — виявлення люфтів та дефектів у рульовому управлінні та підвісці під час проведення обов'язкового технічного контролю в Україні. Прилад дозволяє виявити несправності у кульових опорах та сайлент-блоках, шарнірних з'єднаннях та амортизаторах, демпферних прокладках та пневматичних ресорах, сталевих ресорах та елементах кріплення підвіски.",
  },
  {
    question: "Як працює детектор люфтів?",
    answer:
      "Гідравлічні платформи створюють різноспрямоване навантаження на вісь автомобіля, органи рульового управління та елементи кріплення підвіски. Це дозволяє оператору лабораторії здійснювати точний візуальний контроль всіх дефектів у режимі реального часу.",
  },
  {
    question: "Чи забезпечує прилад швидку діагностику?",
    answer:
      "Так. Прилад забезпечує швидку візуальну діагностику сайлент-блоків, втулок, ресор та інших гумових складових підвіски автомобіля — скорочує час проведення технічного контролю без втрати точності.",
  },
  {
    question: "Наскільки надійна гідравлічна система приладу?",
    answer:
      "Конструкція базується на потужних надійних гідравлічних вузлах та компонентах промислового класу — розрахована на інтенсивну щоденну експлуатацію в умовах акредитованої лабораторії.",
  },
  {
    question: "У скількох напрямках рухаються платформи?",
    answer:
      "Діагностичні платформи переміщуються у 8 напрямках, включаючи діагональний рух — повне навантаження на всі елементи підвіски для максимально точного виявлення дефектів.",
  },
  {
    question: "Як забезпечується зручність керування приладом?",
    answer:
      "Пульт діагностичного керування оснащено вбудованим потужним LED ліхтарем — для зручного візуального огляду ходової частини навіть у погано освітлених приміщеннях.",
  },
];

const models = [
  { param: "Максимальне навантаження на вісь", pdt500: "3 Т", pdt800: "15 Т" },
  { param: "Потужність електродвигуна", pdt500: "1.5 кВт", pdt800: "1.5 кВт" },
  { param: "Рух платформ", pdt500: "-50 мм +50 мм", pdt800: "-50 мм +50 мм" },
  { param: "Тиск у гідравлічній системі", pdt500: "7 МПа", pdt800: "16 МПа" },
  { param: "Потік гідравлічної рідини", pdt500: "2.5 л", pdt800: "5 л" },
  { param: "Об'єм гідравлічного ресивера", pdt500: "10 л", pdt800: "20 л" },
  {
    param: "Габарити (Д х Ш х В)",
    pdt500: "580 × 580 × 70 мм",
    pdt800: "1000 × 700 × 140 мм",
  },
];

const galleryImages = [
  { path: "fotoLuft2.webp", alt: "Детектор люфтів JEVOL — вигляд платформ під іншим кутом" },
  { path: "fotoLuft3 (1).webp", alt: "Блок керування детектора люфтів JEVOL Play Detector" },
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
          name: "Детектор люфтів ходової частини",
          item: URL,
        },
      ],
    },
    {
      "@type": "Product",
      name: "Детектор люфтів JEVOL PDT-500",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      image: imageUrl(heroImage.path),
      url: URL,
      additionalProperty: models.map((m) => ({
        "@type": "PropertyValue",
        name: m.param,
        value: m.pdt500,
      })),
    },
    {
      "@type": "Product",
      name: "Детектор люфтів JEVOL PDT-800",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      image: imageUrl(heroImage.path),
      url: URL,
      additionalProperty: models.map((m) => ({
        "@type": "PropertyValue",
        name: m.param,
        value: m.pdt800,
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

const relatedCategories = categories.filter(
  (c) => c.href !== "/detektor-lyuftiv",
);

export default function PlayDetectorPage() {
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
              ДЕТЕКТОР ЛЮФТІВ ТА ЗАЗОРІВ ХОДОВОЇ ЧАСТИНИ АВТОМОБІЛЯ
              PDT-500/PDT-800
            </>
          }
          lead={
            <>
              Детектор люфтів ходової частини JEVOL — діагностика підвіски
              для техогляду.
            </>
          }
          pdfHref="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/JEVOL_PDT500_PDT800.pdf"
        />

        <Breadcrumb current="Детектор люфтів ходової частини" />

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

        {/* Model comparison table */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[2.25rem]">
              Технічні параметри: PDT-500 та PDT-800
            </h2>
            <div className="mt-5 overflow-x-auto sm:mt-6">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-rule text-left">
                    <th className="py-2 pr-4 font-extrabold text-ink">
                      Параметр
                    </th>
                    <th className="py-2 pr-4 font-extrabold text-ink">
                      PDT-500
                    </th>
                    <th className="py-2 font-extrabold text-ink">PDT-800</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr key={m.param} className="border-b border-rule">
                      <td className="py-3 pr-4 text-muted">{m.param}</td>
                      <td className="py-3 pr-4 font-extrabold text-ink">
                        {m.pdt500}
                      </td>
                      <td className="py-3 font-extrabold text-ink">
                        {m.pdt800}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
