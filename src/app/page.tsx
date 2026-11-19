import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { ObjectsGallery } from "@/components/home/ObjectsGallery";
import { FeatureTabs } from "@/components/home/FeatureTabs";
import { PalettePicker } from "@/components/home/PalettePicker";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

const HOME_TITLE =
  "Обладнання для техогляду в Україні — гальмівні стенди, димоміри, газоаналізатори | JEVOL";
const HOME_DESCRIPTION =
  "Офіційний представник JEVOL в Україні: гальмівні стенди, газоаналізатори, димоміри, реглоскопи для техогляду СТО. Монтаж, навчання, сервіс по всій Україні.";
const HOME_OG_IMAGE = storageUrl("images", "stacionarni-galmivni-stendi/23.webp");

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "https://jevol.com.ua/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://jevol.com.ua/",
    type: "website",
    images: [{ url: HOME_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [HOME_OG_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://jevol.com.ua/#organization",
      name: "Jevol Auto",
      url: "https://jevol.com.ua/",
      email: "info.jevol@gmail.com",
      telephone: "+380-50-470-9561",
      description: HOME_DESCRIPTION,
      areaServed: "UA",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+380-50-470-9561",
          contactType: "sales",
          areaServed: "UA",
          availableLanguage: ["uk", "ru"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jevol.com.ua/#website",
      url: "https://jevol.com.ua/",
      name: "JEVOL",
      inLanguage: "uk",
      publisher: { "@id": "https://jevol.com.ua/#organization" },
    },
  ],
};

const trustItems = [
  {
    title: "Всесвітньо відомий бренд JEVOL",
    text: "— міжнародний виробник обладнання для технічного контролю транспортних засобів, добре знайомий власникам випробувальних лабораторій та контролюючим органам по всьому світу. Компанія є єдиним офіційним та ексклюзивним представником Shanghai JEVOL в Україні.",
  },
  {
    title: "Більше 100 інсталяцій по всій Україні.",
    text: "За роки роботи на українському ринку ми укомплектували понад 100 акредитованих лабораторій технічного контролю транспортних засобів у всіх регіонах країни.",
  },
  {
    title: "Досвід, монтаж та підтримка.",
    text: "Маємо багаторічний досвід у постачанні та обслуговуванні обладнання для техогляду. Здійснюємо професійний монтаж та налаштування по всій Україні, проводимо навчання персоналу лабораторії замовника. Комплектуючі завжди є на складі в Україні — швидка заміна без очікування з-за кордону.",
  },
  {
    title: "Призначення обладнання.",
    text: "Обладнання JEVOL призначене для випробування легкових та вантажних транспортних засобів під час проведення обов'язкового державного технічного контролю в Україні. Відповідає вимогам ДСТУ 3649, ДСТУ 3333 та міжнародним стандартам ISO/IEC 17025:2019.",
  },
  {
    title: "Єдиний протокол випробувань.",
    text: "Програмне забезпечення JEVOL дозволяє одночасно керувати всіма приладами випробувальної лінії — газоаналізатором, димоміром, реглоскопом та тахометром. Всі отримані показники автоматично зберігаються в базі даних протоколів на ПК та об'єднуються в єдиний протокол результатів технічного контролю транспортного засобу.",
  },
  {
    title: "Підготовка документації та супровід акредитації",
    text: "Маємо великий досвід роботи з документами, необхідними для лабораторій технічного контролю. Готуємо пакет документів і супроводжуємо клієнтів на всіх етапах проходження акредитації в Національному агентстві з акредитації України (НААУ).",
  },
];

const brakeStandFeatures = [
  {
    title: "Повний комплекс вимірювань гальмівної системи",
    text: "Стенд виконує всі необхідні вимірювання для протоколу технічного контролю: сила гальмування, ефективність гальм, дисбаланс гальмівних зусиль, коефіцієнт тертя, навантаження на вісь та овальність гальмівних барабанів — повна картина стану гальмівної системи за одне випробування.",
  },
  {
    title: "Встановлення без оглядової ями",
    text: "Пересувні гальмівні стенди JEVOL не потребують монтажу в оглядову яму — значна економія на підготовці приміщення та будівельних роботах. Встановлення безпосередньо на рівній підлозі лабораторії. За бажанням та для зручності використання також можуть бути вбудовані в підлогу. (Великий попит)",
  },
  {
    title: "Довговічні корундові ролики",
    text: "Стенд оснащено корундовими роликами з гарантованим терміном служби понад 200 000 випробувальних циклів — мінімальні витрати на обслуговування та заміну протягом багатьох років експлуатації.",
  },
  {
    title: "Вбудована функція зважування",
    text: "Вимірювання вагового навантаження на кожну вісь та кожне колесо окремо — додатковий параметр для повноцінного протоколу технічного контролю без використання окремих ваг.",
  },
  {
    title: "Динамометр педалі гальма",
    text: "Вбудований динамометр педалі гальма вимірює зусилля натиску та час спрацювання гальмівної системи — обов'язковий параметр для протоколу техогляду відповідно до ДСТУ 3649.",
  },
  {
    title: "Тестування повнопривідних автомобілів 4WD",
    text: "Стенд підтримує випробування повнопривідних транспортних засобів — охоплює весь спектр сучасних автомобілів що проходять технічний контроль.",
  },
  {
    title: "Реверсивне тестування",
    text: "Транспортний засіб може заїжджати на стенд з обох боків — реверсивний режим роботи економить площу лабораторії та прискорює процес випробування.",
  },
  {
    title: "Повноцінна випробувальна лінія",
    text: "У поєднанні з детектором люфтів, стендом перевірки підвіски та стендом бокового відхилення гальмівний стенд JEVOL утворює повноцінну випробувальну лінію технічного контролю — єдине програмне забезпечення, єдиний протокол результатів.",
  },
];

const playDetectorFeatures = [
  {
    title: "Універсальна платформа для будь-якої колісної бази",
    text: "Надширока інспекційна платформа детектора люфтів підходить для транспортних засобів із різною колісною базою — від компактних легкових автомобілів до великогабаритних вантажних транспортних засобів. Один прилад для всього парку транспорту лабораторії.",
  },
  {
    title: "Бездротове керування",
    text: "Опційний бездротовий пульт керування дозволяє оператору лабораторії вільно переміщатися під час діагностики — зручний огляд ходової частини з будь-якої точки без прив'язки до кабелю. (Звичайний кабельний пульт керування постачається у базовій комплектації).",
  },
  {
    title: "Автоматичне повернення в початкове положення",
    text: "Після завершення кожного випробування платформа автоматично повертається в центральне положення — оператор не витрачає час на ручне налаштування між перевірками транспортних засобів. Значне прискорення процесу техогляду.",
  },
  {
    title: "Захист від перегріву та економія енергії",
    text: "Якщо прилад не використовується понад 1 хвилину — двигун автоматично зупиняється. Це запобігає перегріву масла гідравлічної системи та знижує споживання електроенергії при інтенсивній щоденній роботі лабораторії.",
  },
  {
    title: "Безперервний круговий рух платформи",
    text: "Завдяки функції кругового руху платформа переміщується вперед і назад безперервно без зупинок — рівномірне та постійне навантаження на елементи підвіски для максимально точного виявлення люфтів та дефектів.",
  },
];

const diagnosticsFeatures = [
  {
    title: "Димомір JVS-600 — вимірювання димності дизельних двигунів",
    text: "Призначений для точного вимірювання димності відпрацьованих газів дизельних та газодизельних автомобільних двигунів. Вимірює два ключових показники якості вихлопних газів — натуральний показник послаблення світлового потоку (К) та коефіцієнт послаблення світлового потоку (N) — відповідно до вимог ДСТУ 4276:2004.",
  },
  {
    title: "Газоаналізатор JVE-501 — 5-канальний аналіз вихлопних газів",
    text: "Сучасний 5-канальний газоаналізатор для вимірювання складу відпрацьованих газів транспортних засобів з бензиновими, газовими та комбінованими двигунами. Одночасно вимірює п'ять показників — оксид вуглецю (СО), вуглеводні (СН), діоксид вуглецю (СО₂), кисень (О₂) та оксид азоту (NO) — повний аналіз за одне вимірювання.",
  },
  {
    title: "Цифровий тахометр та датчик температури мастила",
    text: "Додаткові прилади для розширеної діагностики — вимірювання обертів двигуна та температури мастила під час проведення технічного контролю. Всі показники автоматично включаються до єдиного протоколу випробувань.",
  },
  {
    title: "Реглоскоп JVH-M100 — контроль та налаштування світла фар",
    text: "Високотехнологічний прилад з лазерним наведенням та фокусуванням для точного контролю та налаштування світлових приладів транспортних засобів відповідно до ДСТУ 3649:2010. Вмонтований LCD екран відображає покрокові вказівки щодо налаштування геометричних параметрів світлотехніки. Результати тестування автоматично передаються до програмного забезпечення на комп'ютер.",
  },
  {
    title: "Пересувна платформа для зберігання та використання приладів",
    text: "Зручна мобільна платформа для компактного зберігання та комфортного переміщення всього комплексу діагностичних приладів у межах лабораторії — економія простору та швидкий доступ до обладнання.",
  },
  {
    title: "Єдина система — єдиний протокол",
    text: "Всі прилади комплексу JEVOL працюють в інтегрованій програмній системі. Газоаналізатор, димомір, реглоскоп та тахометр одночасно передають дані до єдиної бази — автоматичне формування повного протоколу технічного контролю транспортного засобу без ручного введення результатів.",
  },
];

const HERO_BUCKET = "images";
const HERO_FOLDER = "hero-gallery";

const HERO_BG_URL = storageUrl(HERO_BUCKET, "stacionarni-galmivni-stendi/23.webp");

const heroSlides = [
  { path: "AutoTechService_7.webp", alt: "Стенд JEVOL на виставці «Все для техогляду»", width: 4032, height: 3024 },
  { path: "RRT-7500M.webp", alt: "Тестування вантажівки Mercedes Actros на гальмівному стенді JEVOL", width: 817, height: 647 },
  { path: "AutoTechService_3.webp", alt: "Стенд JEVOL на виставці «Все для техогляду 2020»", width: 5333, height: 3000 },
  { path: "5 (1).webp", alt: "Тестування вантажівки на пересувному гальмівному стенді JEVOL", width: 4032, height: 3024 },
  { path: "exhibition.webp", alt: "Відвідувачі на стенді JEVOL, виставка «Все для техогляду 2021»", width: 960, height: 712 },
  { path: "10.webp", alt: "Гальмівний стенд JEVOL, встановлений у лабораторії техогляду", width: 4032, height: 3024 },
  { path: "AutoTechService_5 (1).webp", alt: "Стенд JEVOL на виставці «Все для техогляду 2022»", width: 4032, height: 3024 },
  { path: "3434.webp", alt: "Монтаж гальмівного стенду JEVOL в оглядовій ямі", width: 4032, height: 3024 },
  { path: "2.webp", alt: "Встановлення пересувного гальмівного стенду JEVOL", width: 1348, height: 1011 },
  { path: "AutoTechServise_6.webp", alt: "Мобільний гальмівний стенд JEVOL на виставці «Все для техогляду 2021»", width: 4032, height: 3024 },
  { path: "IMG_7891.webp", alt: "Лінія технічного контролю з диспетчерською кабіною JEVOL", width: 4032, height: 3024 },
  { path: "5.webp", alt: "Оглядова яма для гальмівного стенду JEVOL", width: 4032, height: 3024 },
  { path: "foto3.webp", alt: "Гальмівний стенд JEVOL, вигляд зверху", width: 533, height: 400 },
  {
    path: "23.webp",
    folder: "stacionarni-galmivni-stendi",
    alt: "Стаціонарний гальмівний стенд JEVOL — деталь роликів",
    width: 1280,
    height: 720,
  },
  {
    path: "63.webp",
    folder: "stacionarni-galmivni-stendi",
    alt: "Лабораторія техогляду зі стаціонарним гальмівним стендом JEVOL",
    width: 4032,
    height: 3024,
  },
  {
    path: "IMG-1544.webp",
    folder: "stacionarni-galmivni-stendi",
    alt: "Встановлення лабораторії техогляду з гальмівним стендом JEVOL",
    width: 4032,
    height: 3024,
  },
].map((s) => ({
  src: storageUrl(HERO_BUCKET, `${s.folder ?? HERO_FOLDER}/${s.path}`),
  alt: s.alt,
  width: s.width,
  height: s.height,
}));

// Photo roles on the homepage (indices into heroSlides above):
// 3 = truck on a JEVOL mobile brake stand (hero), 10 = test line with control
// cabin (complex fitting), 14 = lab with a stationary stand (big gallery tile),
// 15 / 11 / 5 = small gallery tiles. The lightbox opens all of them.
const HERO_PHOTO = heroSlides[3];
const COMPLEX_PHOTO = heroSlides[10];
const GALLERY_BIG = 14;
const GALLERY_SMALL = [15, 11, 5];

// Short card lines are existing headings from the product pages/sections.
const categoryBlurbs: Record<string, string> = {
  "/stacionarni-galmivni-stendi": "Повний комплекс вимірювань гальмівної системи",
  "/peresuvni-galmivni-stendi": "Встановлення без оглядової ями",
  "/jvs-600": "Вимірювання димності дизельних двигунів",
  "/jve-501": "5-канальний аналіз вихлопних газів",
  "/detektor-lyuftiv": "Діагностика підвіски для техогляду",
  "/regloskopp": "Контроль та налаштування світла фар",
};

const advantages = [
  { label: "100+ лабораторій оснащено", icon: "lab" },
  { label: "Монтаж по всій Україні", icon: "map" },
  { label: "Сервіс і комплектуючі в Україні", icon: "wrench" },
] as const;

const complexServices = [
  "Підбір обладнання",
  "Постачання та монтаж",
  "Налаштування обладнання",
  "Навчання персоналу",
  "Підготовка документації та супровід акредитації",
  "Комплектуючі на складі в Україні",
];

// Cards for the "Why JEVOL" block reuse the verified trustItems text.
const whyCards = [
  { title: "Офіційне представництво Shanghai JEVOL", item: trustItems[0] },
  { title: "Понад 100 встановлених лабораторій", item: trustItems[1] },
  { title: "Професійний монтаж та сервіс", item: trustItems[2] },
  { title: "Комплексне програмне забезпечення", item: trustItems[4] },
];

// Simple stroke icons for the "Why JEVOL" cards (same order as whyCards).
const whyIcons = [
  "M12 3 4 6v6c0 5 3.4 8 8 9 4.6-1 8-4 8-9V6l-8-3Zm-3 9 2.2 2.2L15.5 10",
  "M3 21V9l9-6 9 6v12M3 21h18M9 21v-6h6v6",
  "M14.7 6.3a4 4 0 0 0 5 5L21 12.6 12.6 21a2.1 2.1 0 0 1-3-3L17.9 9.7",
  "M4 5h16v11H4zM8 20h8M12 16v4M8 9l2 2 4-4",
];

const featureGroups = [
  {
    id: "brake",
    label: "Гальмівні стенди",
    title:
      "Універсальні гальмівні стенди JEVOL — стаціонарні та пересувні моделі для техогляду.",
    intro:
      "Гальмівні стенди JEVOL забезпечують повний комплекс вимірювань під час проведення обов'язкового технічного контролю транспортних засобів в Україні.",
    items: brakeStandFeatures,
  },
  {
    id: "play",
    label: "Детектор люфтів",
    title:
      "Детектор люфтів ходової частини JEVOL — діагностика підвіски для техогляду",
    intro:
      "Детектор люфтів JEVOL (Play Detector) забезпечує точну та швидку діагностику ходової частини транспортних засобів під час проведення обов'язкового технічного контролю в Україні.",
    items: playDetectorFeatures,
  },
  {
    id: "diag",
    label: "Діагностичні прилади",
    title:
      "Комплекс діагностичних приладів JEVOL — аналіз вихлопних газів та контроль світла фар.",
    intro:
      "Повний комплекс приладів JEVOL для діагностики транспортних засобів під час обов'язкового технічного контролю в Україні. Всі прилади працюють в єдиній системі та формують єдиний протокол випробувань.",
    items: diagnosticsFeatures,
  },
];

const protocolSteps = [
  { title: "Детектор люфтів", text: "Ходова частина та підвіска" },
  { title: "Гальмівний стенд", text: "Сила, ефективність, дисбаланс" },
  { title: "Газоаналізатор та димомір", text: "Склад та димність вихлопу" },
  { title: "Реглоскоп", text: "Світло фар" },
  { title: "Єдиний протокол", text: "База протоколів на ПК" },
];

function Icon({ name }: { name: "lab" | "map" | "wrench" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-9 w-9 shrink-0 text-brand-ink",
  };
  if (name === "lab")
    return (
      <svg {...common}>
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M3 21h18" />
        <rect x="8" y="12" width="8" height="9" />
        <path d="M12 12v9M8 16.5h8" />
      </svg>
    );
  if (name === "map")
    return (
      <svg {...common}>
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M14.7 6.3a4 4 0 0 0 5 5L21 12.6 12.6 21a2.1 2.1 0 0 1-3-3L17.9 9.7" />
      <path d="M14.7 6.3 11 10" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink"
    >
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-surface font-[family-name:var(--font-manrope)] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomeHeader />

      <main className="flex-1">
        {/* 2. Hero: text on solid black, photo in its own frame (no overlay) */}
        <section className="relative bg-navy text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-28 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-36 lg:pt-20">
            <div>
              <p className="w-fit rounded bg-brand px-3 py-1.5 text-on-brand text-[11px] font-bold uppercase tracking-wider sm:text-xs">
                Офіційний представник Shanghai JEVOL в Україні
              </p>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-6xl">
                Точність, якій довіряють технічний контроль
              </h1>
              <p className="mt-5 max-w-lg text-lg text-slate-300 sm:text-xl">
                Обладнання для випробувальних лабораторій та технічного контролю
                транспортних засобів.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#categories"
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-brand px-6 text-sm font-bold text-on-brand transition-colors hover:bg-brand-dark"
                >
                  Переглянути обладнання <span aria-hidden>→</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center rounded-md border border-white/40 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-navy"
                >
                  Отримати консультацію
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
                {["ДСТУ 3649", "ДСТУ 3333", "ISO/IEC 17025:2019"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-xl border border-brand/50 sm:block"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-2 shadow-2xl">
                <Image
                  src={HERO_PHOTO.src}
                  alt={HERO_PHOTO.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Advantages strip */}
        <section aria-label="Ключові переваги" className="relative z-10 -mt-16 px-4 sm:-mt-20">
          <ul className="mx-auto grid max-w-6xl gap-6 rounded-xl border border-rule bg-surface p-6 shadow-2xl shadow-navy/20 sm:grid-cols-3 sm:gap-0 sm:p-8">
            {advantages.map((a, i) => (
              <li
                key={a.label}
                className={`flex items-center gap-4 sm:px-6 ${
                  i > 0 ? "sm:border-l sm:border-rule" : "sm:pl-0"
                }`}
              >
                <Icon name={a.icon} />
                <span className="text-base font-extrabold leading-snug sm:text-lg">
                  {a.label}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Catalog */}
        <section id="categories" className="scroll-mt-20 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="reveal flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 flex items-center gap-3 tech text-xs font-bold uppercase tracking-[0.18em] text-brand-ink">
                  <span aria-hidden className="h-0.5 w-8 bg-brand" />
                  Каталог
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Обладнання JEVOL
                </h2>
              </div>
              <span aria-hidden className="mb-2 hidden h-px flex-1 bg-brand/60 sm:block" />
              <Link
                href="/#categories"
                className="mb-1 shrink-0 text-sm font-bold text-brand-ink hover:underline"
              >
                Весь каталог →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="reveal group flex flex-col overflow-hidden rounded-xl bg-navy shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="relative aspect-[4/5] bg-navy sm:aspect-[4/4.4]">
                    <Image
                      src={storageUrl("images", `${cat.imageFolder}/${cat.imagePath}`)}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                      <div>
                        <h3 className="text-xl font-extrabold leading-snug">{cat.name}</h3>
                        <p className="mt-1 text-sm text-slate-200">
                          {categoryBlurbs[cat.href]}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-lg text-on-brand transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Complex fitting */}
        <section id="complex" className="scroll-mt-20 bg-mist">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[1fr_1.15fr]">
            <div className="reveal">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Комплексне оснащення лабораторій технічного контролю
              </h2>
              <p className="mt-4 max-w-lg text-muted">
                Від підбору обладнання до монтажу та навчання персоналу.
                Створюємо сучасні лінії технічного контролю під ключ.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {complexServices.map((t) => (
                  <li key={t} className="flex gap-2.5 text-[15px] font-semibold">
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href="#software"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-brand px-6 text-sm font-bold text-on-brand transition-colors hover:bg-brand-dark"
              >
                Дізнатися більше <span aria-hidden>→</span>
              </a>
            </div>
            <div className="reveal relative">
              <div aria-hidden className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-xl bg-brand/15 sm:block" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy shadow-xl">
                <Image
                  src={COMPLEX_PHOTO.src}
                  alt={COMPLEX_PHOTO.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-lg bg-brand px-5 py-3 text-on-brand shadow-xl sm:left-6">
                <p className="text-3xl font-extrabold leading-none">100+</p>
                <p className="mt-1 text-xs font-semibold text-on-brand/80">
                  лабораторій оснащено
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why JEVOL */}
        <section id="service" className="scroll-mt-20 bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <p className="reveal mb-3 flex items-center gap-3 tech text-xs font-bold uppercase tracking-[0.18em] text-brand-ink">
              <span aria-hidden className="h-0.5 w-8 bg-brand" />
              Переваги
            </p>
            <h2 className="reveal text-3xl font-extrabold tracking-tight sm:text-5xl">
              Чому обирають JEVOL
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyCards.map((c) => (
                <div
                  key={c.title}
                  className="reveal rounded-xl border border-rule bg-surface p-6 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/15 text-brand-ink">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
                      <path d={whyIcons[whyCards.indexOf(c)]} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-extrabold leading-snug">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {c.item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="reveal mt-10 grid gap-6 rounded-lg bg-mist p-6 sm:grid-cols-2 sm:p-8">
              {[trustItems[3], trustItems[5]].map((t) => (
                <div key={t.title}>
                  <h3 className="font-extrabold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Objects */}
        <section id="objects" className="scroll-mt-20 bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="reveal text-3xl font-extrabold tracking-tight sm:text-5xl">
              Наші об&apos;єкти
            </h2>
            <p className="reveal mt-3 max-w-2xl text-muted">
              Реальні установки JEVOL: лабораторії техогляду, монтаж стендів та
              виставкові стенди.
            </p>
            <div className="reveal mt-8">
              <ObjectsGallery
                photos={heroSlides}
                bigIndex={GALLERY_BIG}
                smallIndices={GALLERY_SMALL}
              />
            </div>
          </div>
        </section>

        {/* Equipment details (all verified feature texts) */}
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="reveal text-3xl font-extrabold tracking-tight sm:text-5xl">
              Можливості обладнання
            </h2>
            <div className="reveal mt-8">
              <FeatureTabs groups={featureGroups} />
            </div>
          </div>
        </section>

        {/* 8. Software */}
        <section id="software" className="relative scroll-mt-20 overflow-hidden bg-navy text-white">
          <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/[0.06] blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-52 -left-40 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <h2 className="reveal max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Єдина система — єдиний протокол випробувань
            </h2>
            <p className="reveal mt-4 max-w-2xl text-slate-300">
              {diagnosticsFeatures[5].text}
            </p>
            <ol className="reveal mt-12 grid gap-8 md:grid-cols-5 md:gap-0">
              {protocolSteps.map((st, i) => (
                <li key={st.title} className="relative md:pr-5">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-extrabold text-on-brand shadow-lg shadow-brand/40">
                    {i + 1}
                  </span>
                  {i < protocolSteps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-11 top-[22px] hidden h-px w-[calc(100%-2.75rem)] bg-gradient-to-r from-brand to-white/10 md:block"
                    />
                  )}
                  <h3 className="mt-4 font-bold">{st.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 9. CTA */}
        <section className="border-t-2 border-brand bg-mist text-ink">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                Потрібна консультація щодо оснащення лабораторії?
              </h2>
              <p className="mt-2 text-muted">
                Наші спеціалісти допоможуть підібрати оптимальне обладнання для
                ваших завдань.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-navy-2"
              >
                Зв&apos;язатися з нами <span aria-hidden>→</span>
              </a>
              <a
                href="tel:+380504709561"
                className="text-lg font-bold hover:underline"
              >
                +38 050 470 95 61
              </a>
            </div>
          </div>
        </section>

        <div id="contact" className="scroll-mt-20">
          <ContactSection />
        </div>
      </main>

      <HomeFooter />
      <PalettePicker />
    </div>
  );
}
