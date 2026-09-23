import Link from "next/link";
import { LANGS, localePath, type Lang } from "@/lib/i18n";
import { nav } from "@/content/site";

export type Page = "home" | "projects";

const PAGE_PATH: Record<Page, string> = { home: "/", projects: "/projects/" };

export function Header({ lang, page }: { lang: Lang; page: Page }) {
  const home = localePath(lang, "/");
  return (
    <header className="masthead">
      <Link className="brand" href={home}>
        {/* SVG сам переключается между светлой и тёмной версией. */}
        <img src="/logo.svg" alt="şapak" width={788} height={204} />
      </Link>
      <nav className="nav" aria-label={nav.sections[lang]}>
        <a href={`${home}#mission`}>{nav.mission[lang]}</a>
        <Link href={localePath(lang, "/projects/")} aria-current={page === "projects" ? "page" : undefined}>
          {nav.projects[lang]}
        </Link>
        <a href={`${home}#people`}>{nav.people[lang]}</a>
        <a href={`${home}#contribute`}>{nav.contribute[lang]}</a>
      </nav>
      {/* У каждого языка своя корневая раскладка, поэтому обычные ссылки, не <Link>. */}
      <nav className="langsel" aria-label="Language">
        {LANGS.map((l) => (
          <a key={l} href={localePath(l, PAGE_PATH[page])} hrefLang={l} aria-current={l === lang ? "true" : undefined}>
            {l.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}
