import PageHero from '../components/PageHero'
import MemberCard from '../components/MemberCard'
import Reveal from '../components/Reveal'
import { useApp } from '../context/AppContext'
import { dict } from '../data/i18n'
import { members } from '../data/members'

export default function Services() {
  const { t } = useApp()

  return (
    <>
      <PageHero title={t(dict.services.title)} lead={t(dict.services.lead)} />
      <section className="py-10">
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {members.map((m, i) => (
              <Reveal key={m.id} delay={i * 60}>
                <MemberCard member={m} variant="service" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
