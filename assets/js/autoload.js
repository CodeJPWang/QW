async function includeFragments () {
  if (window._fragmentsIncluded) return;
  window._fragmentsIncluded = true;

  const nodes = [...document.querySelectorAll('[data-include]')];
  await Promise.all(
    nodes.map(async n => {
      const html = await fetch(n.dataset.include).then(r => r.text());
      n.outerHTML = html;
    })
  );
  document.dispatchEvent(new CustomEvent('partialsReady'));
}

// 第一次调用，函数内部判断为 false，执行并设置 flag
includeFragments();