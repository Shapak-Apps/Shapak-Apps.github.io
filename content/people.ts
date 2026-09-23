import type { L } from "@/lib/i18n";

export type Member = {
  name: string;
  github: string;
  role: L;
  extra?: { href: string; label: string };
};

/** Члены организации — порядок как в People на GitHub. */
export const members: Member[] = [
  {
    name: "Seydi Charyyev",
    github: "TheSeydiCharyyev",
    role: {
      tk: "Full Stack JavaScript inženeri · React Native",
      ru: "Full Stack JavaScript-инженер · React Native",
      en: "Full Stack JavaScript Engineer · React Native",
    },
  },
  {
    name: "Aýnazar Sylyýew",
    github: "aynazar-sylyyew-dev",
    role: {
      tk: "Programma inženeri · Android, web, kross-platforma",
      ru: "Инженер-программист · Android, веб, кроссплатформа",
      en: "Software Engineer · Android, web, cross-platform",
    },
  },
  {
    name: "Bahram Myradow",
    github: "Bahram2006",
    role: {
      tk: "Fullstack JavaScript inženeri · React Native",
      ru: "Fullstack JavaScript-инженер · React Native",
      en: "Fullstack JavaScript Engineer · React Native",
    },
    extra: { href: "https://myradow-bahram-portfolio.vercel.app/", label: "Portfolio" },
  },
  {
    name: "Merdan Jumamyradow",
    github: "fihdeveloper",
    role: {
      tk: "Web we mobil programmaçy · JavaScript, Dart, Go",
      ru: "Веб- и мобильный разработчик · JavaScript, Dart, Go",
      en: "Web and mobile developer · JavaScript, Dart, Go",
    },
  },
  {
    name: "Ahmed Batyrov",
    github: "ahmedbatyrovv",
    role: {
      tk: "Web programmaçy · Node.js, React",
      ru: "Веб-разработчик · Node.js, React",
      en: "Web developer · Node.js, React",
    },
  },
];
