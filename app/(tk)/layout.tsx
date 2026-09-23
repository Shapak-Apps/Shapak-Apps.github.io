import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Document, baseMetadata, baseViewport } from "@/lib/document";
import "../globals.css";

// Туркменский — язык по умолчанию, живёт в корне сайта без префикса.
export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = baseViewport;

export default function TurkmenLayout({ children }: { children: ReactNode }) {
  return <Document lang="tk">{children}</Document>;
}
