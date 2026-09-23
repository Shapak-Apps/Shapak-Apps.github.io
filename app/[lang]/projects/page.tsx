import { notFound } from "next/navigation";
import { ProjectsPage, projectsMetadata } from "@/components/ProjectsPage";
import { isLang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return isLang(lang) ? projectsMetadata(lang) : {};
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <ProjectsPage lang={lang} />;
}
