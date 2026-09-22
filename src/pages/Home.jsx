import { useState, useMemo } from 'react'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import MemberCard from '../components/MemberCard'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { useApp } from '../context/AppContext'
import { useTyping } from '../hooks/useTyping'
import { useCountUp } from '../hooks/useCountUp'
import { useProjectOverrides } from '../hooks/useProjectOverrides'
import { dict } from '../data/i18n'
import { members } from '../data/members'
import { projects, categoryLabel } from '../data/projects'

const ORG_URL = 'https://github.com/Shapak-Apps'

function Stat({ count, label }) {
  const [ref, value] = useCountUp(count)
  return (
    <div className="pr-4 sm:pr-7 mr-4 sm:mr-7 pt-5 pb-1 border-r border-rule last:border-r-0 last:mr-0 last:pr-0">
      <b ref={ref} className="block font-display font-[560] text-[21px] sm:text-[28px]">
        {value}
      </b>
      <span className="text-[13.5px] text-muted">{label}</span>
    </div>
  )
}

export default function Home() {
  const { t } = useApp()
  const { overrides, saveOverride, resetAll } = useProjectOverrides()
  const [editing, setEditing] = useState(null)

  const headline = t(dict.hero.title)
  const typed = useTyping(headline)

  const merged = useMemo(
    () =>
      projects.map((p) => {
        const o = overrides[p.id]
        if (!o) return p
        return {
          ...p,
          category: o.category ?? p.category,
          name: o.name ? { tk: o.name, en: o.name, ru: o.name } : p.name,
          desc: o.desc ? { tk: o.desc, en: o.desc, ru: o.desc } : p.desc,
          badgeImg: o.badgeImg ?? null,
        }
      }),
    [overrides]
  )

  const hasOverrides = Object.keys(overrides).length > 0

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="pt-[76px] pb-14">
        <div className="wrap max-w-[760px] mr-auto ml-auto lg:ml-[max(28px,calc((100vw-1180px)/2+28px))]">
          <p className="inline-flex items-center gap-2 text-sm text-muted font-semibold mb-[22px]">
            <span className="w-1.5 h-1.5 rounded-full bg-ray" />
            {t(dict.hero.kicker)}
          </p>

          <h1 className="font-display font-[560] text-[clamp(34px,5.6vw,60px)] leading-[1.14] tracking-[-0.015em] m-0 mb-6 min-h-[2.3em]">
            {typed}
            <span className="typing-cursor" />
          </h1>

          <p className="text-lg text-muted max-w-[520px] m-0 mb-[34px]">{t(dict.hero.lead)}</p>

          <div className="flex flex-wrap gap-3.5 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-bold text-[15px] px-[22px] py-3.5 rounded-[10px] border border-ink bg-ink text-bg transition duration-200 hover:bg-ember hover:border-ember hover:-translate-y-px active:translate-y-px"
            >
              {t(dict.hero.ctaProjects)}
            </a>
            <a
              href={ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[15px] px-[22px] py-3.5 rounded-[10px] border border-rule transition duration-200 hover:border-ink hover:-translate-y-px active:translate-y-px"
            >
              {t(dict.hero.ctaGithub)}
            </a>
          </div>

          <div className="flex flex-wrap border-t border-rule">
            <Stat count={2} label={t(dict.hero.statApps)} />
            <Stat count={6} label={t(dict.hero.statProjects)} />
            <Stat count={5} label={t(dict.hero.statMembers)} />
            <div className="pt-5 pb-1">
              <b className="block font-display font-[560] text-[21px] sm:text-[28px]">MIT · Apache · GPL</b>
              <span className="text-[13.5px] text-muted">{t(dict.hero.statLicenses)}</span>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="horizon mt-14" />
        </div>
      </section>

      {/* ---------------- MISSION ---------------- */}
      <section id="mission" className="py-[72px] border-b border-rule">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3.5 md:gap-10">
            <div className="text-[15px] font-bold">
              {t(dict.mission.label)}
              <span className="label-rule" />
            </div>
            <Reveal className="max-w-[640px]">
              {[dict.mission.p1, dict.mission.p2, dict.mission.p3].map((p, i) => (
                <p key={i} className="font-display font-normal text-xl leading-[1.55] m-0 mb-[22px] last:mb-0">
                  {t(p)}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PRINCIPLES ---------------- */}
      <section id="principles" className="py-[72px] border-b border-rule">
        <div className="wrap">
          <SectionHead label={t(dict.principles.label)} heading={t(dict.principles.heading)} />
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule border border-rule rounded-2xl overflow-hidden">
              {dict.principles.items.map((item, i) => (
                <div key={i} className="group bg-bg px-[30px] py-7 transition-colors duration-250 hover:bg-surface">
                  <span className="block w-[18px] h-0.5 bg-ray mb-4 transition-[width] duration-250 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-[34px]" />
                  <h3 className="text-[17px] font-extrabold m-0 mb-2.5">{t(item.title)}</h3>
                  <p className="text-[15px] text-muted m-0 leading-relaxed">{t(item.body)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="py-[72px] border-b border-rule">
        <div className="wrap">
          <SectionHead label={t(dict.projects.label)} heading={t(dict.projects.heading)} />

          <p className="text-[13px] text-muted -mt-6 mb-[30px] max-w-[640px]">{t(dict.projects.editHint)}</p>

          {['lang', 'tools'].map((cat) => {
            const items = merged.filter((p) => p.category === cat)
            if (!items.length) return null
            return (
              <div key={cat} className="mb-11 last:mb-0">
                <p className="text-[13.5px] font-bold text-muted m-0 mb-[18px]">{t(categoryLabel[cat])}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
                  {items.map((p, i) => (
                    <Reveal key={p.id} delay={i * 60}>
                      <ProjectCard project={p} onEdit={setEditing} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}

          {hasOverrides && (
            <div className="mt-[30px]">
              <button
                type="button"
                onClick={resetAll}
                className="text-[12.5px] text-muted border-b border-dotted border-muted cursor-pointer bg-transparent p-0 transition-colors hover:text-ember hover:border-ember"
              >
                {t(dict.projects.resetAll)}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ---------------- PEOPLE ---------------- */}
      <section id="people" className="py-[72px] border-b border-rule">
        <div className="wrap">
          <SectionHead label={t(dict.people.label)} heading={t(dict.people.heading)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {members.map((m, i) => (
              <Reveal key={m.id} delay={i * 60}>
                <MemberCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section id="contributing" className="py-[72px]">
        <div className="wrap">
          <Reveal>
            <div className="bg-ink text-bg rounded-[18px] px-[26px] sm:px-[42px] py-9 sm:py-[50px] flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="font-display font-[560] text-[clamp(22px,3vw,30px)] m-0 mb-2 max-w-[420px]">
                  {t(dict.cta.heading)}
                </h2>
                <p className="text-[#C9C2B3] m-0 max-w-[420px] text-[15px]">{t(dict.cta.body)}</p>
              </div>
              <a
                href={ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-[15px] px-[22px] py-3.5 rounded-[10px] bg-ray text-[#1C160D] border border-ray transition-[background-color,border-color,transform] duration-200 hover:bg-white hover:border-white hover:-translate-y-px"
              >
                {t(dict.cta.button)}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ProjectModal project={editing} onSave={saveOverride} onClose={() => setEditing(null)} />
    </>
  )
}
