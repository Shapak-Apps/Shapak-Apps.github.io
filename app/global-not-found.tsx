import type { Metadata, Viewport } from "next";
import { baseViewport } from "@/lib/document";
import "./globals.css";
import "@/components/not-found.css";

// Одна 404 на весь сайт: у сайта две корневые раскладки, поэтому обычный
// app/not-found.tsx собрать не из чего. Язык запроса неизвестен — текст на трёх.
export const metadata: Metadata = {
  title: "404 — Şapak Apps",
  robots: { index: false },
  icons: { icon: "/icon.png" },
};
export const viewport: Viewport = baseViewport;

export default function GlobalNotFound() {
  return (
    <html lang="tk">
      <body>
        <div className="wrap nf">
          <a className="brand" href="/">
            <img src="/logo.svg" alt="şapak" width={788} height={204} />
          </a>
          <h1>
            Sahypa tapylmady <span>· Страница не найдена · Page not found</span>
          </h1>
          <p>Bu salgy boýunça sahypa ýok. Baş sahypa geçiň ýa-da GitHub-daky repozitoriýalara serediň.</p>
          <p lang="ru">Страницы по этому адресу нет. Перейдите на главную или посмотрите репозитории на GitHub.</p>
          <p lang="en">There is no page at this address. Go to the home page or look at the repositories on GitHub.</p>
          <div className="ctas">
            <a className="cta" href="/">Baş sahypa · Главная · Home →</a>
            <a className="cta quiet" href="https://github.com/Shapak-Apps">github.com/Shapak-Apps</a>
          </div>
        </div>
      </body>
    </html>
  );
}
