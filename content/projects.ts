import type { L } from "@/lib/i18n";

export type Project = {
  /** Якорь карточки на /projects/ — на него ведут иконки с главной. */
  id: string;
  name: string;
  /** Иконка из public/assets/. */
  icon: string;
  /** Репозиторий в Shapak-Apps — ссылка на GitHub и счётчик звёзд. */
  repo: string;
  /** short — подпись под иконкой на главной, если text длинный. */
  status: { live: boolean; text: L; short?: L };
  text: L;
  /** Плашки: строка одинакова на всех языках, L — переводится. */
  nums: (string | L)[];
  stack: string;
  author: string;
  /** Ссылки перед GitHub: сторы, веб-версия. */
  links?: { label: string; href: string }[];
};

const IN_DEVELOPMENT: L = { tk: "Taýýarlanýar", ru: "В разработке", en: "In development" };
const IN_THE_STORES: L = { tk: "Dükanlarda", ru: "В магазинах", en: "In the stores" };

export const meta = {
  title: { tk: "Taslamalar — Şapak Apps", ru: "Проекты — Şapak Apps", en: "Projects — Şapak Apps" },
  description: {
    tk: "Şapak Apps-yň açyk taslamalary: Ykjam Terjime, Hytaý dili 1, Iňlis dili 1, Köpri, Küşt. Kod GitHub-da, MIT, Apache-2.0 we GPL-3.0.",
    ru: "Открытые проекты Şapak Apps: Ykjam Terjime, Hytaý dili 1, Iňlis dili 1, Köpri, Küşt. Код на GitHub, MIT, Apache-2.0 и GPL-3.0.",
    en: "Open-source projects by Şapak Apps: Ykjam Terjime, Hytaý dili 1, Iňlis dili 1, Köpri, Küşt. Apps in Turkmen, code on GitHub. MIT, Apache-2.0 and GPL-3.0.",
  },
  ogTitle: {
    tk: "Taslamalar — Open Source Turkmenistan",
    ru: "Проекты — Open Source Turkmenistan",
    en: "Projects — Open Source Turkmenistan",
  },
} satisfies Record<string, L>;

export const hero = {
  eyebrow: "Open Source Turkmenistan",
  title: { tk: "Taslamalar", ru: "Проекты", en: "Projects" },
  lead: {
    tk: "Bäş açyk taslama, iki ugur. Üçüsi dükanlarda, hemmesi GitHub-da. Her biriniň öz awtory we ygtyýarnamasy bar.",
    ru: "Пять открытых проектов в двух направлениях. Три — в магазинах, все — на GitHub. У каждого свой автор и лицензия.",
    en: "Five open projects in two lines. Three are in the stores, all are on GitHub. Each has its own author and license.",
  },
};

export const giveStar: L = { tk: "Ýyldyz ber", ru: "Поставить звезду", en: "Give a star" };

export const groups: { title: L; projects: Project[] }[] = [
  {
    title: { tk: "Dil öwrenmek", ru: "Изучение языков", en: "Language learning" },
    projects: [
      {
        id: "ykjam-terjime",
        name: "Ykjam Terjime",
        icon: "/assets/ykjam-terjime.png",
        repo: "turkmen-phrasebook",
        status: { live: true, text: IN_THE_STORES },
        // По README 2.0.0. Сайт Shapak-Apps/ykjam-terjime пока внутренний (noindex) — ссылку не ставим.
        text: {
          tk: "Türkmen gepleşik kitaby: hakyky ýagdaýlar üçin dialoglar we «ekrany görkez» režimi. Türkmen dili hytaý, iňlis ýa-da rus dilleri bilen jübütde.",
          ru: "Туркменский разговорник: диалоги для реальных ситуаций и режим «покажи экран». Туркменский в паре с китайским, английским или русским.",
          en: "Turkmen phrasebook: dialogues for real situations and a “show the screen” mode. Turkmen is paired with Chinese, English or Russian.",
        },
        nums: [
          { tk: "3 dil jübüti", ru: "3 языковые пары", en: "3 language pairs" },
          { tk: "internetsiz", ru: "офлайн", en: "offline" },
          "MIT",
        ],
        stack: "React Native · Expo · TypeScript",
        author: "TheSeydiCharyyev",
        links: [
          { label: "App Store", href: "https://apps.apple.com/app/ykjam-terjime/id6758071845" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.shapak.translator" },
        ],
      },
      {
        id: "hytay-dili-1",
        name: "Hytaý dili 1",
        icon: "/assets/hytay-dili-1.png",
        repo: "turkmen-chinese",
        status: { live: true, text: IN_THE_STORES },
        // Про офлайн — как в самом приложении (about-app.tsx): аудио произношения стримится из сети.
        text: {
          tk: "Türkmen dilinden hytaý dili. Her bapda teoriýa, gönükmeler we synag; indiki bap synagdan soň açylýar. Esasan oflaýn: internet diňe aýdylyş seslerini diňlemek üçin gerek bolup biler.",
          ru: "Китайский с туркменского. В каждой главе теория, упражнения и экзамен; следующая глава открывается после экзамена. В основном офлайн: интернет может понадобиться только для звука произношения.",
          en: "Chinese from Turkmen. Every chapter has theory, exercises and an exam; the next chapter opens after the exam. Mostly offline: internet may be needed only for pronunciation audio.",
        },
        nums: [{ tk: "31 bap", ru: "31 глава", en: "31 chapters" }, { tk: "600 gönükme", ru: "600 упражнений", en: "600 exercises" }, "MIT"],
        stack: "React Native · Expo · TypeScript",
        author: "TheSeydiCharyyev",
        links: [
          { label: "App Store", href: "https://apps.apple.com/app/id6801010061" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.turkmenlearn.chinese" },
        ],
      },
      {
        id: "inlis-dili-1",
        name: "Iňlis dili 1",
        icon: "/assets/inlis-dili-1.png",
        repo: "turkmen-english",
        status: { live: false, text: IN_DEVELOPMENT },
        text: {
          tk: "Türkmen dilinden iňlis dili, A1 derejesi. Hytaý dili 1 ýaly gurluş: baplar, synaglar we ösüş.",
          ru: "Английский с туркменского, уровень A1. Устроен как Hytaý dili 1: главы, экзамены и прогресс.",
          en: "English from Turkmen, level A1. Built like Hytaý dili 1: chapters, exams and progress.",
        },
        nums: ["A1", { tk: "20 bap", ru: "20 глав", en: "20 chapters" }, "MIT"],
        stack: "React Native · Expo · TypeScript",
        author: "TheSeydiCharyyev",
      },
    ],
  },
  {
    title: { tk: "Gurallar", ru: "Инструменты", en: "Tools" },
    projects: [
      {
        id: "kopri",
        name: "Köpri",
        icon: "/assets/kopri.png",
        repo: "K-pri-App-for-phone",
        // В RuStore (на 08.11.2026 — 1.0.2, com.kopri.translator); в Google Play нет.
        status: { live: true, text: { tk: "RuStore-da", ru: "В RuStore", en: "On RuStore" } },
        text: {
          tk: "Android üçin oflaýn terjimeçi: rus we iňlis dillerinden türkmen diline oflaýn sözlük, beýleki jübütler üçin onlaýn hyzmatlar, uly köpdilli gepleşik kitaby. Kamera arkaly terjime taýýarlanýar.",
          ru: "Офлайн-переводчик для Android: офлайн-словарь с русского и английского на туркменский, онлайн-сервисы для остальных пар, большой многоязычный разговорник. Готовится перевод через камеру.",
          en: "Offline translator for Android: an offline dictionary from Russian and English to Turkmen, online services for other pairs, a large multilingual phrasebook. Camera translation is coming.",
        },
        nums: [{ tk: "50+ dil", ru: "50+ языков", en: "50+ languages" }, "Apache-2.0"],
        stack: "Flutter · Dart",
        author: "aynazar-sylyyew-dev",
        links: [{ label: "RuStore", href: "https://www.rustore.ru/catalog/app/com.kopri.translator" }],
      },
      {
        id: "kust",
        name: "Küşt",
        icon: "/assets/kust.png",
        repo: "kust",
        status: { live: false, text: IN_DEVELOPMENT },
        text: {
          tk: "Küşt öwrenmek, türgenleşmek we oýnamak üçin programma. Stockfish botlaryna garşy ýa-da ikiçäk oýun, wagt kontroly, maslahatlar we göçümi yzyna almak, reýting.",
          ru: "Шахматное приложение: учиться, тренироваться, играть. Партии против ботов на Stockfish и вдвоём, контроль времени, подсказки и отмена хода, рейтинг.",
          en: "A chess app to learn, practice and play. Games against Stockfish bots or with a friend, time control, hints and undo, rating.",
        },
        nums: ["Stockfish", "GPL-3.0"],
        stack: "Flutter · Dart",
        author: "fihdeveloper",
      },
    ],
  },
];

export const after = {
  text: {
    tk: "Öz açyk kodly taslamaň bar bolsa we ony türkmen jemgyýetiniň içinde ösdürmek isleseň — hat ýaz. Repozitoriý guramanyň astyna geçýär, awtorlyk seniňki bolup galýar.",
    ru: "Если у вас есть проект с открытым кодом и вы хотите развивать его внутри туркменского сообщества — напишите нам. Репозиторий переходит под организацию, авторство остаётся за вами.",
    en: "If you have an open-source project and want to grow it inside the Turkmen community — write to us. The repository moves under the organization, the authorship stays yours.",
  },
};

/** Все проекты подряд — для ряда иконок на главной. */
export const allProjects: Project[] = groups.flatMap((g) => g.projects);

const UNDER_DISCUSSION: L = { tk: "Maslahatlaşylýar", ru: "Обсуждается", en: "Under discussion" };

/**
 * Курс в обсуждении: репо-витрина с Discussions, кода ещё нет. Карточка того же вида, что у проектов.
 * Текст — по README курсов. «Полностью офлайн» из README не переносим (см. Hytaý dili 1).
 * Иконка — уменьшенный логотип из HQ/brand, не перерисован.
 */
function course(slug: string, repo: string, name: string, language: L): Project {
  return {
    id: `${slug}-dili-1`,
    name,
    icon: `/assets/${slug}-dili-1.png`,
    repo,
    status: { live: false, text: UNDER_DISCUSSION },
    text: {
      tk: `Türkmen dilinden ${language.tk}. Hytaý dili 1 bilen şol bir binýat: baplar, synaglar we ösüş. Häzir pikirler ýygnalýar: haýsy okuw kitaby esas bolmaly, haýsy temalar gerek.`,
      ru: `${language.ru} с туркменского. Та же основа, что у Hytaý dili 1: главы, экзамены и прогресс. Сейчас собираем идеи: на каком учебнике строить курс и какие темы нужны.`,
      en: `${language.en} from Turkmen. Same base as Hytaý dili 1: chapters, exams and progress. We are collecting ideas now: which textbook to use and which topics are needed.`,
    },
    nums: ["MIT"],
    stack: "React Native · Expo · TypeScript",
    author: "TheSeydiCharyyev",
    links: [{ label: "Discussions", href: `https://github.com/Shapak-Apps/${repo}/discussions` }],
  };
}

/** Следующие языки — в порядке очереди (решение 10.08.2026). На главной — мелким рядом, на /projects/ — карточками. */
export const upcoming = {
  title: { tk: "Indiki diller", ru: "Следующие языки", en: "Next languages" },
  status: UNDER_DISCUSSION,
  lead: {
    tk: "Maslahatlaşylýar — pikiriňi Discussions-da ýaz.",
    ru: "Обсуждается — напишите свои идеи в Discussions.",
    en: "Under discussion — share your ideas in Discussions.",
  },
  items: [
    course("rus", "turkmen-russian", "Rus dili 1", { tk: "rus dili", ru: "Русский", en: "Russian" }),
    course("nemes", "turkmen-german", "Nemes dili 1", { tk: "nemes dili", ru: "Немецкий", en: "German" }),
    course("fransuz", "turkmen-french", "Fransuz dili 1", { tk: "fransuz dili", ru: "Французский", en: "French" }),
    course("yapon", "turkmen-japanese", "Ýapon dili 1", { tk: "ýapon dili", ru: "Японский", en: "Japanese" }),
    course("korey", "turkmen-korean", "Koreý dili 1", { tk: "koreý dili", ru: "Корейский", en: "Korean" }),
    course("arap", "turkmen-arabic", "Arap dili 1", { tk: "arap dili", ru: "Арабский", en: "Arabic" }),
    course("pars", "turkmen-persian", "Pars dili 1", { tk: "pars dili", ru: "Персидский", en: "Persian" }),
  ],
};
