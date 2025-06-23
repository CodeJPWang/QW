
function currentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-lang]').forEach(el => {
<<<<<<< HEAD
=======
    // ✅ 强制覆盖 display 样式，确保切换语言时可见
>>>>>>> cd90e5c (🔄 同步更新)
    el.style.setProperty('display', el.dataset.lang === lang ? '' : 'none', 'important');
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

<<<<<<< HEAD
=======
  // ✅ 保证当 header/footer 加载完后也能重新应用语言状态
>>>>>>> cd90e5c (🔄 同步更新)
  document.addEventListener('partialsReady', () => applyLang(currentLang()));
}

document.addEventListener('DOMContentLoaded', initLang);
console.log('🌐 initLang 执行了');

