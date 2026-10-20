// Progressive image viewer. Every image remains a normal link without JavaScript.
const galleryLinks = [...document.querySelectorAll('[data-gallery]')];
if (galleryLinks.length && typeof HTMLDialogElement !== 'undefined') {
  const dialog = document.querySelector('#image-viewer');
  const photo = dialog.querySelector('img');
  const count = dialog.querySelector('[data-count]');
  const close = dialog.querySelector('[data-close]');
  let current = 0;
  let opener;
  function show(index) {
    current = (index + galleryLinks.length) % galleryLinks.length;
    photo.src = galleryLinks[current].href;
    photo.alt = galleryLinks[current].querySelector('img').alt;
    count.textContent = `${dialog.dataset.image} ${current + 1} ${dialog.dataset.of} ${galleryLinks.length}`;
  }
  galleryLinks.forEach((link, index) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); opener = link; show(index); dialog.showModal(); close.focus();
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
  dialog.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  dialog.addEventListener('close', () => opener?.focus());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
}
