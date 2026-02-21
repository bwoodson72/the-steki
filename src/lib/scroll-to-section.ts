const HEADER_OFFSET = 64; // matches the h-16 site header

/**
 * Scrolls to the section with the given id, accounting for the sticky
 * header offset, and updates the URL hash.
 *
 * Pass behavior="auto" when prefers-reduced-motion is active so the
 * browser skips the smooth animation and jumps instantly.
 */
export function scrollToSection(
  slug: string,
  behavior: ScrollBehavior = "smooth",
): void {
  const el = document.getElementById(slug);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior });
  history.replaceState(null, "", `#${slug}`);
}
