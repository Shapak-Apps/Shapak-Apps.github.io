import type { Metadata } from "next";
import type { CSSProperties } from "react";
import type { Lang } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { EMAIL, NEWCOMER_ISSUES_URL } from "@/content/site";
import { contribute } from "@/content/home";
import { after, giveStar, groups, hero, meta, type Project } from "@/content/projects";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StarCount } from "./StarCount";
import { RevealOnScroll } from "./RevealOnScroll";
import "./projects.css";

export function projectsMetadata(lang: Lang): Metadata {
  return pageMetadata({
    lang,
    path: "/projects/",
    title: meta.title[lang],
    description: meta.description[lang],
    ogTitle: meta.ogTitle[lang],
  });
}

/** Каскад появления внутри ряда: 0, .08s, .16s — как на прежнем сайте. */
const DELAYS = [undefined, ".08s", ".16s"];

function ProjectCard({ project: p, lang, index }: { project: Project; lang: Lang; index: number }) {
  const repoUrl = `https://github.com/Shapak-Apps/${p.repo}`;
  const delay = DELAYS[index % DELAYS.length];
  return (
    <article className="project reveal" style={delay ? ({ "--d": delay } as CSSProperties) : undefined}>
      <div className="head">
        <img className="icon" src={p.icon} alt="" width={160} height={160} />
        <div>
          <h3>{p.name}</h3>
          <span className={p.status.live ? "status live" : "status"}>{p.status.text[lang]}</span>
        </div>
      </div>
      <p>{p.text[lang]}</p>
      <div className="nums">
        {p.nums.map((n, i) => (
          <span key={i}>{typeof n === "string" ? n : n[lang]}</span>
        ))}
      </div>
      <div className="facts">
        {p.stack}
        <br />
        <a href={`https://github.com/${p.author}`}>@{p.author}</a>
      </div>
      <div className="links">
        {p.links?.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a href={repoUrl}>GitHub</a>
        <a className="star" href={repoUrl}>
          <StarCount repo={`Shapak-Apps/${p.repo}`} />
          {giveStar[lang]}
        </a>
      </div>
    </article>
  );
}

export function ProjectsPage({ lang }: { lang: Lang }) {
  return (
    <div className="wrap">
      <Header lang={lang} page="projects" />

      <main>
        <div className="page-hero">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title[lang]}</h1>
          <p className="lead">{hero.lead[lang]}</p>
        </div>

        {groups.map((g) => (
          <section key={g.title.en} className="group">
            <h2>{g.title[lang]}</h2>
            <div className="projects">
              {g.projects.map((p, i) => (
                <ProjectCard key={p.repo} project={p} lang={lang} index={i} />
              ))}
            </div>
          </section>
        ))}

        <div className="after">
          <p>{after.text[lang]}</p>
          <div className="ctas">
            <a className="cta" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="cta quiet" href={NEWCOMER_ISSUES_URL}>
              {contribute.newcomerIssues[lang]}
            </a>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
      <RevealOnScroll />
    </div>
  );
}
