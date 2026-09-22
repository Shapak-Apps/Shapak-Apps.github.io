import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { dict } from '../data/i18n'

export default function NotFound() {
  const { t } = useApp()

  return (
    <section className="py-28">
      <div className="wrap">
        <p className="text-[13px] font-bold text-ray mb-3">404</p>
        <h1 className="font-display font-[560] text-[clamp(30px,5vw,44px)] m-0 mb-3.5">
          {t(dict.notFound.title)}
        </h1>
        <p className="text-muted max-w-[480px] mb-8">{t(dict.notFound.body)}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-bold text-[15px] px-[22px] py-3 rounded-[10px] border border-ink bg-ink text-bg transition-colors hover:bg-ember hover:border-ember"
        >
          {t(dict.notFound.back)}
        </Link>
      </div>
    </section>
  )
}
