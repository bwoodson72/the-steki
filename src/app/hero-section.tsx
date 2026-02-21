"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/lib/a11y/use-prefers-reduced-motion";

/**
 * How far (px) the background image travels as the hero scrolls off screen.
 * The background div is extended by 2× this value so edges never become
 * visible: top starts -OFFSET above the section and bottom ends OFFSET below.
 */
const PARALLAX_OFFSET = 80;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Track from when the section's top hits the viewport top
    // to when the section's bottom hits the viewport top.
    offset: ["start start", "end start"],
  });

  // Positive translateY → background moves DOWN relative to the section.
  // The section itself moves UP as the user scrolls, so this makes the
  // background travel at a slower apparent speed — the parallax effect.
  const y = useTransform(scrollYProgress, [0, 1], [0, PARALLAX_OFFSET]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      {/* ── Parallax background layer ────────────────────────────────── */}
      {/* Extends OFFSET px above + below the section so no edge is revealed
          as the transform plays out. GPU-composited via willChange. */}
      <motion.div
        aria-hidden
        className="absolute left-0 right-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hero.jpg)",
          top: -PARALLAX_OFFSET,
          height: `calc(100% + ${PARALLAX_OFFSET * 2}px)`,
          willChange: "transform",
          // Reduced motion: pass static 0 — no movement at all.
          y: reducedMotion ? 0 : y,
        }}
      />

      {/* ── Overlay ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* ── Content ─────────────────────────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Your daily Greek coffee ritual.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Freddo classics, warm pies, and a calm corner of Nea Ionia—made
            for regulars.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/menu">View Menu</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
