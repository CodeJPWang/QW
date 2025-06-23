/* lang-switch.js  ⬇️ 彻底替换原文件 */
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
  // 初次应用
  applyLang(currentLang());

  // 监听点击带 data-switch-lang 的链接 / 按钮
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-switch-lang]');
    if (t) {
      e.preventDefault();
      applyLang(t.dataset.switchLang);
    }
  });

  // header/footer 动态插入完成后再刷一次
  document.addEventListener('partialsReady', () => applyLang(currentLang()));
}

document.addEventListener('DOMContentLoaded', initLang);
