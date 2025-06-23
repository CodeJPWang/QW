async function includeFragments(){
  const nodes=[...document.querySelectorAll('[data-include]')];
  await Promise.all(nodes.map(async n=>{
    const url=n.dataset.include;
    const html=await fetch(url).then(r=>r.text());
    n.outerHTML=html;
  }));
}
includeFragments();