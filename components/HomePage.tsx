import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { SITE_URL, localePath, type Lang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { EMAIL, NEWCOMER_ISSUES_URL, ORG_URL, orgOnGitHub } from "@/content/site";
import { members } from "@/content/people";
import { contribute, hero, meta, mission, people, principles, projectsIntro, stats } from "@/content/home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RevealOnScroll } from "./RevealOnScroll";
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

export function HomePage({ lang }: { lang: Lang }) {
  const projectsHref = localePath(lang, "/projects/");
  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Header lang={lang} page="home" />

      <main>
        <div className="hero">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title[lang]}</h1>
          <p className="lead">{hero.lead[lang]}</p>

          <div className="stats">
            {stats.map((s) => (
              <a key={s.value} className="stat" href={s.target === "projects" ? projectsHref : s.target}>
                <b className={s.small ? "lic" : undefined}>{s.value}</b>
                <small>{s.label[lang]}</small>
              </a>
            ))}
          </div>
        </div>

        <section id="mission" className="reveal">
          <p className="label">{mission.label[lang]}</p>
          <div className="prose">
            {mission.paragraphs.map((p, i) => (
              <p key={i}>{p[lang]}</p>
            ))}
          </div>
        </section>

        <section id="principles">
          <p className="label reveal">{principles.label[lang]}</p>
          <div className="principles">
            {principles.items.map((item, i) => (
              <div key={i} className="principle reveal" style={{ "--d": `${(i % 4) * 0.1}s` } as CSSProperties}>
                <h3>{item.title[lang]}</h3>
                <p>{item.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="reveal">
          <p className="label">{projectsIntro.label[lang]}</p>
          <div className="prose">
            {projectsIntro.paragraphs.map((p, i) => (
              <p key={i}>{p[lang]}</p>
            ))}
          </div>
          <div className="ctas">
            <a className="cta" href={projectsHref}>{projectsIntro.allProjects[lang]}</a>
            <a className="cta quiet" href={ORG_URL}>{orgOnGitHub[lang]}</a>
          </div>
        </section>

        <section id="people">
          <p className="label reveal">{people.label[lang]}</p>
          <div className="prose two">
            <p className="reveal">{people.text[lang]}</p>
          </div>
          <div className="members">
            {members.map((m, i) => (
              <article key={m.github} className="member reveal" style={{ "--d": `${(i % 3) * 0.1}s` } as CSSProperties}>
                <div className="who">
                  <img src={`https://github.com/${m.github}.png?size=160`} alt="" width={84} height={84} loading="lazy" />
                  <div>
                    <h3>{m.name}</h3>
                    <p className="role">{m.role[lang]}</p>
                  </div>
                </div>
                <div className="links">
                  <a href={`https://github.com/${m.github}`}>GitHub</a>
                  {m.extra && <a href={m.extra.href}>{m.extra.label}</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contribute">
          <p className="label reveal">{contribute.label[lang]}</p>
          <ol className="steps">
            {contribute.steps.map((s, i) => (
              <li key={i} className="reveal" style={{ "--d": `${i * 0.1}s` } as CSSProperties}>{s[lang]}</li>
            ))}
          </ol>
          <div className="promise reveal">
            <div>
              <h3>{contribute.promiseTitle[lang]}</h3>
              <ul>
                {contribute.promises.map((p, i) => (
                  <li key={i}>{p[lang]}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{contribute.contactTitle[lang]}</h3>
              <p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> — {contribute.contactNote[lang]}
              </p>
            </div>
          </div>
          <div className="ctas reveal">
            <a className="cta" href={NEWCOMER_ISSUES_URL}>{contribute.newcomerIssues[lang]}</a>
            <a className="cta quiet" href={ORG_URL}>{orgOnGitHub[lang]}</a>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <RevealOnScroll />
    </div>
  );
}
