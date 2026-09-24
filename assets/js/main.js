/* Theme toggle + project filters. The site works without this file; it only adds polish. */
(function () {
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function resolvedTheme() {
    return root.dataset.theme || (media.matches ? 'dark' : 'light');
  }
  function syncResolved() { root.dataset.themeResolved = resolvedTheme(); }
  syncResolved();
  media.addEventListener && media.addEventListener('change', syncResolved);

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = resolvedTheme() === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch (e) {}
        syncResolved();
      });
    }

    /* Filters on /work/ — also honours #category in the URL. */
    var chips = document.querySelectorAll('.filters .chip');
    var cards = document.querySelectorAll('[data-filter-target] .card');
    if (!chips.length) return;

    function apply(filter) {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.filter === filter)); });
      cards.forEach(function (card) { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
    }
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        apply(chip.dataset.filter);
        history.replaceState(null, '', chip.dataset.filter === 'all' ? location.pathname : '#' + chip.dataset.filter);
      });
    });
    var fromHash = location.hash.slice(1);
    if (fromHash && document.querySelector('.chip[data-filter="' + CSS.escape(fromHash) + '"]')) apply(fromHash);
  });
})();
