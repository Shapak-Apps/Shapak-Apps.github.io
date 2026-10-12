import { localePath, type Lang } from "@/lib/i18n";
import { EMAIL, ORG_URL, PRIVACY_URLS, footer } from "@/content/site";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer>
      <a className="brand" href={localePath(lang, "/")}>
        <img src="/logo-dark-sm.png" alt="şapak" width={340} height={88} loading="lazy" />
      </a>
      <div className="meta">
        <a href={ORG_URL}>github.com/Shapak-Apps</a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={PRIVACY_URLS.ykjam}>{footer.privacyYkjam[lang]}</a>
        <a href={PRIVACY_URLS.hytay}>{footer.privacyHytay[lang]}</a>
        <span>Türkmenistan</span>
      </div>
    </footer>
  );
}
