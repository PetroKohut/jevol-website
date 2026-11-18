import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ContactSection } from "@/components/ContactSection";
import { HeroGallery } from "@/components/HeroGallery";
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

// Curated for the homepage display: 5 (1).webp, 5.webp, exhibition.webp,
// foto3.webp, IMG_7891.webp, then 23.webp, 63.webp, IMG-1544.webp —
// indices into heroSlides above. 8 total for a clean 4x2 grid.
const heroFeaturedIndices = [3, 11, 4, 12, 10, 13, 14, 15];

const proofStats = [
  { value: "100+", label: "акредитованих лабораторій технічного контролю" },
  { value: "200 000", label: "випробувальних циклів — ресурс корундових роликів" },
  { value: "ДСТУ 3649", label: "ДСТУ 3333 та ISO/IEC 17025:2019" },
  { value: "Склад в UA", label: "комплектуючі завжди в наявності" },
];

const testLineSteps = [
  { title: "Детектор люфтів", text: "Ходова частина та підвіска", tag: "платформа кругового руху" },
  { title: "Гальмівний стенд", text: "Сила, ефективність, дисбаланс", tag: "ДСТУ 3649" },
  { title: "Газоаналізатор / димомір", text: "Склад та димність вихлопу", tag: "JVE-501 · JVS-600" },
  { title: "Реглоскоп", text: "Налаштування світла фар", tag: "JVH-M100" },
  { title: "Єдиний протокол", text: "Автоматично, без ручного введення", tag: "ПК · база протоколів" },
];

function WhatsAppCta({ variant = "accent" }: { variant?: "accent" | "wa" }) {
  return (
    <a
      href="https://wa.me/380504709561"
      className={`inline-flex h-12 w-fit items-center justify-center rounded-md px-7 text-sm font-bold tracking-wide text-white transition-colors ${
        variant === "wa"
          ? "bg-[#1fa855] hover:bg-[#188a45]"
          : "bg-accent hover:bg-orange-600"
      }`}
    >
      Написати нам у WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink text-white">
          <Image
            src={HERO_BG_URL}
            alt=""
            aria-hidden
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="relative mx-auto max-w-6xl px-4 pb-0 pt-16 sm:pt-24">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Офіційний представник JEVOL в Україні
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
              Обладнання для технічного контролю транспорту
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Гальмівні стенди, детектор люфтів, газоаналізатор, димомір,
              реглоскоп та додаткове обладнання для техогляду. Монтаж по всій
              Україні, комплектуючі на складі, єдиний протокол випробувань.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-sm font-bold tracking-wide text-white transition-colors hover:bg-orange-600"
              >
                Запросити ціну
              </a>
              <a
                href="#categories"
                className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-600 px-7 text-sm font-bold tracking-wide text-white transition-colors hover:border-white"
              >
                Переглянути прилади
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-2 border-t border-zinc-800 md:grid-cols-4">
              {proofStats.map((st, i) => (
                <div
                  key={st.value}
                  className={`py-6 pr-5 ${i % 2 === 1 ? "pl-5" : ""} ${
                    i > 0 ? "md:border-l md:border-zinc-800 md:pl-5" : ""
                  } ${i % 2 === 1 ? "border-l border-zinc-800" : ""} ${
                    i >= 2 ? "border-t border-zinc-800 md:border-t-0" : ""
                  }`}
                >
                  <dt className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">
                    {st.value}
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-400">{st.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Category grid */}
        <section id="categories" className="scroll-mt-20 bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Каталог
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
              Прилади для техогляду
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="relative aspect-[16/10] bg-ink">
                    <Image
                      src={storageUrl("images", `${cat.imageFolder}/${cat.imagePath}`)}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <h3 className="text-lg font-extrabold leading-snug text-zinc-950">
                      {cat.name}
                    </h3>
                    <span
                      aria-hidden
                      className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Test line */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Повна випробувальна лінія
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Один комплект, один протокол випробувань
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Програмне забезпечення JEVOL керує всіма приладами лінії
              одночасно. Результати зберігаються в базі протоколів на ПК та
              об&apos;єднуються в єдиний протокол технічного контролю.
            </p>
            <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-0">
              {testLineSteps.map((st, i) => (
                <li key={st.title} className="relative md:pr-5">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-accent bg-ink font-mono text-sm text-accent">
                    {i + 1}
                  </span>
                  {i < testLineSteps.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute left-9 top-[18px] hidden h-px w-[calc(100%-2.25rem)] bg-zinc-800 md:block"
                    />
                  )}
                  <h3 className="mt-4 font-bold">{st.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{st.text}</p>
                  <p className="mt-2 font-mono text-xs text-accent">{st.tag}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why JEVOL */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Про компанію
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
              Чому обирають JEVOL
            </h2>
            <div className="mt-10 grid grid-cols-1 border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-zinc-200 py-7 sm:pr-8"
                >
                  <h3 className="text-lg font-extrabold leading-snug text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-ink py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              Об&apos;єкти
            </p>
            <h2 className="mb-8 mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Лабораторії, де працює JEVOL
            </h2>
            <HeroGallery photos={heroSlides} featuredIndices={heroFeaturedIndices} />
          </div>
        </section>

        {/* Brake stands */}
        <FeatureSection
          tone="light"
          eyebrow="Гальмівні стенди"
          title="Універсальні гальмівні стенди JEVOL — стаціонарні та пересувні моделі для техогляду."
          intro="Гальмівні стенди JEVOL забезпечують повний комплекс вимірювань під час проведення обов'язкового технічного контролю транспортних засобів в Україні."
          items={brakeStandFeatures}
        />

        {/* Play detector */}
        <FeatureSection
          tone="dark"
          eyebrow="Детектор люфтів"
          title="Детектор люфтів ходової частини JEVOL — діагностика підвіски для техогляду"
          intro="Детектор люфтів JEVOL (Play Detector) забезпечує точну та швидку діагностику ходової частини транспортних засобів під час проведення обов'язкового технічного контролю в Україні."
          items={playDetectorFeatures}
        />

        {/* Diagnostics combo */}
        <FeatureSection
          tone="light"
          eyebrow="Діагностичні прилади"
          title="Комплекс діагностичних приладів JEVOL — аналіз вихлопних газів та контроль світла фар."
          intro="Повний комплекс приладів JEVOL для діагностики транспортних засобів під час обов'язкового технічного контролю в Україні. Всі прилади працюють в єдиній системі та формують єдиний протокол випробувань."
          items={diagnosticsFeatures}
        />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function FeatureSection({
  tone,
  eyebrow,
  title,
  intro,
  items,
}: {
  tone: "dark" | "light";
  eyebrow: string;
  title: string;
  intro: string;
  items: { title: string; text: string }[];
}) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-ink text-white" : "bg-white text-zinc-950"}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className={`mt-4 max-w-2xl ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
          {intro}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border p-6 ${
                dark ? "border-zinc-800 bg-ink-2" : "border-zinc-200 bg-background"
              }`}
            >
              <h3 className="font-extrabold leading-snug">{item.title}</h3>
              <p className={`mt-2 text-sm ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <WhatsAppCta variant="wa" />
        </div>
      </div>
    </section>
  );
}
