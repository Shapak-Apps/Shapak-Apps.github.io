import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import type { Lang } from "./i18n";

/**
 * Общее для обеих корневых раскладок: app/(tk)/layout.tsx и app/[lang]/layout.tsx.
 * Корневых раскладок две, потому что <html lang> у каждого языка свой.
 */
export const baseMetadata: Metadata = {
  icons: { icon: "/icon.png", apple: "/assets/apple-touch-icon.png" },
};

export const baseViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#131210" },
  ],
};

export function Document({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
