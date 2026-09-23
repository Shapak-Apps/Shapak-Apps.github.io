"use client";

import { useEffect, useState } from "react";

// Тот же ключ, что у прежнего сайта: накопленный кеш посетителей не теряется.
const KEY = "shapak-stars";
const TTL = 60 * 60 * 1000;

type Cache = Record<string, { v: number; t: number }>;

function readCache(): Cache {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function writeCache(repo: string, v: number) {
  try {
    const cache = readCache();
    cache[repo] = { v, t: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {}
}

/**
 * Живое число звёзд репозитория. Сначала показывает кеш (даже устаревший),
 * в сеть идёт, только если кеш старше часа. При ошибке — пусто, без числа:
 * анонимный лимит GitHub API — 60 запросов в час на IP.
 */
export function StarCount({ repo }: { repo: string }) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const cached = readCache()[repo];
    if (cached) setStars(cached.v);
    if (cached && Date.now() - cached.t < TTL) return;

    let alive = true;
    fetch(`https://api.github.com/repos/${repo}`, { headers: { Accept: "application/vnd.github+json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!d || typeof d.stargazers_count !== "number") return;
        writeCache(repo, d.stargazers_count);
        if (alive) setStars(d.stargazers_count);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [repo]);

  return <b className="n">{stars === null ? null : `★ ${stars}`}</b>;
}
