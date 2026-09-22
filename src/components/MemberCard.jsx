import { useApp } from '../context/AppContext'
import { dict } from '../data/i18n'

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.5c-2.22.48-2.69-1.07-2.69-1.07-.36-.93-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M1.5 8h13M8 1.5c1.8 1.9 1.8 11.1 0 13M8 1.5c-1.8 1.9-1.8 11.1 0 13" />
    </svg>
  )
}

export default function MemberCard({ member, variant = 'compact' }) {
  const { t } = useApp()
  const isService = variant === 'service'

  return (
    <div className="border border-rule rounded-2xl p-[22px] transition-[border-color,transform,box-shadow] duration-200 ease-[cubic-bezier(.16,1,.3,1)] hover:border-ray hover:-translate-y-1 hover:shadow-[0_18px_34px_-22px_rgba(0,0,0,0.35)]">
      <img
        src={member.avatar}
        alt={member.name}
        loading="lazy"
        className="w-[60px] h-[60px] rounded-full object-cover border border-rule mb-3.5"
      />

      {isService && (
        <span className="inline-flex text-[11px] font-bold text-ember bg-ray-soft rounded-full px-2.5 py-1 mb-3.5">
          {t(member.focus)}
        </span>
      )}

      <div className="font-display font-[650] text-lg mb-1">{member.name}</div>
      <div className="text-[13.5px] text-muted mb-3.5 leading-relaxed">{t(member.role)}</div>

      <div className="flex items-center gap-3.5 pt-3.5 border-t border-rule">
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12.5px] font-bold text-muted transition-colors hover:text-ray"
          >
            <GithubIcon />
            GitHub
          </a>
        )}
        {isService && member.portfolio && (
          <a
            href={member.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12.5px] font-bold text-muted transition-colors hover:text-ray"
          >
            <GlobeIcon />
            {t(dict.services.portfolio)}
          </a>
        )}
      </div>

      {isService && member.email && (
        <a
          href={`mailto:${member.email}`}
          className="mt-4 w-full text-center inline-flex items-center justify-center gap-2 font-bold text-[13.5px] px-3.5 py-2 rounded-lg border border-rule cursor-pointer transition-[transform,border-color] duration-200 hover:border-ink hover:-translate-y-px"
        >
          {t(dict.services.getInTouch)}
        </a>
      )}
    </div>
  )
}
