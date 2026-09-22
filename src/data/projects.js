// Taslamalar. Täze taslama goşmak üçin şu massiwe obýekt goş we Pull Request aç.
export const projects = [
  {
    id: 'ykjam-terjime',
    category: 'lang',
    badgeColor: '#2F8FE0',
    badgeText: 'YT',
    status: 'live',
    name: { tk: 'Ykjam Terjime', en: 'Ykjam Terjime', ru: 'Ykjam Terjime' },
    desc: {
      tk: 'Türkmen gepleşik kitaby we terjimeçi. Taýýar sözlemler, türkmen harplary klawiaturasyz.',
      en: 'A Turkmen phrasebook and translator, with ready-made phrases and no special keyboard needed.',
      ru: 'Туркменский разговорник и переводчик с готовыми фразами, без специальной раскладки.',
    },
    tags: ['React Native', 'Expo', 'TypeScript'],
    repo: 'https://github.com/Shapak-Apps',
  },
  {
    id: 'hytay-dili-1',
    category: 'lang',
    badgeColor: '#D33B3B',
    badgeText: '中',
    status: 'soon',
    name: { tk: 'Hytaý dili 1', en: 'Hytaý dili 1', ru: 'Hytaý dili 1' },
    desc: {
      tk: 'Türkmen dilinden hytaý dili. Her bapda teoriýa, gönükme we synag. Doly oflaýn.',
      en: 'Chinese, taught from Turkmen. Theory, exercises and a quiz in every unit. Fully offline.',
      ru: 'Китайский с туркменского. Теория, упражнения и тест в каждом разделе. Полностью офлайн.',
    },
    tags: ['React Native', 'Expo', 'TypeScript'],
    repo: 'https://github.com/Shapak-Apps',
  },
  {
    id: 'inlis-dili-1',
    category: 'lang',
    badgeColor: '#1F3A93',
    badgeText: 'A1',
    status: 'progress',
    name: { tk: 'Iňlis dili 1', en: 'Iňlis dili 1', ru: 'Iňlis dili 1' },
    desc: {
      tk: 'Türkmen dilinden iňlis dili, A1 derejesi. Hytaý dili 1 bilen bir hereketlendirijide.',
      en: 'English from Turkmen, A1 level. Runs on the same engine as Hytaý dili 1.',
      ru: 'Английский с туркменского, уровень A1. На том же движке, что и Hytaý dili 1.',
    },
    tags: ['React Native', 'Expo', 'TypeScript'],
    repo: 'https://github.com/Shapak-Apps',
  },
  {
    id: 'kopri',
    category: 'tools',
    badgeColor: '#7C4DFF',
    badgeText: 'Kö',
    status: 'progress',
    name: { tk: 'Köpri', en: 'Köpri', ru: 'Köpri' },
    desc: {
      tk: 'Android üçin oflaýn terjimeçi: rus we iňlis dillerinden türkmen diline oflaýn sözlük.',
      en: 'An offline translator for Android — Russian/English to Turkmen, no connection needed.',
      ru: 'Офлайн-переводчик для Android — с русского и английского на туркменский.',
    },
    tags: ['Flutter', 'Dart'],
    repo: 'https://github.com/Shapak-Apps',
  },
  {
    id: 'blueplayer',
    category: 'tools',
    badgeColor: '#1CA9C9',
    badgeText: '▶',
    status: 'progress',
    name: { tk: 'BluePlayer', en: 'BluePlayer', ru: 'BluePlayer' },
    desc: {
      tk: 'Android üçin döwrebap aýdym pleýeri. Kotlin we nativ C++ bilen ýazyldy.',
      en: 'A modern music player for Android, built with Kotlin and native C++.',
      ru: 'Современный музыкальный плеер для Android на Kotlin и нативном C++.',
    },
    tags: ['Kotlin', 'C++'],
    repo: 'https://github.com/Shapak-Apps',
  },
  {
    id: 'kust',
    category: 'tools',
    badgeColor: '#111111',
    badgeText: '♞',
    status: 'progress',
    name: { tk: 'Küşt', en: 'Küşt', ru: 'Küşt' },
    desc: {
      tk: 'Küşt öwrenmek we türgenleşmek üçin programma. Stockfish botlaryna garşy oýun.',
      en: 'An app for learning and practicing chess, playing against Stockfish bots.',
      ru: 'Приложение для изучения и тренировки шахмат против ботов Stockfish.',
    },
    tags: ['Flutter', 'Dart', 'Stockfish'],
    repo: 'https://github.com/Shapak-Apps',
  },
]

export const categoryLabel = {
  lang: { tk: 'Dil öwrenmek', en: 'Language learning', ru: 'Изучение языков' },
  tools: { tk: 'Gurallar', en: 'Tools', ru: 'Инструменты' },
}

export const statusLabel = {
  live: { tk: 'Dükanlarda', en: 'In the stores', ru: 'В магазинах' },
  soon: { tk: 'Ýakynda', en: 'Coming soon', ru: 'Скоро' },
  progress: { tk: 'Taýýarlanýar', en: 'In progress', ru: 'В разработке' },
}
