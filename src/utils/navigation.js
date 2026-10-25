// Run after the destination is mounted, or when reselecting the current link.
export function scrollToDestination(hash = '') {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  const target = document.getElementById(hash.slice(1));
  if (!target) return;

  const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 0;
  window.scrollTo({
    // Scroll into the contact section's own padding, hiding the previous section.
    top: window.scrollY + target.getBoundingClientRect().top - navHeight + (hash === '#contact' ? 24 : 0),
    behavior: 'instant',
  });
}
