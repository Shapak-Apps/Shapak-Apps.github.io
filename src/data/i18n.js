export const LANGS = [
  { code: 'tk', label: 'Türkmençe', short: 'TK' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'en', label: 'English', short: 'EN' },
]

export const dict = {
  nav: {
    home: { tk: 'Baş sahypa', en: 'Home', ru: 'Главная' },
    mission: { tk: 'Maksadymyz', en: 'Mission', ru: 'Миссия' },
    projects: { tk: 'Taslamalar', en: 'Projects', ru: 'Проекты' },
    people: { tk: 'Adamlar', en: 'People', ru: 'Люди' },
    blog: { tk: 'Blog', en: 'Blog', ru: 'Блог' },
    services: { tk: 'Hyzmatlarymyz', en: 'Our services', ru: 'Наши услуги' },
    contributing: { tk: 'Goşant goşmak', en: 'Contributing', ru: 'Участие' },
  },
  common: {
    menu: { tk: 'Menýu', en: 'Menu', ru: 'Меню' },
    close: { tk: 'Ýap', en: 'Close', ru: 'Закрыть' },
    theme: { tk: 'Tema', en: 'Theme', ru: 'Тема' },
    language: { tk: 'Dil', en: 'Language', ru: 'Язык' },
    light: { tk: 'Açyk', en: 'Light', ru: 'Светлая' },
    dark: { tk: 'Garaňky', en: 'Dark', ru: 'Тёмная' },
    contactUs: { tk: 'Sorag bar bolsa ýazyň:', en: 'Questions? Write to us:', ru: 'Есть вопросы? Напишите:' },
    save: { tk: 'Ýatda sakla', en: 'Save', ru: 'Сохранить' },
    cancel: { tk: 'Ýatyr', en: 'Cancel', ru: 'Отмена' },
    edit: { tk: 'Üýtget', en: 'Edit', ru: 'Изменить' },
    readMore: { tk: 'Doly oka →', en: 'Read more →', ru: 'Читать →' },
  },
  hero: {
    kicker: { tk: 'Açyk çeşme, Türkmenistan', en: 'Open source, Turkmenistan', ru: 'Открытый код, Туркменистан' },
    title: {
      tk: 'Türkmenistanda döredilýän açyk kodly programma üpjünçiligi',
      en: 'Open-source software, built in Turkmenistan',
      ru: 'Открытое ПО, созданное в Туркменистане',
    },
    lead: {
      tk: 'Şapak Apps — türkmen dilinde işleýän, açyk kodly we mugt programmalar döredýän jemgyýet. Kod GitHub-da, programmalar dükanlarda.',
      en: 'Şapak Apps is a community building free, open-source software that speaks Turkmen. Code lives on GitHub, apps live in the stores.',
      ru: 'Şapak Apps — сообщество, создающее бесплатные программы с открытым кодом на туркменском языке.',
    },
    ctaProjects: { tk: 'Taslamalara serediň', en: 'Browse projects', ru: 'Смотреть проекты' },
    ctaGithub: { tk: 'GitHub-da görüň', en: 'View on GitHub', ru: 'Открыть на GitHub' },
    statApps: { tk: 'programma dükanlarda', en: 'apps in the stores', ru: 'приложения в магазинах' },
    statProjects: { tk: 'açyk taslama', en: 'open projects', ru: 'открытых проектов' },
    statMembers: { tk: 'agza', en: 'members', ru: 'участника' },
    statLicenses: { tk: 'ygtyýarnamalar', en: 'licenses', ru: 'лицензии' },
  },
  mission: {
    label: { tk: 'Maksadymyz', en: 'Mission', ru: 'Миссия' },
    p1: {
      tk: 'Türkmen dilinde programma üpjünçiligi az. Dünýä programmalary iňlis dilinden öwredýär, rus programmalary rus dilinden. Türkmen ulanyjy üçin ýazylany welin az.',
      en: "There isn't much software in Turkmen. The world's apps teach you English, Russian apps teach you Russian — very little is written for a Turkmen-speaking user.",
      ru: 'На туркменском языке программ мало. Мировые приложения учат английскому, российские — русскому. Для туркменоязычного пользователя написано слишком мало.',
    },
    p2: {
      tk: 'Biz şol boşlugy doldurýarys — okuw taslamalary bilen däl-de, hakykatdan hem goýberilýän programmalar bilen. Ýazan kodyň dükandaky programma düşýär.',
      en: "We're filling that gap — not with training exercises, but with software people actually ship. The code you write ends up in the app in the store.",
      ru: 'Мы заполняем этот пробел — не учебными макетами, а программами, которые реально выходят в релиз. Написанный вами код попадает в приложение в магазине.',
    },
    p3: {
      tk: 'Açyk kod bu ýerde goşmaça däl, ikinji önüm: türkmen dilinde kod barlagy geçirilýän janly programmada ilkinji Pull Request etmäge başga ýer ýok.',
      en: "Open source isn't an afterthought here, it's the product: there's nowhere else to open your first pull request against a live app with code review in Turkmen.",
      ru: 'Открытый код здесь не довесок, а сама суть продукта: больше негде открыть свой первый Pull Request в живом приложении с код-ревью на туркменском.',
    },
  },
  principles: {
    label: { tk: 'Ýörelgeler', en: 'Principles', ru: 'Принципы' },
    heading: {
      tk: 'Dört zat, hiç haçan üýtgemeýän',
      en: 'Four things that never move',
      ru: 'Четыре правила, которые не меняются',
    },
    items: [
      {
        title: { tk: 'Açyk kod', en: 'Open code', ru: 'Открытый код' },
        body: {
          tk: 'Ähli repozitoriýalar açyk. MIT, Apache-2.0 we GPL-3.0: alyp bolýar, üýtgedip bolýar, öz işiňde ulanyp bolýar.',
          en: 'Every repository is public. MIT, Apache-2.0 and GPL-3.0: take it, change it, use it in your own work.',
          ru: 'Все репозитории публичны. MIT, Apache-2.0 и GPL-3.0: берите, меняйте, используйте в своей работе.',
        },
      },
      {
        title: { tk: 'Internetsiz', en: 'Offline-first', ru: 'Без интернета' },
        body: {
          tk: 'Programmalaryň hiç biri internet talap etmeýär. Türkmenistanda internet gymmat we haýal — bu tehniki karar hem, garaýyş hem.',
          en: "None of the apps need a live connection. Internet in Turkmenistan is expensive and slow — that's a technical choice here, and a position.",
          ru: 'Ни одно из приложений не требует сети. Интернет в Туркменистане дорогой и медленный — это и техническое решение, и позиция.',
        },
      },
      {
        title: { tk: 'Mahabatsyz we tölegsiz', en: 'No ads, no cost', ru: 'Без рекламы и оплаты' },
        body: {
          tk: 'Dükandaky programmalar mugt, mahabatsyz we hiç hili maglumat ýygnamaýar. Gizlinlik syýasatlary aşakda.',
          en: 'Apps in the store are free, carry no ads and collect no data. Privacy policies are linked in the footer.',
          ru: 'Приложения в магазине бесплатны, без рекламы и без сбора данных. Политика конфиденциальности — в подвале сайта.',
        },
      },
      {
        title: { tk: 'Türkmen dilinde', en: 'In Turkmen', ru: 'На туркменском' },
        body: {
          tk: 'Interfeýs türkmen dilinde. Kod barlagy türkmen we rus dillerinde geçirilýär — iňlis diliň gowşak bolsa-da päsgel däl.',
          en: 'The interface is in Turkmen. Code review runs in Turkmen and Russian — weaker English is never a blocker.',
          ru: 'Интерфейс на туркменском. Код-ревью проходит на туркменском и русском — слабый английский не помеха.',
        },
      },
    ],
  },
  projects: {
    label: { tk: 'Taslamalar', en: 'Projects', ru: 'Проекты' },
    heading: {
      tk: 'Alty açyk taslama, iki ugur',
      en: 'Six open projects, two directions',
      ru: 'Шесть открытых проектов, два направления',
    },
    editHint: {
      tk: 'Agza bolsaň, kartdaky galam belligine bas — ady, suraty, beýany we kategoriýany üýtgedip bilersiň (brauzeriňde ýatda saklanýar).',
      en: 'If you\'re a member, tap the pencil on a card — edit its name, image, description and category (saved in this browser).',
      ru: 'Если вы участник — нажмите карандаш на карточке: имя, фото, описание и категория (сохраняется в этом браузере).',
    },
    resetAll: {
      tk: 'Ähli üýtgeşmeleri asyl ýagdaýyna gaýtar',
      en: 'Reset all edits',
      ru: 'Сбросить все изменения',
    },
    modalTitle: { tk: 'Taslamany üýtget', en: 'Edit project', ru: 'Изменить проект' },
    fieldImage: { tk: 'Nyşan / surat', en: 'Badge / image', ru: 'Значок / фото' },
    changeImage: { tk: 'Suraty çalyş', en: 'Change image', ru: 'Заменить фото' },
    fieldName: { tk: 'Ady', en: 'Name', ru: 'Название' },
    fieldDesc: { tk: 'Beýany', en: 'Description', ru: 'Описание' },
    fieldCategory: { tk: 'Kategoriýa', en: 'Category', ru: 'Категория' },
  },
  people: {
    label: { tk: 'Adamlar', en: 'People', ru: 'Люди' },
    heading: {
      tk: 'Bir adamyň taslamasy däl',
      en: "Not one person's project",
      ru: 'Это не проект одного человека',
    },
  },
  cta: {
    heading: {
      tk: 'Öz taslamaňy getir, ýa-da bize goşul',
      en: 'Bring your own project, or join ours',
      ru: 'Приносите свой проект — или присоединяйтесь',
    },
    body: {
      tk: 'Kiçi Pull Request aç — uly üýtgetmeden gowy. Her Pull Request-e birnäçe günüň içinde jogap berilýär.',
      en: 'Open a small pull request — it beats a big one. Every pull request gets a reply within a few days.',
      ru: 'Откройте небольшой Pull Request — это лучше большого. На каждый отвечают в течение нескольких дней.',
    },
    button: { tk: 'GitHub-da gurama', en: 'Open the org on GitHub', ru: 'Открыть организацию' },
  },
  blog: {
    title: { tk: 'Blog', en: 'Blog', ru: 'Блог' },
    lead: {
      tk: 'Taslamalaryň ösüşi, täze agzalar we jemgyýetden habarlar.',
      en: 'Project progress, new members and community news.',
      ru: 'Прогресс проектов, новые участники и новости сообщества.',
    },
  },
  services: {
    title: { tk: 'Hyzmatlarymyz', en: 'Our services', ru: 'Наши услуги' },
    lead: {
      tk: 'Şapak Apps agzalary iş teklibine açyk. Ugruňyza görä birini saýlaň we göni habarlaşyň — GitHub, portfolio ýa-da e-poçta arkaly.',
      en: 'Şapak Apps members are open to work. Pick someone by focus area and reach out directly — via GitHub, portfolio or email.',
      ru: 'Участники Şapak Apps открыты для работы. Выберите специалиста и свяжитесь напрямую — через GitHub, портфолио или почту.',
    },
    getInTouch: { tk: 'Habarlaş', en: 'Get in touch', ru: 'Написать' },
    portfolio: { tk: 'Portfolio', en: 'Portfolio', ru: 'Портфолио' },
  },
  footer: {
    rights: { tk: '© 2026 Şapak Apps · Türkmenistan', en: '© 2026 Şapak Apps · Turkmenistan', ru: '© 2026 Şapak Apps · Туркменистан' },
  },
  notFound: {
    title: { tk: 'Sahypa tapylmady', en: 'Page not found', ru: 'Страница не найдена' },
    body: {
      tk: 'Gözleýän sahypaň ýok ýa-da göçürildi.',
      en: "The page you're looking for doesn't exist or has moved.",
      ru: 'Страница не существует или была перемещена.',
    },
    back: { tk: 'Baş sahypa gaýt', en: 'Back home', ru: 'На главную' },
  },
}
