
async function includeFragments () {
  const nodes = [...document.querySelectorAll('[data-include]')];
  await Promise.all(
    nodes.map(async n => {
      const html = await fetch(n.dataset.include).then(r => r.text());
      n.outerHTML = html;
    })
  );
  document.dispatchEvent(new CustomEvent('partialsReady'));
}
includeFragments();
