import type { MetadataRoute } from "next";
import { LANGS, SITE_URL, languageAlternates, localePath } from "@/lib/i18n";
import { PRIVACY_URLS } from "@/content/site";

// Статический экспорт: sitemap.xml собирается один раз при сборке.
export const dynamic = "force-static";

/** Страницы, которые есть на всех трёх языках. Новая страница — добавить сюда. */
const PAGES = ["/", "/projects/"];

const abs = (path: string) => `${SITE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.flatMap((path) =>
    LANGS.map((lang) => ({
      url: abs(localePath(lang, path)),
      alternates: {
        languages: Object.fromEntries(Object.entries(languageAlternates(path)).map(([l, p]) => [l, abs(p)])),
      },
    })),
  );
  // Политика Hytaý dili 1 — единственная, что лежит в этом репозитории.
  return [...pages, { url: abs(PRIVACY_URLS.hytay) }];
}
