export const LANGS = ["tk", "ru", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** Туркменский живёт в корне (/), остальные — под префиксом (/ru/, /en/). */
export const DEFAULT_LANG: Lang = "tk";
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG);

export const SITE_URL = "https://shapak-apps.github.io";

/** Строка на трёх языках. */
export type L = Record<Lang, string>;

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

/** Адрес страницы на нужном языке: localePath("ru", "/projects/") → "/ru/projects/". */
export function localePath(lang: Lang, path = "/"): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/** hreflang-альтернативы для metadata.alternates.languages. */
export function languageAlternates(path = "/"): Record<string, string> {
  return Object.fromEntries(LANGS.map((l) => [l, localePath(l, path)]));
}

export const OG_LOCALE: L = { tk: "tk_TM", ru: "ru_RU", en: "en_US" };
