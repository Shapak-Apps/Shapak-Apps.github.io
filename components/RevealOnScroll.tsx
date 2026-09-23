"use client";

import { useEffect } from "react";

/**
 * Элементы `.reveal` ниже первого экрана плавно появляются при прокрутке.
 * То, что уже видно, не трогаем — ничего не мигает после загрузки JS.
 * Без JS и при prefers-reduced-motion всё видно сразу.
 */
export function RevealOnScroll({ selector = ".reveal" }: { selector?: string }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const below = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    if (!below.length) return;

    below.forEach((el) => el.classList.add("pending"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.remove("pending");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    below.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);

  return null;
}
