const HEADER_OFFSET = 64; // matches the h-16 site header

export function scrollToSection(slug: string): void {
  const el = document.getElementById(slug);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", `#${slug}`);
}
