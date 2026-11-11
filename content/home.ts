import type { L } from "@/lib/i18n";

export const meta = {
  title: {
    tk: "Şapak Apps — Open Source Turkmenistan",
    ru: "Şapak Apps — Open Source Turkmenistan",
    en: "Şapak Apps — Open Source Turkmenistan",
  },
  description: {
    tk: "Türkmenistanyň açyk kod jemgyýeti: bilelikde mugt programmalar döredýäris, täze gelenler ilkinji Pull Request-ini şu ýerde açýarlar.",
    ru: "Сообщество open source в Туркменистане: вместе делаем бесплатные приложения, новички открывают здесь свой первый pull request.",
    en: "The open-source community of Turkmenistan: we build free apps together, and newcomers open their first pull request here.",
  },
  ogTitle: "Open Source Turkmenistan",
} satisfies Record<string, L | string>;

/** Первый экран — как баннер организации; с 11.11 строка — про сообщество (Open Source Turkmenistan Community). */
export const hero = {
  title: "Open Source Turkmenistan",
  lead: {
    tk: "Türkmenistanyň açyk kod jemgyýeti. Bilelikde mugt programmalar döredýäris we täze gelenlere ilkinji Pull Request-ini açmaga kömek edýäris.",
    ru: "Сообщество open source в Туркменистане. Вместе делаем бесплатные программы и помогаем новичкам открыть первый pull request.",
    en: "The open-source community of Turkmenistan. We build free software together and help newcomers open their first pull request.",
  },
  allProjects: { tk: "Ähli taslamalar →", ru: "Все проекты →", en: "All projects →" },
  /** Подпись стрелки «листай» внизу первого экрана (для экранных дикторов). */
  scrollCue: { tk: "Aşak", ru: "Вниз", en: "Scroll down" },
};

/** Заявление крупным шрифтом: первая фраза — белым, вторая — приглушённо. */
export const mission = {
  label: { tk: "Maksadymyz", ru: "Цели", en: "Mission" },
  strong: {
    tk: "Türkmenistanda açyk kod az, ony öwrenmek üçin ýer hem az.",
    ru: "В Туркменистане мало open source — и мало мест, где ему можно научиться.",
    en: "There is little open source in Turkmenistan — and few places to learn it.",
  },
  rest: {
    tk: "Biz muny üýtgedýäris: hakyky programmalary bilelikde döredýäris, täze gelenler bolsa ilkinji goşantlaryny şu ýerde goşýarlar.",
    ru: "Мы это меняем: вместе делаем настоящие приложения, а новички вносят сюда свой первый вклад.",
    en: "We are changing that: we build real apps together, and newcomers make their first contribution here.",
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
      title: { tk: "Täze gelenlere ýol", ru: "Путь для новичка", en: "A way in for newcomers" },
      text: {
        tk: "Ilkinji Pull Request üçin kiçi meseleler bar. Kod barlagy türkmen we rus dillerinde geçirilýär.",
        ru: "Есть небольшие задачи для первого pull request. Ревью кода — на туркменском и русском.",
        en: "There are small issues for your first pull request. Code review is in Turkmen and Russian.",
      },
    },
    {
      title: { tk: "Hakyky programmalar", ru: "Настоящие приложения", en: "Real apps" },
      // Туркменский интерфейс есть у всех пяти (сверено 11.11): Köpri tk/ru/en/tr, Küşt tk/ru/en, Ykjam — 5 языков, Hytaý и Iňlis — целиком.
      text: {
        tk: "Gatnaşyjylaryň kody adamlaryň dükanlardan ýükleýän programmalaryna düşýär. Her programmada türkmen dilinde interfeýs bar.",
        ru: "Код участников попадает в приложения, которые люди скачивают из магазинов. В каждом приложении есть туркменский интерфейс.",
        en: "Contributors' code goes into apps that people download from the stores. Every app has a Turkmen interface.",
      },
    },
    {
      title: { tk: "Mugt we mahabatsyz", ru: "Бесплатно и без рекламы", en: "Free, no ads" },
      // Не «никаких данных» и не «только отчёты о сбоях»: у Köpri (в RuStore) по его же политике уходят
      // отчёты о сбоях (Firebase Crashlytics) и текст онлайн-перевода (Google Translate, Lingva, MyMemory).
      text: {
        tk: "Dükandaky programmalar mugt we mahabatsyz. Şahsy maglumat ýygnamaýar. Köpri näsazlyk hasabatlaryny iberýär, onlaýn terjime üçin tekst bolsa onlaýn hyzmatlara gidýär.",
        ru: "Приложения в магазинах бесплатны и без рекламы. Личные данные не собирают. Köpri отправляет отчёты о сбоях, а текст для онлайн-перевода уходит в онлайн-сервисы.",
        en: "The apps in the stores are free and have no ads. They collect no personal data. Köpri sends crash reports, and text for online translation goes to online services.",
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
  // «Большинство — студенты с первым PR» — из README org (profile/README.md, текст юзера).
  lead: {
    tk: "Guramanyň agzalary. Gatnaşyjylaryň köpüsi — ilkinji Pull Request-ini açýan talyplar.",
    ru: "Участники организации. Большинство контрибьюторов — студенты, которые открывают свой первый pull request.",
    en: "Members of the organization. Most contributors are students opening their first pull request.",
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
