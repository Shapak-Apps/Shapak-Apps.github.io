"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LANGS, localePath, type Lang } from "@/lib/i18n";
import { nav } from "@/content/site";
import "./header.css";

export type Page = "home" | "projects";

const PAGE_PATH: Record<Page, string> = { home: "/", projects: "/projects/" };

const FLAG_SRC: Record<Lang, string> = { tk: "/flags/tk.svg", ru: "/flags/ru.svg", en: "/flags/gb.svg" };

function Flag({ lang }: { lang: Lang }) {
  return <img className="flag-icon" src={FLAG_SRC[lang]} alt="" width={20} height={14} />;
}

/**
 * Переключатель языка. У каждого языка свой корневой layout (см. lib/i18n.ts),
 * поэтому это обычные <a href>, а не клиентский стейт — переключение это
 * настоящий переход на /ru/ или /en/, а не смена состояния на месте.
 */
function LangSwitcher({ lang, page, onNavigate }: { lang: Lang; page: Page; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="langswitch" data-open={open}>
      <button
        type="button"
        className="langswitch-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Flag lang={lang} />
        {lang.toUpperCase()}
        <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" />
        </svg>
      </button>
      <div className="langswitch-panel" role="menu">
        {LANGS.map((l) => (
          <a
            key={l}
            className="langswitch-pill"
            href={localePath(l, PAGE_PATH[page])}
            hrefLang={l}
            aria-current={l === lang ? "true" : undefined}
            onClick={onNavigate}
          >
            <Flag lang={l} />
            {l.toUpperCase()}
          </a>
        ))}
      </div>
    </div>

  );
}

export function Header({ lang, page }: { lang: Lang; page: Page }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const home = localePath(lang, "/");
  const closeMobile = () => setMobileOpen(false);

  // Пока открыта мобильная панель — страница не скроллится под ней.
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const navLinks = (
    <>
      <a href={`${home}#mission`} onClick={closeMobile}>
        {nav.mission[lang]}
      </a>
      <Link
        href={localePath(lang, "/projects/")}
        aria-current={page === "projects" ? "page" : undefined}
        onClick={closeMobile}
      >
        {nav.projects[lang]}
      </Link>
      <a href={`${home}#people`} onClick={closeMobile}>
        {nav.people[lang]}
      </a>
      <a href={`${home}#contribute`} onClick={closeMobile}>
        {nav.contribute[lang]}
      </a>
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
          {navLinks}
        </nav>
      </div>

      <div className="masthead-right">
        <LangSwitcher lang={lang} page={page} />
        <button
          type="button"
          className="menu-btn"
          aria-label={nav.menu[lang]}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="bars">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* ---------- мобильная off-canvas панель ---------- */}
      <div className="mobile-backdrop" data-open={mobileOpen} onClick={closeMobile} aria-hidden="true" />
      <div className="mobile-panel" data-open={mobileOpen} aria-hidden={!mobileOpen}>
        <div className="mobile-panel-top">
          <img src="/logo.svg" alt="şapak" />
          <button type="button" className="mobile-close" onClick={closeMobile} aria-label={nav.close[lang]}>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M3 3l10 10M13 3 3 13" />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav" aria-label={nav.sections[lang]}>
          {navLinks}
        </nav>
        <div className="mobile-lang">
          <LangSwitcher lang={lang} page={page} onNavigate={closeMobile} />
        </div>
      </div>
    </header>
  );
}
