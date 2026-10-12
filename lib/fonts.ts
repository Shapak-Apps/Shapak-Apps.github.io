import localFont from "next/font/local";

/**
 * Fira Sans Bold — шрифт подзаголовка баннера организации. Только для заголовков,
 * кнопок и названий; основной текст — системный.
 * Файл урезан до латиницы (с туркменскими буквами), кириллицы и знаков препинания;
 * лицензия SIL OFL 1.1 — app/fonts/OFL.txt.
 */
export const display = localFont({
  src: "../app/fonts/FiraSans-Bold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-display",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
});
