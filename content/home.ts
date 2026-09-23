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

export const hero = {
  eyebrow: "Open Source Turkmenistan",
  title: {
    tk: "Türkmenistanda döredilýän açyk kodly programma üpjünçiligi",
    ru: "Открытое программное обеспечение, созданное в Туркменистане",
    en: "Open-source software built in Turkmenistan",
  },
  lead: {
    tk: "Şapak Apps — türkmen dilinde işleýän, açyk kodly we mugt programmalar döredýän jemgyýet. Kod GitHub-da, programmalar dükanlarda.",
    ru: "Şapak Apps — сообщество, которое создаёт бесплатные программы с открытым кодом на туркменском языке. Код — на GitHub, приложения — в магазинах.",
    en: "Şapak Apps is a community that builds free, open-source software in Turkmen. The code is on GitHub. The apps are in the stores.",
  },
};

/** target: "projects" — страница проектов, иначе якорь на главной. */
export const stats: { value: string; label: L; target: "projects" | "#people" | "#principles"; small?: boolean }[] = [
  { value: "2", target: "projects", label: { tk: "programma dükanlarda", ru: "приложения в магазинах", en: "apps in the stores" } },
  { value: "6", target: "projects", label: { tk: "açyk taslama", ru: "открытых проектов", en: "open projects" } },
  { value: "5", target: "#people", label: { tk: "agza", ru: "участников", en: "members" } },
  { value: "MIT · Apache · GPL", target: "#principles", small: true, label: { tk: "ygtyýarnamalar", ru: "лицензии", en: "licenses" } },
];

export const mission = {
  label: { tk: "Maksadymyz", ru: "Цели", en: "Mission" },
  paragraphs: [
    {
      tk: "Türkmen dilinde programma üpjünçiligi az. Dünýä programmalary iňlis dilinden öwredýär, rus programmalary rus dilinden. Türkmen ulanyjy üçin ýazylany welin az.",
      ru: "Программного обеспечения на туркменском языке почти нет. Мировые приложения учат с английского, российские — с русского. Для туркменоязычного пользователя почти никто не разрабатывает.",
      en: "There is very little software in Turkmen. Global apps teach from English, Russian apps teach from Russian. Almost nobody builds for a Turkmen speaker.",
    },
    {
      tk: "Biz şol boşlugy doldurýarys — okuw taslamalary bilen däl-de, hakykatdan hem goýberilýän programmalar bilen. Ýazan kodyň dükandaky programma düşýär.",
      ru: "Мы заполняем этот пробел — не учебными проектами, а приложениями, которые действительно выходят. Код, который вы пишете, попадает в приложение, которое люди устанавливают.",
      en: "We fill that gap — not with tutorial projects, but with apps that are really released. The code you write ends up in an app people install.",
    },
    {
      tk: "Açyk kod bu ýerde goşmaça däl, ikinji önüm: türkmen dilinde kod barlagy geçirilýän janly programmada ilkinji Pull Request etmäge başga ýer ýok.",
      ru: "Открытый код здесь не дополнение, а второй продукт: больше негде сделать первый pull request в живое приложение с ревью кода на туркменском.",
      en: "Open code here is not an extra, it is the second product: there is no other place to make a first pull request into a live app with code review in Turkmen.",
    },
  ] satisfies L[],
};

export const principles = {
  label: { tk: "Ýörelgeler", ru: "Принципы", en: "Principles" },
  items: [
    {
      title: { tk: "Açyk kod", ru: "Открытый код", en: "Open code" },
      text: {
        tk: "Ähli repozitoriýalar açyk. MIT, Apache-2.0 we GPL-3.0: alyp bolýar, üýtgedip bolýar, öz işiňde ulanyp bolýar.",
        ru: "Все репозитории публичны. MIT, Apache-2.0 и GPL-3.0: берите, меняйте, используйте в своей работе.",
        en: "Every repository is public. MIT, Apache-2.0 and GPL-3.0: take it, change it, use it in your own work.",
      },
    },
    {
      title: { tk: "Internetsiz", ru: "Офлайн", en: "Offline" },
      text: {
        tk: "Programmalaryň hiç biri internet talap etmeýär. Türkmenistanda internet gymmat we haýal — bu tehniki karar hem, garaýyş hem.",
        ru: "Ни одно из приложений не требует сети. Интернет в Туркменистане дорогой и медленный — это и техническое решение, и позиция.",
        en: "None of the apps needs a network. Internet in Turkmenistan is expensive and slow — this is a technical choice and a position.",
      },
    },
    {
      title: { tk: "Mahabatsyz we tölegsiz", ru: "Без рекламы и платежей", en: "No ads, no fees" },
      text: {
        tk: "Dükandaky programmalar mugt, mahabatsyz we hiç hili maglumat ýygnamaýar. Gizlinlik syýasatlary aşakda.",
        ru: "Приложения в магазинах бесплатны, без рекламы и не собирают никаких данных. Политики конфиденциальности — ниже.",
        en: "The apps in the stores are free, without ads, and collect no data at all. Privacy policies are below.",
      },
    },
    {
      title: { tk: "Türkmen dilinde", ru: "На туркменском", en: "In Turkmen" },
      text: {
        tk: "Interfeýs türkmen dilinde. Kod barlagy türkmen we rus dillerinde geçirilýär — iňlis diliň gowşak bolsa-da päsgel däl.",
        ru: "Интерфейс на туркменском языке. Ревью кода проходит на туркменском и русском — слабый английский не помеха.",
        en: "The interface is in Turkmen. Code review is in Turkmen and Russian — weak English is not a blocker.",
      },
    },
  ] satisfies { title: L; text: L }[],
};

export const projectsIntro = {
  label: { tk: "Taslamalar", ru: "Проекты", en: "Projects" },
  paragraphs: [
    {
      tk: "Häzir iki ugur bar. Dil öwrediş programmalary — Ykjam Terjime, Hytaý dili 1, Iňlis dili 1 — we gurallar: Köpri, BluePlayer, Küşt. Hemmesi açyk, hemmesi GitHub-da.",
      ru: "Сегодня два направления. Приложения для изучения языков — Ykjam Terjime, Hytaý dili 1, Iňlis dili 1 — и инструменты: Köpri, BluePlayer, Küşt. Всё открыто, всё на GitHub.",
      en: "There are two lines today. Language learning apps — Ykjam Terjime, Hytaý dili 1, Iňlis dili 1 — and tools: Köpri, BluePlayer, Küşt. All open, all on GitHub.",
    },
    {
      tk: "Esasy ünsümiz dil öwrediş liniýasynda. Hereketlendiriji bir, her täze dil — diňe täze mazmun we täze nyşan, şonuň üçin her indiki programma öňküden çalt çykýar.",
      ru: "Главный фокус — языковая линейка. Движок общий, каждый новый язык — только новый контент и новый значок, поэтому каждое следующее приложение выходит быстрее предыдущего.",
      en: "The main focus is the language line. The engine is shared; each new language is only new content and a new icon, so every next app ships faster than the one before.",
    },
    {
      tk: "Öz açyk kodly taslamaň bar bolsa we ony türkmen jemgyýetiniň içinde ösdürmek isleseň — hat ýaz. Repozitoriý guramanyň astyna geçýär, awtorlyk seniňki bolup galýar.",
      ru: "Если у вас есть проект с открытым кодом и вы хотите развивать его внутри туркменского сообщества — напишите нам. Репозиторий переходит под организацию, авторство остаётся за вами.",
      en: "If you have an open-source project and want to grow it inside the Turkmen community — write to us. The repository moves under the organization, the authorship stays yours.",
    },
  ] satisfies L[],
  allProjects: { tk: "Ähli taslamalar →", ru: "Все проекты →", en: "All projects →" },
};

export const people = {
  label: { tk: "Adamlar", ru: "Люди", en: "People" },
  text: {
    tk: "Şapak Apps — bir adamyň studiýasy däl. Taslamalar dürli awtorlardan gelýär, hemmesi bir guramada we bir düzgün bilen: açyk kod, açyk meseleler, düşnükli dilde barlag.",
    ru: "Şapak Apps — не студия одного человека. Проекты приходят от разных авторов, все в одной организации и по одним правилам: открытый код, открытые задачи, ревью на понятном языке.",
    en: "Şapak Apps is not one person's studio. Projects come from different authors, all in one organization and under the same rules: open code, open issues, review in a language you understand.",
  },
};

export const contribute = {
  label: { tk: "Goşant goşmak", ru: "Участие", en: "Contributing" },
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
  promiseTitle: { tk: "Näme wada berýäris", ru: "Что мы обещаем", en: "What we promise" },
  promises: [
    { tk: "Kod barlagy türkmen we rus dillerinde geçirilýär.", ru: "Ревью кода проходит на туркменском и русском.", en: "Code review is in Turkmen and Russian." },
    { tk: "Her Pull Request-e birnäçe günüň içinde jogap berilýär.", ru: "На каждый pull request отвечаем в течение нескольких дней.", en: "Every pull request gets an answer within a few days." },
    { tk: "Kabul edilen kod indiki goýberilişe düşýär.", ru: "Принятый код попадает в следующий релиз.", en: "Accepted code ships in the next release." },
  ] satisfies L[],
  contactTitle: { tk: "Habarlaşmak", ru: "Контакты", en: "Contact" },
  contactNote: {
    tk: "türkmen, rus ýa-da iňlis dilinde ýazyp bolýar.",
    ru: "можно писать на туркменском, русском или английском.",
    en: "write in Turkmen, Russian or English.",
  },
  newcomerIssues: { tk: "Täze gelenler üçin meseleler →", ru: "Задачи для новичков →", en: "Issues for newcomers →" },
};
