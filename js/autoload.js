// autoload.js  ⬇️ 彻底替换原文件
async function includeFragments () {
  const nodes = [...document.querySelectorAll('[data-include]')];
  await Promise.all(
    nodes.map(async n => {
      const html = await fetch(n.dataset.include).then(r => r.text());
      n.outerHTML = html;
    })
  );
  // ✨ 告诉别的脚本「局部已经插完」
  document.dispatchEvent(new CustomEvent('partialsReady'));
}
includeFragments();
