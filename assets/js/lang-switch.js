function currentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.dataset.lang === lang ? '' : 'none';
    //el.style.setProperty('display', el.dataset.lang === lang ? 'block' : 'none', 'important');
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

