import { useEffect, useRef, useState } from "react";

const HEADER_OFFSET = 64; // matches h-16 site header

/**
 * Returns the slug of the section currently visible at the top of the
 * viewport (adjusted for the sticky header). Updates on scroll via RAF.
 *
 * Active rule: last section whose top edge is at or above HEADER_OFFSET.
 * Assumes sections appear in DOM order matching the slugs array.
 */
export function useActiveSection(slugs: string[]): string | null {
  const [active, setActive] = useState<string | null>(slugs[0] ?? null);

  // Keep a ref so the scroll handler always sees the current slugs
  // without needing to re-register the listener.
  const slugsRef = useRef(slugs);
  slugsRef.current = slugs;

  useEffect(() => {
    let rafId: number | null = null;

    function computeActive() {
      let current: string | null = null;
      for (const slug of slugsRef.current) {
        const el = document.getElementById(slug);
        if (!el) continue;
        // Once a section's top is at or above the threshold it becomes
        // the candidate; the last such section wins.
        if (el.getBoundingClientRect().top <= HEADER_OFFSET + 1) {
          current = slug;
        } else {
          break; // sections are in DOM order — safe to stop early
        }
      }
      setActive(current ?? slugsRef.current[0] ?? null);
    }

    function onScroll() {
      if (rafId !== null) return; // already queued
      rafId = requestAnimationFrame(() => {
        rafId = null;
        computeActive();
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    computeActive(); // set initial state without waiting for a scroll event

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []); // empty — intentional; slugsRef keeps the ref current

  return active;
}
