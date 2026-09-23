import { notFound } from "next/navigation";
import { HomePage, homeMetadata } from "@/components/HomePage";
import { isLang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLang(lang) ? homeMetadata(lang) : {};
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <HomePage lang={lang} />;
}
