"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "./lenis-instance";

/**
 * Mounts Lenis once for the entire app. Render it as a leaf node inside
 * <body> in the root layout — it returns null (no DOM output).
 *
 * Lenis is NOT initialized when the user prefers reduced motion; in that
 * case scrollToSection() falls back to native window.scrollTo({ behavior: "auto" }).
 *
 * autoRaf: true  →  Lenis drives its own requestAnimationFrame loop;
 *                    no manual raf() call needed here.
 * anchors: false  →  Lenis does not intercept anchor clicks or auto-scroll
 *                    to the initial URL hash.
 */
export function LenisProvider() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const lenis = new Lenis({ autoRaf: true, anchors: false });
    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
