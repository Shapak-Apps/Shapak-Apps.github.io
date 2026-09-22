import { useApp } from '../context/AppContext'
import { dict } from '../data/i18n'

export default function BlogCard({ post }) {
  const { t, lang } = useApp()

  const locale = lang === 'ru' ? 'ru-RU' : lang === 'en' ? 'en-GB' : 'tk-TM'
  let dateText = post.date
  try {
    dateText = new Date(post.date).toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch (e) {}

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-rule rounded-2xl overflow-hidden transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-ray hover:shadow-[0_18px_34px_-22px_rgba(0,0,0,0.35)]"
    >
      <div className="h-[150px] relative overflow-hidden bg-[linear-gradient(135deg,var(--ray),var(--ember))]">
        <span className="absolute bottom-3 left-4 text-white font-display text-[13px] font-[650] bg-[rgba(0,0,0,0.25)] px-2.5 py-1 rounded-full">
          {t(post.tag)}
        </span>
      </div>
      <div className="p-5">
        <div className="text-xs text-muted font-bold mb-2">{dateText}</div>
        <h3 className="font-display text-[19px] font-[650] m-0 mb-2">{t(post.title)}</h3>
        <p className="text-[14.5px] text-muted m-0 mb-3.5 leading-relaxed">{t(post.excerpt)}</p>
        <span className="text-[13px] font-bold text-ray">{t(dict.common.readMore)}</span>
      </div>
    </a>
  )
}
