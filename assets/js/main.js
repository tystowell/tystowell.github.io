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

    /* Scale fixed-size embeds (e.g. a game with a fixed canvas) to the column width. */
    var scalers = document.querySelectorAll('.embed-scaler');
    function fitEmbeds() {
      scalers.forEach(function (box) {
        var frame = box.querySelector('iframe');
        frame.style.transform = 'scale(' + box.clientWidth / Number(box.dataset.embedWidth) + ')';
      });
    }
    if (scalers.length) { fitEmbeds(); window.addEventListener('resize', fitEmbeds); }

    /* Home-page carousel: arrow buttons move one card; buttons disable at the ends. */
    document.querySelectorAll('[data-carousel]').forEach(function (track) {
      var section = track.closest('section');
      var prev = section.querySelector('[data-carousel-prev]');
      var next = section.querySelector('[data-carousel-next]');
      function step() {
        var item = track.querySelector('.carousel-item');
        return item ? item.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : track.clientWidth;
      }
      function update() {
        var max = track.scrollWidth - track.clientWidth - 2;
        if (prev) prev.disabled = track.scrollLeft <= 2;
        if (next) next.disabled = track.scrollLeft >= max;
      }
      if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step() }); });
      if (next) next.addEventListener('click', function () { track.scrollBy({ left: step() }); });
      track.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); track.scrollBy({ left: step() }); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); track.scrollBy({ left: -step() }); }
      });
      track.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    });

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
