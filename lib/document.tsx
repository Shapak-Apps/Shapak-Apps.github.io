import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import type { Lang } from "./i18n";
import { display } from "./fonts";

/**
 * Общее для обеих корневых раскладок: app/(tk)/layout.tsx и app/[lang]/layout.tsx.
 * Корневых раскладок две, потому что <html lang> у каждого языка свой.
 */
export const baseMetadata: Metadata = {
  icons: { icon: "/icon.png", apple: "/assets/apple-touch-icon.png" },
};

/** Сайт всегда тёмный, как баннер организации, — от темы системы не зависит. */
export const baseViewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export function Document({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={display.variable}>
      <body>{children}</body>
    </html>
  );
}
