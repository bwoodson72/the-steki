/**
 * Module-level singleton holding the active Lenis instance.
 *
 * Using a module singleton (rather than React context) lets plain utility
 * functions like scrollToSection() access Lenis without being hooks.
 *
 * SSR-safe: the variable is just null on the server; no browser APIs are
 * called at module evaluation time.
 */
import type Lenis from "lenis";

let instance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return instance;
}

export function setLenis(lenis: Lenis | null): void {
  instance = lenis;
}
