import { getLenis } from "./scroll/lenis-instance";

const HEADER_OFFSET = 64; // matches the h-16 site header

/**
 * Scrolls to the section with the given slug, accounting for the sticky
 * header offset, and updates the URL hash.
 *
 * Priority:
 *   1. Lenis (smooth, if initialized — i.e. prefers-reduced-motion is off)
 *   2. Native window.scrollTo() fallback (behavior param respected)
 *
 * The `behavior` param only affects the native fallback; when Lenis is
 * active it manages its own easing. Pass "auto" for the reduced-motion
 * path so the native fallback jumps instantly.
 */
export function scrollToSection(
  slug: string,
  behavior: ScrollBehavior = "smooth",
): void {
  const el = document.getElementById(slug);
  if (!el) return;

  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(el, { offset: -HEADER_OFFSET });
    history.replaceState(null, "", `#${slug}`);
    return;
  }

  // Native fallback — used when Lenis is not initialized (reduced motion).
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior });
  history.replaceState(null, "", `#${slug}`);
}
