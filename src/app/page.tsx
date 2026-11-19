import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { ObjectsGallery } from "@/components/home/ObjectsGallery";
import { FeatureAccordion } from "@/components/home/FeatureAccordion";
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

// Photo roles (indices into heroSlides above): 3 = truck on a mobile brake stand
// (hero). The gallery shows the same curated photos as before and opens all of them.
const HERO_PHOTO = heroSlides[3];
const GALLERY_BIG = 14;
const GALLERY_SMALL = [15, 11, 5];

function WhatsAppCta() {
  return (
    <a
      href="https://wa.me/380504709561"
      className="btn-lift inline-flex h-12 w-fit items-center justify-center rounded-md bg-brand px-7 text-sm font-bold text-on-brand transition-colors hover:bg-brand-dark"
    >
      Написати нам у WhatsApp
    </a>
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
        {/* Hero: text on solid black, photo in its own frame */}
        <section className="relative bg-navy text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:py-24">
            <div>
              <p className="hero-in w-fit rounded bg-brand px-3 py-1.5 text-on-brand text-[11px] font-bold uppercase tracking-wider sm:text-xs">
                Офіційний представник JEVOL в Україні
              </p>
              <h1 className="hero-in hero-in-2 mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[2.85rem]">
                Сучасне високоточне обладнання для діагностики транспортних
                засобів
              </h1>
              <p className="hero-in hero-in-3 mt-5 max-w-lg text-lg text-slate-300 sm:text-xl">
                Гальмівні стенди, детектор люфтів, газоаналізатор, димомір,
                реглоскоп та додаткове обладнання для техогляду.
              </p>
              <div className="hero-in hero-in-4 mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/380504709561"
                  className="btn-lift inline-flex h-12 items-center rounded-md bg-brand px-6 text-sm font-bold text-on-brand transition-colors hover:bg-brand-dark"
                >
                  Написати нам у WhatsApp
                </a>
                <a
                  href="#categories"
                  className="btn-lift inline-flex h-12 items-center rounded-md border border-white/40 px-6 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-navy"
                >
                  Переглянути прилади
                </a>
              </div>
            </div>
            <div className="hero-photo relative">
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

        {/* Why JEVOL */}
        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="reveal text-3xl font-extrabold tracking-tight sm:text-5xl">
              Чому обирають JEVOL
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trustItems.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal why-card group relative overflow-hidden rounded-xl border border-rule bg-surface p-6 shadow-sm"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                  <span className="block text-5xl font-black leading-none text-brand/30 transition-colors duration-300 group-hover:text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-navy py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="reveal">
              <ObjectsGallery
                photos={heroSlides}
                bigIndex={GALLERY_BIG}
                smallIndices={GALLERY_SMALL}
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="scroll-mt-20 bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="reveal text-3xl font-extrabold tracking-tight sm:text-5xl">
              Прилади
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="reveal group flex flex-col overflow-hidden rounded-xl bg-navy shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="relative aspect-[4/3] bg-navy">
                    <Image
                      src={storageUrl("images", `${cat.imageFolder}/${cat.imagePath}`)}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                      <h3 className="text-lg font-extrabold uppercase leading-snug tracking-wide">
                        {cat.name}
                      </h3>
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

        {/* Brake stands */}
        <FeatureAccordion
          tone="light"
          title="Універсальні гальмівні стенди JEVOL — стаціонарні та пересувні моделі для техогляду."
          intro="Гальмівні стенди JEVOL забезпечують повний комплекс вимірювань під час проведення обов'язкового технічного контролю транспортних засобів в Україні."
          items={brakeStandFeatures}
          image={{
            src: storageUrl("images", "stacionarni-galmivni-stendi/23.webp"),
            alt: "Стаціонарний гальмівний стенд JEVOL — деталь роликів",
          }}
          cta={<WhatsAppCta />}
        />

        {/* Play detector */}
        <FeatureAccordion
          tone="mist"
          flip
          title="Детектор люфтів ходової частини JEVOL — діагностика підвіски для техогляду"
          intro="Детектор люфтів JEVOL (Play Detector) забезпечує точну та швидку діагностику ходової частини транспортних засобів під час проведення обов'язкового технічного контролю в Україні."
          items={playDetectorFeatures}
          image={{
            src: storageUrl("images", "detektor-lyuftiv/fotoLuft1.webp"),
            alt: "Детектор люфтів ходової частини JEVOL",
          }}
          cta={<WhatsAppCta />}
        />

        {/* Diagnostics combo */}
        <FeatureAccordion
          tone="light"
          title="Комплекс діагностичних приладів JEVOL — аналіз вихлопних газів та контроль світла фар."
          intro="Повний комплекс приладів JEVOL для діагностики транспортних засобів під час обов'язкового технічного контролю в Україні. Всі прилади працюють в єдиній системі та формують єдиний протокол випробувань."
          items={diagnosticsFeatures}
          image={{
            src: storageUrl("images", "gazoanalizator-jve-501/1.webp"),
            alt: "Комплекс JEVOL: газоаналізатор JVE-501 та димомір JVS-600",
          }}
          cta={<WhatsAppCta />}
        />

        <div id="contact" className="scroll-mt-20">
          <ContactSection />
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
