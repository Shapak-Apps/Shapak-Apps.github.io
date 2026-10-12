import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { SITE_URL, localePath, type Lang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { EMAIL, NEWCOMER_ISSUES_URL, ORG_URL, orgOnGitHub } from "@/content/site";
import { members } from "@/content/people";
import { allProjects } from "@/content/projects";
import { contribute, hero, meta, mission, people, principles, projects } from "@/content/home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RevealOnScroll } from "./RevealOnScroll";
import { SmoothSections } from "./SmoothSections";
import "./home.css";

export function homeMetadata(lang: Lang): Metadata {
  return pageMetadata({
    lang,
    path: "/",
    title: meta.title[lang],
    description: meta.description[lang],
    ogTitle: meta.ogTitle,
  });
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Şapak Apps",
  alternateName: "Open Source Turkmenistan",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/apple-touch-icon.png`,
  email: EMAIL,
  sameAs: [ORG_URL],
};

/** Каскад появления внутри ряда. */
const delay = (i: number, perRow: number) => ({ "--d": `${(i % perRow) * 0.08}s` }) as CSSProperties;

export function HomePage({ lang }: { lang: Lang }) {
  const projectsHref = localePath(lang, "/projects/");
  return (
    <div className="wrap home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Header lang={lang} page="home" />

      <main>
        <div className="hero screen">
          <h1>{hero.title}</h1>
          <span className="hero-rule" aria-hidden="true" />
          <p className="lead">{hero.lead[lang]}</p>
          <a className="scroll-cue" href="#mission" aria-label={hero.scrollCue[lang]}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>

        <section id="mission" className="screen reveal">
          <p className="eyebrow">{mission.label[lang]}</p>
          <p className="statement">
            <strong>{mission.strong[lang]}</strong> {mission.rest[lang]}
          </p>
        </section>

        <section id="principles" className="screen">
          <h2 className="section-title reveal">{principles.title[lang]}</h2>
          <div className="principles">
            {principles.items.map((item, i) => (
              <div key={i} className="principle reveal" style={delay(i, 2)}>
                <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title[lang]}</h3>
                <p>{item.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="screen">
          <h2 className="section-title reveal">{projects.title[lang]}</h2>
          <p className="section-lead reveal">{projects.lead[lang]}</p>
          <ul className="app-row">
            {allProjects.map((p, i) => (
              <li key={p.id} className="reveal" style={delay(i, 6)}>
                <a href={`${projectsHref}#${p.id}`}>
                  <img className="app-icon" src={p.icon} alt="" width={88} height={88} />
                  <b>{p.name}</b>
                  <span className={p.status.live ? "st live" : "st"}>{(p.status.short ?? p.status.text)[lang]}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="ctas reveal">
            <a className="btn primary" href={projectsHref}>{hero.allProjects[lang]}</a>
            <a className="btn ghost" href={ORG_URL}>{orgOnGitHub[lang]}</a>
          </div>
        </section>

        <section id="people" className="screen">
          <h2 className="section-title reveal">{people.title[lang]}</h2>
          <p className="section-lead reveal">{people.lead[lang]}</p>
          <ul className="members">
            {members.map((m, i) => (
              <li key={m.github} className="member reveal" style={delay(i, 5)}>
                <img src={`https://github.com/${m.github}.png?size=160`} alt="" width={80} height={80} loading="lazy" />
                <div>
                  <h3>{m.name}</h3>
                  <p className="role">{m.role[lang]}</p>
                  <div className="links">
                    <a href={`https://github.com/${m.github}`}>GitHub</a>
                    {m.extra && <a href={m.extra.href}>{m.extra.label}</a>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contribute" className="screen">
          <div className="band reveal">
            <div className="band-head">
              <h2 className="section-title">{contribute.title[lang]}</h2>
              <p>{contribute.lead[lang]}</p>
              <div className="ctas">
                <a className="btn on-brand" href={NEWCOMER_ISSUES_URL}>{contribute.newcomerIssues[lang]}</a>
              </div>
            </div>
            <ol className="steps">
              {contribute.steps.map((s, i) => (
                <li key={i}>{s[lang]}</li>
              ))}
            </ol>
            <div className="band-foot">
              <ul>
                {contribute.promises.map((p, i) => (
                  <li key={i}>{p[lang]}</li>
                ))}
              </ul>
              <p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> — {contribute.contactNote[lang]}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <RevealOnScroll />
      <SmoothSections />
    </div>
  );
}
