function currentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLang(lang) {
  localStorage.setItem('lang', lang);

  // 控制显示隐藏
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.dataset.lang === lang ? 'block' : 'none';
  });

  // 激活按钮状态
  document.querySelectorAll('[data-switch-lang]').forEach(btn => {
    btn.classList.toggle('font-bold', btn.dataset.switchLang === lang);
  });

  // 设置到 body 上
  document.body.setAttribute('data-current-lang', lang);
}

function bindLangSwitchEvents() {
  document.querySelectorAll('[data-switch-lang]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const lang = btn.dataset.switchLang;
      applyLang(lang);
    });
  });
}

function initLangSwitcher() {
  applyLang(currentLang());
  bindLangSwitchEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLangSwitcher);
} else {
  initLangSwitcher();
}

// 如果 header/footer 是异步加载的，也能触发语言更新
document.addEventListener('partialsReady', () => {
  applyLang(currentLang());
  bindLangSwitchEvents();
});
