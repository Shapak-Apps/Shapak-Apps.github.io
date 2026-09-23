import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Document, baseMetadata, baseViewport } from "@/lib/document";
import { PREFIXED_LANGS, isLang } from "@/lib/i18n";
import "../globals.css";

// Статический экспорт: собираются только /ru/ и /en/, других языков нет.
export const dynamicParams = false;
export function generateStaticParams() {
  return PREFIXED_LANGS.map((lang) => ({ lang }));
}

export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = baseViewport;

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Document lang={lang}>{children}</Document>;
}
