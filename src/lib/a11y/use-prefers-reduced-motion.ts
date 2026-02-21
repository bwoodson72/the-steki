import { useEffect, useState } from "react";

/**
 * Returns true when the user's OS has "Reduce motion" enabled.
 * Subscribes to media query changes so it stays in sync if the
 * preference is toggled while the page is open.
 *
 * Defaults to false on the server (SSR-safe).
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Sync immediately — useState(false) is the SSR default.
    setPrefersReduced(mql.matches);

    function onChange(e: MediaQueryListEvent) {
      setPrefersReduced(e.matches);
    }

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return prefersReduced;
}
