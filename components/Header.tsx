import Link from "next/link";
import { LANGS, localePath, type Lang } from "@/lib/i18n";
import { nav } from "@/content/site";
import { HeaderMenus } from "./HeaderMenus";
import "./header.css";

export type Page = "home" | "projects";

const PAGE_PATH: Record<Page, string> = { home: "/", projects: "/projects/" };

/** Флаги — из lipis/flag-icons (MIT, public/flags/LICENSE). Туркменский переведён в PNG 60×45: SVG весит 38 КБ. */
const FLAG_SRC: Record<Lang, string> = { tk: "/flags/tm.png", ru: "/flags/ru.svg", en: "/flags/gb.svg" };

function Flag({ lang, lazy }: { lang: Lang; lazy?: boolean }) {
  return (
    <img className="flag-icon" src={FLAG_SRC[lang]} alt="" width={20} height={15} loading={lazy ? "lazy" : undefined} />
  );
}

/** Та же страница на других языках. У каждого языка своя корневая раскладка, поэтому обычные <a>, не <Link>. */
function LangLinks({ lang, page }: { lang: Lang; page: Page }) {
  return (
    <>
      {LANGS.map((l) => (
        <a
          key={l}
          className="langswitch-pill"
          href={localePath(l, PAGE_PATH[page])}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
        >
          {/* Внутри закрытого меню — не грузить, пока его не открыли. */}
          <Flag lang={l} lazy />
          {l.toUpperCase()}
        </a>
      ))}
    </>
  );
}

export function Header({ lang, page }: { lang: Lang; page: Page }) {
  const home = localePath(lang, "/");
  const sectionLinks = (
    <>
      <a href={`${home}#mission`}>{nav.mission[lang]}</a>
      <Link href={localePath(lang, "/projects/")} aria-current={page === "projects" ? "page" : undefined}>
        {nav.projects[lang]}
      </Link>
      <a href={`${home}#people`}>{nav.people[lang]}</a>
      <a href={`${home}#contribute`}>{nav.contribute[lang]}</a>
    </>
  );

  return (
    <header className="masthead">
      <div className="masthead-left">
        <Link className="brand" href={home}>
          {/* SVG сам переключается между светлой и тёмной версией. */}
          <img src="/logo.svg" alt="şapak" width={788} height={204} />
        </Link>
        <nav className="masthead-nav" aria-label={nav.sections[lang]}>
          {sectionLinks}
        </nav>
      </div>

      {/* Оба меню на <details>: открываются без JS, а закрытые не получают фокус с клавиатуры.
          Escape, клик мимо и закрытие после перехода добавляет HeaderMenus. */}
      <div className="masthead-right">
        <details className="langswitch">
          <summary className="langswitch-trigger" aria-label={`${nav.language[lang]}: ${lang.toUpperCase()}`}>
            <Flag lang={lang} />
            {lang.toUpperCase()}
            <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M2.5 4.5 6 8l3.5-3.5" />
            </svg>
          </summary>
          <div className="langswitch-panel">
            <LangLinks lang={lang} page={page} />
          </div>
        </details>

        <details className="mobile-menu">
          {/* Открытым превращается в крестик поверх затемнения — закрыть можно и без JS. */}
          <summary className="menu-btn" aria-label={nav.menu[lang]}>
            <span className="bars">
              <span />
              <span />
              <span />
            </span>
          </summary>
          <div className="mobile-backdrop" aria-hidden="true" />
          <div className="mobile-panel">
            <div className="mobile-panel-top">
              <img src="/logo.svg" alt="şapak" width={788} height={204} />
            </div>
            <nav className="mobile-nav" aria-label={nav.sections[lang]}>
              {sectionLinks}
            </nav>
            <div className="mobile-lang">
              <LangLinks lang={lang} page={page} />
            </div>
          </div>
        </details>
      </div>

      <HeaderMenus />
    </header>
  );
}
