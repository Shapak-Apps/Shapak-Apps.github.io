import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Dropdown from './Dropdown'
import { useApp } from '../context/AppContext'
import { LANGS, dict } from '../data/i18n'

function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  )
}

function DropdownLabel({ children }) {
  return (
    <div className="px-1 pt-1.5 pb-2 text-[11.5px] font-bold uppercase tracking-wide text-muted/70">
      {children}
    </div>
  )
}

/** Bir bölümdäki saýlanýan zatlary gorizontal hatarda, ikon bilen görkezýär. */
function PillRow({ children }) {
  return <div className="flex items-center gap-1.5 px-1 pb-1">{children}</div>
}

function Pill({ active, onClick, icon, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex-1 flex flex-col items-center justify-center gap-1 rounded-lg py-2.5 px-2 text-[12.5px] font-bold cursor-pointer transition-colors border ${
        active
          ? 'bg-ink text-bg border-ink'
          : 'bg-transparent text-muted border-rule hover:border-ray hover:text-ink'
      }`}
    >
      {icon}
      {children}
    </button>
  )
}

const navLinks = [
  { to: '/', label: dict.nav.home, end: true },
  { to: '/#mission', label: dict.nav.mission, hash: true },
  { to: '/#projects', label: dict.nav.projects, hash: true },
  { to: '/#people', label: dict.nav.people, hash: true },
  { to: '/blog', label: dict.nav.blog },
  { to: '/services', label: dict.nav.services },
]

export default function Header({ onMenuClick, sidebarOpen }) {
  const { lang, setLang, t } = useApp()
  const currentShort = LANGS.find((l) => l.code === lang)?.short ?? 'TK'

  return (
    <header className="sticky top-0 z-40 border-b border-rule backdrop-blur-[10px] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)]">
      <div className="wrap flex items-center justify-between gap-4 py-6">
        {/* --------- icon + links (desktop) --------- */}
        <div className="flex items-center gap-10 min-w-0">
          <Logo imgClassName="h-8" />
          <nav className="hidden lg:flex items-center gap-7" aria-label="Esasy">
            {navLinks.map((link) =>
              link.hash ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-[15.5px] font-semibold text-muted transition-colors hover:text-ink"
                >
                  {t(link.label)}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `text-[15.5px] font-semibold transition-colors hover:text-ink ${
                      isActive ? 'text-ink' : 'text-muted'
                    }`
                  }
                >
                  {t(link.label)}
                </NavLink>
              )
            )}
          </nav>
        </div>

        {/* --------- language switcher (tema el bilen çalşylmaýar — enjamdan awtomatik) --------- */}
        <div className="flex items-center gap-3 shrink-0">
          <Dropdown
            menuClassName="min-w-[220px]"
            trigger={
              <span className="flex items-center gap-2 text-[15px]">
                <GlobeIcon className="w-[18px] h-[18px]" />
                <span>{currentShort}</span>
              </span>
            }
            triggerClassName="px-4 py-2.5"
          >
            {(close) => (
              <>
                <DropdownLabel>{t(dict.common.language)}</DropdownLabel>
                <PillRow>
                  {LANGS.map((l) => (
                    <Pill
                      key={l.code}
                      active={lang === l.code}
                      onClick={() => {
                        setLang(l.code)
                        close()
                      }}
                      icon={<GlobeIcon className="w-4 h-4" />}
                    >
                      {l.short}
                    </Pill>
                  ))}
                </PillRow>
              </>
            )}
          </Dropdown>

          {/* hamburger: diňe mobil/tablet ekranda görünýär, giň ekranda baglanyşyklar eýýäm görkezilýär */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label={t(dict.common.menu)}
            aria-expanded={sidebarOpen}
            className="lg:hidden w-12 h-12 rounded-xl border border-rule grid place-items-center cursor-pointer transition-colors hover:border-ray"
          >
            <span className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 w-5 h-0.5 bg-ink rounded-sm transition-all duration-300 ${
                  sidebarOpen ? 'top-[6px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] w-5 h-0.5 bg-ink rounded-sm transition-opacity duration-200 ${
                  sidebarOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-5 h-0.5 bg-ink rounded-sm transition-all duration-300 ${
                  sidebarOpen ? 'top-[6px] -rotate-45' : 'top-[12px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
