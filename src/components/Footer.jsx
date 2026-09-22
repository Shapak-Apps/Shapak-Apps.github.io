import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { dict } from '../data/i18n'

export default function Footer() {
  const { t } = useApp()

  return (
    <footer className="pt-11 pb-16">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-[13.5px] text-muted">
        <span>{t(dict.footer.rights)}</span>
        <div className="flex flex-wrap gap-5">
          <a href="mailto:shapak.apps@gmail.com" className="transition-colors hover:text-ink">
            shapak.apps@gmail.com
          </a>
          <a
            href="https://github.com/Shapak-Apps"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            github.com/Shapak-Apps
          </a>
          <Link to="/blog" className="transition-colors hover:text-ink">
            {t(dict.nav.blog)}
          </Link>
          <Link to="/services" className="transition-colors hover:text-ink">
            {t(dict.nav.services)}
          </Link>
        </div>
      </div>
    </footer>
  )
}
