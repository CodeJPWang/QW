function currentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang-set', 'true');

  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.dataset.lang === lang) {
      el.style.removeProperty('display');
    } else {
      el.style.setProperty('display', 'none');
    }
  });

  document.querySelectorAll('[data-switch-lang]').forEach(btn => {
    btn.classList.toggle('font-bold', btn.dataset.switchLang === lang);
  });
}

function initLang() {
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}

