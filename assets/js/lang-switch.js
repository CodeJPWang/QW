function currentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== lang;
  });
  
  // 可选：切换语言按钮样式高亮（如果你愿意）
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

document.addEventListener('DOMContentLoaded', initLang);
