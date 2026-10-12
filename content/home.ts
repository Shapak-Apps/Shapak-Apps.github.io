import type { L } from "@/lib/i18n";

export const meta = {
  title: {
    tk: "Şapak Apps — Open Source Turkmenistan",
    ru: "Şapak Apps — Open Source Turkmenistan",
    en: "Şapak Apps — Open Source Turkmenistan",
  },
  description: {
    tk: "Türkmenistanda döredilýän açyk kodly programma üpjünçiligi: türkmen dilinde programmalar, kod GitHub-da, MIT, Apache-2.0 we GPL-3.0.",
    ru: "Открытое ПО, созданное в Туркменистане: приложения на туркменском, код на GitHub, лицензии MIT, Apache-2.0 и GPL-3.0.",
    en: "Open-source software built in Turkmenistan: apps in Turkmen, code on GitHub, MIT, Apache-2.0 and GPL-3.0 licensed.",
  },
  ogTitle: "Open Source Turkmenistan",
} satisfies Record<string, L | string>;

/** Первый экран — как баннер организации: знак, имя, одна строка, ряд приложений. */
export const hero = {
  title: "Open Source Turkmenistan",
  lead: {
    tk: "Türkmen dilinde mugt programmalar: dil kurslary, terjimeçiler we gurallar.",
    ru: "Бесплатные программы на туркменском: языковые курсы, переводчики и инструменты.",
    en: "Free software in Turkmen: language courses, translators and tools.",
  },
  allProjects: { tk: "Ähli taslamalar →", ru: "Все проекты →", en: "All projects →" },
  /** Подпись стрелки «листай» внизу первого экрана (для экранных дикторов). */
  scrollCue: { tk: "Aşak", ru: "Вниз", en: "Scroll down" },
};

/** Заявление крупным шрифтом: первая фраза — белым, вторая — приглушённо. */
export const mission = {
  label: { tk: "Maksadymyz", ru: "Цели", en: "Mission" },
  strong: {
    tk: "Türkmen dilinde programma üpjünçiligi az.",
    ru: "Программ на туркменском почти нет.",
    en: "There is very little software in Turkmen.",
  },
  rest: {
    tk: "Biz şol boşlugy doldurýarys — okuw taslamalary bilen däl-de, hakykatdan hem goýberilýän programmalar bilen.",
    ru: "Мы заполняем этот пробел — не учебными проектами, а приложениями, которые действительно выходят.",
    en: "We fill that gap — not with tutorial projects, but with apps that really ship.",
  },
};

export const principles = {
  title: { tk: "Ýörelgeler", ru: "Принципы", en: "Principles" },
  items: [
    {
      title: { tk: "Açyk kod", ru: "Открытый код", en: "Open code" },
      text: {
        tk: "Ähli repozitoriýalar açyk: MIT, Apache-2.0 we GPL-3.0. Alyp, üýtgedip we öz işiňde ulanyp bolýar.",
        ru: "Все репозитории публичны: MIT, Apache-2.0 и GPL-3.0. Берите, меняйте, используйте в своей работе.",
        en: "Every repository is public: MIT, Apache-2.0 and GPL-3.0. Take it, change it, use it in your own work.",
      },
    },
    {
      title: { tk: "Mahabatsyz we tölegsiz", ru: "Без рекламы и платежей", en: "No ads, no fees" },
      text: {
        tk: "Dükandaky programmalar mugt, mahabatsyz we hiç hili maglumat ýygnamaýar.",
        ru: "Приложения в магазинах бесплатны, без рекламы и не собирают никаких данных.",
        en: "The apps in the stores are free, have no ads and collect no data at all.",
      },
    },
    {
      title: { tk: "Türkmen dilinde", ru: "На туркменском", en: "In Turkmen" },
      text: {
        tk: "Interfeýs türkmen dilinde. Kod barlagy türkmen we rus dillerinde geçirilýär.",
        ru: "Интерфейс на туркменском языке. Ревью кода — на туркменском и русском.",
        en: "The interface is in Turkmen. Code review is in Turkmen and Russian.",
      },
    },
    {
      // Не «все офлайн»: Köpri для части языковых пар ходит в онлайн-сервисы.
      title: { tk: "Internetsiz hem", ru: "И без интернета", en: "Offline too" },
      text: {
        tk: "Programmalaryň köpüsi internetsiz işleýär. Köpri käbir dil jübütleri üçin onlaýn hyzmatlary ulanýar.",
        ru: "Большинство приложений работают без интернета. Köpri для части языковых пар обращается к онлайн-сервисам.",
        en: "Most apps work without internet. Köpri uses online services for some language pairs.",
      },
    },
  ] satisfies { title: L; text: L }[],
};

export const projects = {
  title: { tk: "Taslamalar", ru: "Проекты", en: "Projects" },
  lead: {
    tk: "Dil öwrediş programmalary we gurallar. Hemmesi açyk, hemmesi GitHub-da.",
    ru: "Приложения для изучения языков и инструменты. Всё открыто, всё на GitHub.",
    en: "Language learning apps and tools. All open, all on GitHub.",
  },
  /** Флагман — первый проект из content/projects.ts (Ykjam Terjime). */
  flagship: { tk: "Esasy taslama", ru: "Флагман", en: "Flagship" },
};

export const people = {
  title: { tk: "Adamlar", ru: "Люди", en: "People" },
  lead: {
    tk: "Şapak Apps — bir adamyň studiýasy däl. Taslamalar dürli awtorlardan gelýär.",
    ru: "Şapak Apps — не студия одного человека. Проекты приходят от разных авторов.",
    en: "Şapak Apps is not one person's studio. Projects come from different authors.",
  },
};

export const contribute = {
  title: {
    tk: "Ilkinji Pull Request-iňi şu ýerde aç",
    ru: "Откройте здесь свой первый pull request",
    en: "Open your first pull request here",
  },
  lead: {
    tk: "Kod barlagy türkmen we rus dillerinde geçirilýär — iňlis diliň gowşak bolsa-da päsgel däl.",
    ru: "Ревью кода проходит на туркменском и русском — слабый английский не помеха.",
    en: "Code review is in Turkmen and Russian — weak English is not a blocker.",
  },
  steps: [
    {
      tk: "Täze gelenler üçin meseleleri aç — olar kiçi we anyk bölünen, ilkinji Pull Request üçin amatly.",
      ru: "Откройте задачи для новичков — они небольшие и чётко очерчены, подходят для первого pull request.",
      en: "Open the issues for newcomers — they are small and clearly scoped, a good place for a first pull request.",
    },
    {
      tk: "Repozitoriýany klonla we onuň README-däki gurnama ädimlerini ýerine ýetir.",
      ru: "Клонируйте репозиторий и выполните шаги установки из его README.",
      en: "Clone the repository and follow the setup steps in its README.",
    },
    {
      tk: "Kiçi Pull Request aç — uly üýtgetmeden gowy.",
      ru: "Откройте небольшой pull request — это лучше одного большого изменения.",
      en: "Open a small pull request — better than one big change.",
    },
  ] satisfies L[],
  promises: [
    { tk: "Her Pull Request-e birnäçe günüň içinde jogap berilýär.", ru: "На каждый pull request отвечаем в течение нескольких дней.", en: "Every pull request gets an answer within a few days." },
    { tk: "Kabul edilen kod indiki goýberilişe düşýär.", ru: "Принятый код попадает в следующий релиз.", en: "Accepted code ships in the next release." },
  ] satisfies L[],
  contactNote: {
    tk: "türkmen, rus ýa-da iňlis dilinde ýazyp bolýar.",
    ru: "можно писать на туркменском, русском или английском.",
    en: "write in Turkmen, Russian or English.",
  },
  newcomerIssues: { tk: "Täze gelenler üçin meseleler →", ru: "Задачи для новичков →", en: "Issues for newcomers →" },
};
