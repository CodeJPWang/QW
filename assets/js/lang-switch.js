function currentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);

  // 切换所有 data-lang 元素的可见性
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.dataset.lang === lang) {
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });
}

function initLang() {
  // 应用当前语言
  applyLang(currentLang());

  // 点击语言切换按钮
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-switch-lang]');
    if (t) {
      e.preventDefault();
      applyLang(t.dataset.switchLang);
    }
  });

  // 用于支持 partials 加载完成时重新应用语言（你原来已有）
  document.addEventListener('partialsReady', () => applyLang(currentLang()));
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', initLang);
