(function () {
  // ---------- язык: TK по умолчанию, выбор запоминается ----------
  function initLang() {
    var root = document.documentElement;
    var btns = document.querySelectorAll('[data-lang-btn]');

    function set(lang) {
      root.dataset.lang = lang;
      root.setAttribute('lang', lang);
      btns.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang));
      });
      try { localStorage.setItem('shapak-lang', lang); } catch (e) {}
    }

    var saved = null;
    try { saved = localStorage.getItem('shapak-lang'); } catch (e) {}
    set(saved === 'en' || saved === 'ru' ? saved : 'tk');

    btns.forEach(function (b) {
      b.addEventListener('click', function () { set(b.dataset.langBtn); });
    });
  }

  // ---------- появление блоков при прокрутке ----------
  // Без JS и при prefers-reduced-motion всё видно сразу (см. CSS .reveal).
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
  }

  // ---------- звёзды GitHub: живые, кеш на час, при ошибке просто без числа ----------
  function initStars() {
    var stars = document.querySelectorAll('[data-repo]');
    if (!stars.length || !window.fetch) return;
    var KEY = 'shapak-stars', TTL = 60 * 60 * 1000, cache = {}, now = Date.now();
    try { cache = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
    stars.forEach(function (a) {
      var repo = a.dataset.repo, n = a.querySelector('.n'), c = cache[repo];
      function show(v) { if (typeof v === 'number') n.textContent = '★ ' + v; }
      if (c) show(c.v);                       // сначала кеш, даже устаревший
      if (c && now - c.t < TTL) return;       // свежий кеш — в сеть не ходим
      fetch('https://api.github.com/repos/' + repo, { headers: { Accept: 'application/vnd.github+json' } })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (!d || typeof d.stargazers_count !== 'number') return;
          cache[repo] = { v: d.stargazers_count, t: now };
          show(d.stargazers_count);
          try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch (e) {}
        })
        .catch(function () {});
    });
  }

  initLang();
  initReveal();
  initStars();
})();
