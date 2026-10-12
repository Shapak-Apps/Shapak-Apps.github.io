"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";
import "lenis/dist/lenis.css";

/** Скорость и кривая перехода между секциями: медленный старт, медленный финиш. */
const DURATION = 1.1;
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Главная: плавный переход между секциями `.screen` для мыши и тачпада.
 * Один жест колеса — мягкая доводка до следующей секции в сторону прокрутки (Lenis + Snap, режим lock).
 * PageDown / PageUp / пробел / стрелки и ссылки меню на секции — тот же переход.
 * На тач-экранах не включается: там прилипание делает CSS (home.css). При prefers-reduced-motion — тоже нет.
 */
export function SmoothSections() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // autoToggle: пока открыто меню и у html overflow:hidden (HeaderMenus), Lenis стоит.
    const lenis = new Lenis({ autoRaf: true, autoToggle: true });
    const snap = new Snap(lenis, {
      type: "lock",
      duration: DURATION,
      easing: easeInOutCubic,
      debounce: 100,
      // До соседней секции почти целый экран; по умолчанию (50%) Snap туда не доводит.
      // Секция выше экрана (низкое окно) листается свободно, доводка — у её конца.
      distanceThreshold: "100%",
      // Snap сам не снимает метку «идёт доводка» — без этого следующий жест колеса не доводит.
      onSnapComplete: () => {
        lenis.userData = {};
      },
    });

    // Точки доводки: верх страницы, начало каждой секции, самый низ (низ .home — это низ документа).
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".home .screen"));
    const page = document.querySelector<HTMLElement>(".home");
    snap.add(0);
    snap.addElements(sections, { align: "start" });
    if (page) snap.addElement(page, { align: "end" });
    // Шрифт заголовков догружается позже и меняет высоту страницы — пересчитать точки.
    document.fonts.ready.then(() => snap.resize());

    // force — на случай, если Lenis так и не запустится после закрытия меню.
    const go = (target: number | HTMLElement) =>
      lenis.scrollTo(target, { duration: DURATION, easing: easeInOutCubic, lock: true, force: true });

    // Точки остановки для клавиш: верх страницы, начало каждой секции, самый низ.
    const points = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return [0, ...sections.map((s) => Math.min(s.offsetTop, max)), max];
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.ctrlKey || e.altKey || e.metaKey) return;
      const el = e.target as HTMLElement;
      if (el.closest("input, textarea, select, [contenteditable]")) return;
      // Пробел на кнопке (например, <summary> меню языков) должен нажимать её, а не листать.
      if (e.key === " " && el.closest("summary, button, [role='button']")) return;
      // Открыто меню шапки — страницу под ним не листаем.
      if (document.querySelector(".masthead details[open]")) return;
      const down = e.key === "PageDown" || e.key === "ArrowDown" || (e.key === " " && !e.shiftKey);
      const up = e.key === "PageUp" || e.key === "ArrowUp" || (e.key === " " && e.shiftKey);
      if (!down && !up) return;
      const y = lenis.targetScroll;
      const list = points();
      const next = down ? list.find((p) => p > y + 2) : [...list].reverse().find((p) => p < y - 2);
      if (next === undefined) return;
      e.preventDefault();
      go(next);
    };

    // Ссылки на секции этой же страницы (/#people и т. п.): без прыжка браузера, тем же переходом.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest<HTMLAnchorElement>("a[href*='#']");
      if (!a) return;
      const url = new URL(a.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault();
      history.pushState(null, "", url.hash);
      // Ссылка из мобильного меню: Lenis ещё стоит и, запускаясь после закрытия меню, оборвал бы переход.
      if (lenis.isStopped) setTimeout(() => go(target), 80);
      else go(target);
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      snap.destroy();
      lenis.destroy();
    };
  }, []);

  return null;
}
