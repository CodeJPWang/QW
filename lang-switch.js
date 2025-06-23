/* language switcher */
function currentLang(){const m=location.search.match(/lang=(en|zh)/);return m?m[1]:'en';}
function applyLang(l){const u=new URL(location.href);u.searchParams.set('lang',l);history.replaceState({},'',u);document.documentElement.lang=l;document.querySelectorAll('[data-lang]').forEach(el=>{el.hidden=el.dataset.lang!==l});}
function initLang(){applyLang(currentLang());document.body.addEventListener('click',e=>{const t=e.target; if(t.dataset.switchLang){e.preventDefault();applyLang(t.dataset.switchLang);}});}
document.addEventListener('DOMContentLoaded',initLang);