// Progressive interactions: content, navigation and original images work
// without this script. No requests or persistent browser storage are added.

// Native details remains the mobile menu's no-JavaScript control.
document.querySelectorAll('details.mobile-menu').forEach(menu => {
  const summary = menu.querySelector('summary');
  menu.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !menu.open) return;
    event.preventDefault();
    menu.open = false;
    summary?.focus({preventScroll: true});
  });
  menu.addEventListener('click', event => {
    const link = event.target.closest?.('a');
    if (link && menu.contains(link)) menu.open = false;
  });
});

// Every gallery item keeps its ordinary image href as the fallback.
(() => {
  const links = [...document.querySelectorAll('[data-gallery]')];
  const dialog = document.querySelector('#image-viewer');
  if (!links.length || !dialog || typeof dialog.showModal !== 'function') return;

  const photo = dialog.querySelector('img');
  const count = dialog.querySelector('[data-count]');
  const close = dialog.querySelector('[data-close]');
  const previous = dialog.querySelector('[data-prev]');
  const next = dialog.querySelector('[data-next]');
  const original = dialog.querySelector('[data-original]');
  if (!photo || !count || !close) return;

  let current = 0;
  let opener;
  function show(index) {
    current = (index + links.length) % links.length;
    const link = links[current];
    photo.src = link.href;
    photo.alt = link.querySelector('img')?.alt || link.getAttribute('aria-label') || '';
    count.textContent = `${dialog.dataset.image} ${current + 1} ${dialog.dataset.of} ${links.length}`;
    if (original) original.href = link.href;
  }

  links.forEach((link, index) => link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    // Prevent navigation only after the native dialog actually opens.
    // Unsupported or failed dialogs retain the original image link.
    try {
      show(index);
      if (!dialog.open) dialog.showModal();
    } catch {
      return;
    }
    event.preventDefault();
    opener = link;
    close.focus({preventScroll: true});
  }));

  close.addEventListener('click', () => dialog.close());
  if (previous) {
    previous.disabled = links.length < 2;
    previous.addEventListener('click', () => show(current - 1));
  }
  if (next) {
    next.disabled = links.length < 2;
    next.addEventListener('click', () => show(current + 1));
  }
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    show(current + (event.key === 'ArrowLeft' ? -1 : 1));
  });
  // Escape uses the dialog's native cancel/close behavior and focus trap.
  dialog.addEventListener('close', () => {
    if (opener?.isConnected) opener.focus({preventScroll: true});
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
})();

// The table of contents remains a set of native anchors. When supported,
// highlight the section being read without changing the URL or scrolling it.
(() => {
  if (!('IntersectionObserver' in window)) return;
  const links = [...document.querySelectorAll('.policy-sidebar a[href^="#"]')];
  const items = links.map(link => {
    try { return {link, section: document.getElementById(decodeURIComponent(link.hash.slice(1)))}; }
    catch { return {link, section: null}; }
  }).filter(item => item.section);
  if (!items.length) return;

  function update() {
    const readingLine = window.innerHeight * .3;
    let current = items[0];
    for (const item of items) {
      if (item.section.getBoundingClientRect().top <= readingLine) current = item;
    }
    for (const item of items) {
      if (item === current) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    }
  }
  const observer = new IntersectionObserver(update, {rootMargin: '-20% 0px -70% 0px', threshold: 0});
  items.forEach(item => observer.observe(item.section));
  update();
})();
