"use client";

import { useEffect } from "react";

/**
 * Поведение меню шапки поверх <details>: Escape и клик мимо закрывают, открытое
 * меню закрывает другое, переход по ссылке из мобильного меню закрывает его, а пока
 * оно открыто — страница под ним не прокручивается.
 * Без JS меню тоже работают: <details> открывается и закрывается сам.
 */
export function HeaderMenus() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".masthead");
    if (!header) return;
    const menus = Array.from(header.querySelectorAll<HTMLDetailsElement>("details"));
    const mobile = header.querySelector<HTMLDetailsElement>("details.mobile-menu");
    const root = document.documentElement;

    const close = (d: HTMLDetailsElement) => {
      d.open = false;
    };
    const syncScrollLock = () => {
      root.style.overflow = mobile?.open ? "hidden" : "";
    };

    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement;
      if (d.open) menus.forEach((m) => m !== d && close(m));
      syncScrollLock();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const open = menus.find((m) => m.open);
      if (!open) return;
      close(open);
      open.querySelector("summary")?.focus();
    };

    // Меню языков закрывает любой клик мимо него; мобильное — клик по затемнению.
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element;
      for (const m of menus) {
        if (!m.open) continue;
        const outside = m === mobile ? target.classList.contains("mobile-backdrop") : !m.contains(target);
        if (outside) close(m);
      }
    };

    // Ссылка-якорь ведёт на эту же страницу: меню надо убрать, иначе оно останется поверх.
    const onClick = (e: MouseEvent) => {
      if (mobile?.open && (e.target as Element).closest(".mobile-panel a")) {
        close(mobile);
        root.style.overflow = "";
      }
    };

    // Мобильное меню скрыто на широком экране — не оставлять его открытым и страницу заблокированной.
    const wide = window.matchMedia("(min-width: 861px)");
    const onWide = () => {
      if (wide.matches && mobile?.open) close(mobile);
    };

    menus.forEach((m) => m.addEventListener("toggle", onToggle));
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    header.addEventListener("click", onClick);
    wide.addEventListener("change", onWide);
    return () => {
      menus.forEach((m) => m.removeEventListener("toggle", onToggle));
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
      header.removeEventListener("click", onClick);
      wide.removeEventListener("change", onWide);
      root.style.overflow = "";
    };
  }, []);

  return null;
}
