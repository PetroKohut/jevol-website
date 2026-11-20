export const categories = [
  {
    name: "Стаціонарні гальмівні стенди",
    href: "/stacionarni-galmivni-stendi",
    imageFolder: "stacionarni-galmivni-stendi",
    imagePath: "6.webp",
  },
  {
    name: "Пересувні гальмівні стенди",
    href: "/peresuvni-galmivni-stendi",
    imageFolder: "peresuvni-galmivni-stendi",
    imagePath: "6 (1).webp",
  },
  {
    name: "Димомір JVS-600",
    href: "/jvs-600",
    imageFolder: "dymomir-jvs-600",
    imagePath: "1.webp",
  },
  {
    name: "Газоаналізатор JVE-501",
    href: "/jve-501",
    imageFolder: "gazoanalizator-jve-501",
    imagePath: "2.webp",
  },
  {
    name: "Детектор люфтів ходової частини",
    href: "/detektor-lyuftiv",
    imageFolder: "detektor-lyuftiv",
    imagePath: "fotoLuft1.webp",
  },
  {
    name: "Реглоскоп JVH-M100",
    href: "/regloskopp",
    // Note: the real folder in Supabase Storage is "regloskop-jvh-m1oo" (typo'd
    // with letter "oo" instead of "00" when it was created) — using it as-is.
    imageFolder: "regloskop-jvh-m1oo",
    imagePath: "!IMG_3733.webp",
  },
];

// Short card line under each device name (shared by the homepage and product pages).
export const categoryBlurbs: Record<string, string> = {
  "/stacionarni-galmivni-stendi": "Повний комплекс вимірювань гальмівної системи",
  "/peresuvni-galmivni-stendi": "Встановлення без оглядової ями",
  "/jvs-600": "Вимірювання димності дизельних двигунів",
  "/jve-501": "5-канальний аналіз вихлопних газів",
  "/detektor-lyuftiv": "Діагностика підвіски для техогляду",
  "/regloskopp": "Контроль та налаштування світла фар",
};

// Where each card photo is cropped so the device stays in frame.
export const categoryFocus: Record<string, string> = {
  "/regloskopp": "50% 90%",
};

