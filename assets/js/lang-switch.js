function currentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.dataset.lang === lang) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });

  document.querySelectorAll('[data-switch-lang]').forEach(btn => {
    btn.classList.toggle('font-bold', btn.dataset.switchLang === lang);
  });

  // ✅ 方法三：确保 Logo 显示
  const logoSpan = document.querySelector('#header-placeholder header a.flex span');
  if (logoSpan) {
    logoSpan.style.opacity = '1';
    logoSpan.style.visibility = 'visible';
    logoSpan.style.color = 'white';
    logoSpan.style.display = 'inline';
  }
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
