"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/lib/a11y/use-prefers-reduced-motion";

// ─── Parallax constants ───────────────────────────────────────────────────────
// How far each layer travels as the hero scrolls off screen (px).
// Background extends by BG_BLEED below its container so the bottom
// edge is never revealed as translateY goes negative.
const BG_BLEED = 30; // must equal |min bgY| at scrollYProgress=1

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background slides up slightly (slower than scroll) → classic parallax.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -BG_BLEED]);

  // Foreground moves a little less and gains a hair of scale at the root.
  const fgY     = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const fgScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[75vh] items-center overflow-hidden"
    >

      {/* ── Layer 1: Background image ─────────────────────────────────── */}
      {/*
        Extends BG_BLEED px below the section so no gap appears when
        translateY is at its most negative value.
        next/image `fill` requires the parent to be position:absolute
        with explicit dimensions — both satisfied here.
      */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0"
        style={{
          top: 0,
          height: `calc(100% + ${BG_BLEED}px)`,
          willChange: "transform",
          y: reducedMotion ? 0 : bgY,
        }}
      >
        <Image
          src="/images/hero-background.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* ── Layer 2: Gradient overlay ─────────────────────────────────── */}
      {/*
        Left side fades from bg-background/90 → transparent so the text
        block is readable against the warm-white token colour. Right side
        stays clear so the foreground cutout reads against the photo.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

      {/* ── Layer 3: Foreground cutout ────────────────────────────────── */}
      {/*
        Container spans the full section height (inset-y-0) and the right
        60 % of the section width. Using next/image `fill` + object-contain
        + object-right-bottom lets the PNG scale to the largest size that
        fits the container while keeping its aspect ratio and anchoring the
        base of the figure to the bottom-right corner.
        Hidden below md so narrow viewports stay text-only.
      */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden md:block md:w-[60%] lg:w-[55%]"
        style={{
          willChange: "transform",
          transformOrigin: "bottom center",
          y:     reducedMotion ? 0 : fgY,
          scale: reducedMotion ? 1 : fgScale,
        }}
      >
        <Image
          src="/images/hero-foreground.png"
          alt=""
          fill
          className="object-contain object-right-bottom"
          priority
          sizes="(max-width: 768px) 0vw, (max-width: 1024px) 60vw, 55vw"
        />
      </motion.div>

      {/* ── Layer 4: Content ─────────────────────────────────────────── */}
      {/*
        relative + z-10 ensures text sits above every absolute layer.
        Text tokens use foreground/muted-foreground (dark on light
        gradient) rather than primary-foreground (white on dark overlay).
      */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-lg">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your daily Greek coffee ritual.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
              className="border-border bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/40"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
