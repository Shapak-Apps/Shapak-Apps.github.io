import type { Metadata } from "next";
import { LANGS, OG_LOCALE, SITE_URL, languageAlternates, localePath, type Lang } from "./i18n";

const OG_IMAGE = { url: "/assets/og.png", width: 1200, height: 630 };

/** Метаданные страницы на одном языке: canonical, hreflang на все три версии, OG и Twitter. */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  ogTitle,
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  ogTitle: string;
}): Metadata {
  const url = localePath(lang, path);
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: "Şapak Apps",
      title: ogTitle,
      description,
      url,
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: [OG_IMAGE.url] },
  };
}
