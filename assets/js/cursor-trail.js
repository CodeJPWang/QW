
(() => {
  const css = `
  .cursor-dot,.cursor-trail{position:fixed;top:0;left:0;pointer-events:none;border-radius:50%;mix-blend-mode:difference;}
  .cursor-dot{width:10px;height:10px;background:#0ea5e9;transition:transform .05s ease-out;}
  .cursor-trail{width:6px;height:6px;background:#14b8a6;opacity:.8;}
  @media(pointer:coarse){.cursor-dot,.cursor-trail{display:none;}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.append(dot);

  const trails = Array.from({ length: 18 }, () => {
    const d = document.createElement('div');
    d.className = 'cursor-trail';
    document.body.append(d);
    return d;
  });

  let ptr = 0;
  window.addEventListener('pointermove', (e) => {
    const { clientX: x, clientY: y } = e;
    dot.style.transform = `translate3d(${x - 5}px,${y - 5}px,0)`;

    const t = trails[(ptr = (ptr + 1) % trails.length)];
    t.style.transition = 'none';
    t.style.transform = `translate3d(${x - 3}px,${y - 3}px,0)`;
    requestAnimationFrame(() => (t.style.transition = 'transform .4s,opacity .4s'));
    t.style.opacity = 0;
  });
})();
