(function () {
  // ---------- язык: TK по умолчанию, выбор запоминается ----------
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

  // ---------- появление блоков при прокрутке ----------
  // Без JS и при prefers-reduced-motion всё видно сразу (см. CSS .reveal).
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
})();
