import { useApp } from '../context/AppContext'
import { statusLabel } from '../data/projects'
import { dict } from '../data/i18n'

export default function ProjectCard({ project, onEdit }) {
  const { t } = useApp()
  const isLive = project.status === 'live'

  return (
    <div className="group relative border-t-2 border-rule pt-[18px] pr-4 pb-4 transition-[border-color,transform] duration-[250ms] ease-[cubic-bezier(.16,1,.3,1)] hover:border-ray hover:-translate-y-[3px]">
      <button
        type="button"
        onClick={() => onEdit(project)}
        title={t(dict.common.edit)}
        aria-label={t(dict.common.edit)}
        className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg border border-rule bg-bg grid place-items-center cursor-pointer opacity-0 z-[2] transition-[opacity,border-color,transform] duration-200 group-hover:opacity-100 focus-visible:opacity-100 hover:border-ray hover:scale-105"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-[13px] h-[13px]">
          <path d="M11.3 2.3a1.5 1.5 0 0 1 2.1 2.1L5 12.8l-3 .8.8-3 8.5-8.5Z" />
        </svg>
      </button>

      <div className="flex items-start justify-between gap-2.5 mb-3.5">
        <div
          className="w-[38px] h-[38px] rounded-[10px] grid place-items-center font-extrabold text-[13px] text-white shrink-0 overflow-hidden"
          style={{ background: project.badgeColor }}
        >
          {project.badgeImg ? (
            <img src={project.badgeImg} alt="" className="w-full h-full object-cover" />
          ) : (
            project.badgeText
          )}
        </div>

        <span className="flex items-center gap-1.5 pt-2.5 text-[11.5px] font-bold text-muted">
          <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-ray' : 'bg-muted'}`} />
          {t(statusLabel[project.status] ?? statusLabel.progress)}
        </span>
      </div>

      <h4 className="font-display font-[650] text-[19px] m-0 mb-2">{t(project.name)}</h4>
      <p className="text-[14.5px] text-muted m-0 mb-3.5 leading-relaxed">{t(project.desc)}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11.5px] font-semibold text-muted border border-rule rounded-full px-2.5 py-[3px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
