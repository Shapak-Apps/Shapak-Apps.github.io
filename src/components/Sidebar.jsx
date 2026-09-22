import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import { useApp } from '../context/AppContext'
import { dict } from '../data/i18n'

const EMAIL = 'shapak.apps@gmail.com'

export default function Sidebar({ open, onClose }) {
  const { t } = useApp()

  useEffect(() => {
    document.documentElement.setAttribute('data-scroll-lock', String(open))
    return () => document.documentElement.setAttribute('data-scroll-lock', 'false')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const links = [
    { to: '/', label: dict.nav.home, end: true },
    { to: '/#mission', label: dict.nav.mission, hash: true },
    { to: '/#projects', label: dict.nav.projects, hash: true },
    { to: '/#people', label: dict.nav.people, hash: true },
    { to: '/blog', label: dict.nav.blog },
    { to: '/services', label: dict.nav.services },
    { to: '/#contributing', label: dict.nav.contributing, hash: true },
  ]

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[70] bg-[rgba(10,8,4,0.45)] transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        aria-hidden={!open}
        className={`fixed top-0 left-0 bottom-0 z-[80] w-[min(320px,86vw)] bg-bg border-r border-rule flex flex-col px-[22px] pt-[22px] pb-7 transition-transform duration-[380ms] ease-[cubic-bezier(.16,1,.3,1)] ${
          open ? 'translate-x-0' : '-translate-x-[104%]'
        }`}
      >
        <div className="flex items-center justify-between mb-9">
          <Logo onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            aria-label={t(dict.common.close)}
            className="w-9 h-9 rounded-[10px] border border-rule grid place-items-center cursor-pointer transition-colors hover:border-ray"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
              <path d="M3 3l10 10M13 3 3 13" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-0.5">
          {links.map((link, i) => {
            const cls = `group flex items-center gap-3 px-2.5 py-3.5 rounded-[10px] text-base font-semibold transition-[background-color,opacity,transform] duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)] hover:bg-surface ${
              open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3.5'
            }`
            const style = { transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }
            const dot = (
              <span className="w-[5px] h-[5px] rounded-full bg-rule transition-colors group-hover:bg-ray" />
            )

            if (link.hash) {
              return (
                <a key={link.to} href={link.to} onClick={onClose} className={cls} style={style}>
                  {dot}
                  {t(link.label)}
                </a>
              )
            }
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={onClose}
                className={({ isActive }) => `${cls} ${isActive ? 'text-ray' : ''}`}
                style={style}
              >
                {dot}
                {t(link.label)}
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-rule">
          <p className="text-[13px] text-muted m-0 mb-2.5">{t(dict.common.contactUs)}</p>
          <a href={`mailto:${EMAIL}`} className="text-[13.5px] font-bold text-ray break-all">
            {EMAIL}
          </a>
        </div>
      </aside>
    </>
  )
}
