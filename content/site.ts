import type { L } from "@/lib/i18n";

export const EMAIL = "shapak.apps@gmail.com";
export const ORG_URL = "https://github.com/Shapak-Apps";
export const NEWCOMER_ISSUES_URL =
  "https://github.com/search?q=org%3AShapak-Apps+is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22&type=issues";

export const nav = {
  sections: { tk: "Bölümler", ru: "Разделы", en: "Sections" },
  mission: { tk: "Maksadymyz", ru: "Цели", en: "Mission" },
  projects: { tk: "Taslamalar", ru: "Проекты", en: "Projects" },
  people: { tk: "Adamlar", ru: "Люди", en: "People" },
  contribute: { tk: "Goşant goşmak", ru: "Участие", en: "Contributing" },
} satisfies Record<string, L>;

export const orgOnGitHub: L = {
  tk: "GitHub-da gurama",
  ru: "Организация на GitHub",
  en: "Organization on GitHub",
};

export const footer = {
  privacyYkjam: {
    tk: "Gizlinlik · Ykjam Terjime",
    ru: "Конфиденциальность · Ykjam Terjime",
    en: "Privacy · Ykjam Terjime",
  },
  privacyHytay: {
    tk: "Gizlinlik · Hytaý dili 1",
    ru: "Конфиденциальность · Hytaý dili 1",
    en: "Privacy · Hytaý dili 1",
  },
} satisfies Record<string, L>;

/** Адреса политик прописаны в App Store и Google Play — менять только вместе со сторами. */
export const PRIVACY_URLS = {
  // Отдаётся отдельным репозиторием Shapak-Apps/ykjam-terjime, не этим сайтом.
  ykjam: "/ykjam-terjime/privacy-policy.html",
  // Лежит в public/hytay-dili-1/.
  hytay: "/hytay-dili-1/privacy-policy.html",
};
