
function currentLang () {
  return localStorage.getItem('lang') || 'en';
}

function applyLang (l) {
  localStorage.setItem('lang', l);
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== l;
  });
}

function initLang () {
  applyLang(currentLang());
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-switch-lang]');
    if (t) {
      e.preventDefault();
      applyLang(t.dataset.switchLang);
    }
  });
  document.addEventListener('partialsReady', () => applyLang(currentLang()));
}

document.addEventListener('DOMContentLoaded', initLang);
