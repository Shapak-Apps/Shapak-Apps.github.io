import type { L } from "@/lib/i18n";

export type Project = {
  name: string;
  /** Иконка из public/assets/. */
  icon: string;
  /** Репозиторий в Shapak-Apps — ссылка на GitHub и счётчик звёзд. */
  repo: string;
  status: { live: boolean; text: L };
  text: L;
  /** Плашки: строка одинакова на всех языках, L — переводится. */
  nums: (string | L)[];
  stack: string;
  author: string;
  /** Ссылки перед GitHub: сторы, веб-версия. */
  links?: { label: string; href: string }[];
};

const IN_DEVELOPMENT: L = { tk: "Taýýarlanýar", ru: "В разработке", en: "In development" };

export const meta = {
  title: { tk: "Taslamalar — Şapak Apps", ru: "Проекты — Şapak Apps", en: "Projects — Şapak Apps" },
  description: {
    tk: "Şapak Apps-yň açyk taslamalary: Ykjam Terjime, Hytaý dili 1, Iňlis dili 1, Köpri, BluePlayer, Küşt. Kod GitHub-da, MIT, Apache-2.0 we GPL-3.0.",
    ru: "Открытые проекты Şapak Apps: Ykjam Terjime, Hytaý dili 1, Iňlis dili 1, Köpri, BluePlayer, Küşt. Код на GitHub, MIT, Apache-2.0 и GPL-3.0.",
    en: "Open-source projects by Şapak Apps: Ykjam Terjime, Hytaý dili 1, Iňlis dili 1, Köpri, BluePlayer, Küşt. Apps in Turkmen, code on GitHub. MIT, Apache-2.0 and GPL-3.0.",
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
    tk: "Alty açyk taslama, iki ugur. Ikisi dükanlarda, hemmesi GitHub-da. Her biriniň öz awtory, ygtyýarnamasy we açyk meseleleri bar.",
    ru: "Шесть открытых проектов в двух направлениях. Два — в магазинах, все — на GitHub. У каждого свой автор, лицензия и открытые задачи.",
    en: "Six open projects in two lines. Two are in the stores, all are on GitHub. Each has its own author, license and open issues.",
  },
};

export const giveStar: L = { tk: "Ýyldyz ber", ru: "Поставить звезду", en: "Give a star" };

export const groups: { title: L; projects: Project[] }[] = [
  {
    title: { tk: "Dil öwrenmek", ru: "Изучение языков", en: "Language learning" },
    projects: [
      {
        name: "Ykjam Terjime",
        icon: "/assets/ykjam-terjime.png",
        repo: "turkmen-phrasebook",
        status: { live: true, text: { tk: "Dükanlarda", ru: "В магазинах", en: "In the stores" } },
        text: {
          tk: "Türkmen gepleşik kitaby we terjimeçi. Hakyky ýagdaýlar üçin taýýar sözlemler, türkmen harplary klawiaturasyz. Web wersiýasy brauzerde açylýar.",
          ru: "Туркменский разговорник и переводчик. Готовые фразы для реальных ситуаций, туркменские буквы без специальной клавиатуры. Веб-версия открывается в браузере.",
          en: "Turkmen phrasebook and translator. Ready phrases for real situations, Turkmen letters without a special keyboard. The web version opens in the browser.",
        },
        nums: [{ tk: "31 dil", ru: "31 язык", en: "31 languages" }, { tk: "internetsiz", ru: "офлайн", en: "offline" }, "MIT"],
        stack: "React Native · Expo · TypeScript",
        author: "TheSeydiCharyyev",
        links: [
          { label: "App Store", href: "https://apps.apple.com/app/ykjam-terjime/id6758071845" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.shapak.translator" },
          // Отдельный репозиторий Shapak-Apps/ykjam-terjime со своим Pages.
          { label: "Web", href: "https://shapak-apps.github.io/ykjam-terjime/" },
        ],
      },
      {
        name: "Hytaý dili 1",
        icon: "/assets/hytay-dili-1.png",
        repo: "turkmen-chinese",
        status: {
          live: true,
          text: { tk: "App Store-da · Google Play ýakynda", ru: "В App Store · скоро в Google Play", en: "On the App Store · Google Play soon" },
        },
        text: {
          tk: "Türkmen dilinden hytaý dili. Her bapda teoriýa, gönükmeler we synag; indiki bap synagdan soň açylýar. Doly oflaýn.",
          ru: "Китайский с туркменского. В каждой главе теория, упражнения и экзамен; следующая глава открывается после экзамена. Полностью офлайн.",
          en: "Chinese from Turkmen. Every chapter has theory, exercises and an exam; the next chapter opens after the exam. Fully offline.",
        },
        nums: [{ tk: "31 bap", ru: "31 глава", en: "31 chapters" }, { tk: "600 gönükme", ru: "600 упражнений", en: "600 exercises" }, "MIT"],
        stack: "React Native · Expo · TypeScript",
        author: "TheSeydiCharyyev",
        links: [{ label: "App Store", href: "https://apps.apple.com/app/id6801010061" }],
      },
      {
        name: "Iňlis dili 1",
        icon: "/assets/inlis-dili-1.png",
        repo: "turkmen-english",
        status: { live: false, text: IN_DEVELOPMENT },
        text: {
          tk: "Türkmen dilinden iňlis dili, A1 derejesi. Hytaý dili 1 bilen bir hereketlendirijide: şol bir baplar, synaglar we ösüş.",
          ru: "Английский с туркменского, уровень A1. Тот же движок, что у Hytaý dili 1: те же главы, экзамены и прогресс.",
          en: "English from Turkmen, level A1. Same engine as Hytaý dili 1: the same chapters, exams and progress.",
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
        name: "Köpri",
        icon: "/assets/kopri.png",
        repo: "K-pri-App-for-phone",
        status: { live: false, text: IN_DEVELOPMENT },
        text: {
          tk: "Android üçin oflaýn terjimeçi: rus we iňlis dillerinden türkmen diline oflaýn sözlük, beýleki jübütler üçin onlaýn hyzmatlar, uly köpdilli gepleşik kitaby. Kamera arkaly terjime taýýarlanýar.",
          ru: "Офлайн-переводчик для Android: офлайн-словарь с русского и английского на туркменский, онлайн-сервисы для остальных пар, большой многоязычный разговорник. Готовится перевод через камеру.",
          en: "Offline translator for Android: an offline dictionary from Russian and English to Turkmen, online services for other pairs, a large multilingual phrasebook. Camera translation is coming.",
        },
        nums: [{ tk: "50+ dil", ru: "50+ языков", en: "50+ languages" }, "Apache-2.0"],
        stack: "Flutter · Dart",
        author: "aynazar-sylyyew-dev",
      },
      {
        name: "BluePlayer",
        icon: "/assets/blueplayer.png",
        repo: "BluePlayer",
        status: { live: false, text: IN_DEVELOPMENT },
        text: {
          tk: "Android üçin döwrebap aýdym pleýeri. Kotlin we natiw C++.",
          ru: "Современный музыкальный плеер для Android. Kotlin и нативный C++.",
          en: "Modern music player for Android. Kotlin and native C++.",
        },
        nums: ["Kotlin", "C++", "Apache-2.0"],
        stack: "Android",
        author: "aynazar-sylyyew-dev",
      },
      {
        name: "Küşt",
        icon: "/assets/kust.png",
        repo: "kust",
        status: { live: false, text: IN_DEVELOPMENT },
        text: {
          tk: "Küşt öwrenmek, türgenleşmek we oýnamak üçin programma. Stockfish botlaryna garşy oýun, oýundan soň derňew: her göçüm bahalandyrylýar we düşündirilýär.",
          ru: "Шахматное приложение: учиться, тренироваться, играть. Партии против ботов на Stockfish и разбор после игры: каждый ход оценивается и объясняется.",
          en: "A chess app to learn, practice and play. Games against Stockfish bots, and post-game analysis: every move is classified and explained.",
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
