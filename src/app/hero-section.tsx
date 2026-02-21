"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/lib/a11y/use-prefers-reduced-motion";

// ─── Parallax constants ───────────────────────────────────────────────────────
// Each layer extends below its container by its BLEED value so the bottom
// edge is never revealed as translateY goes negative.
// Foreground travels twice as far as background → stronger depth effect.
const BG_BLEED = 30; // background travels 30 px (slow)
const FG_BLEED = 60; // foreground travels 60 px (fast)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background slides up slowly → classic parallax.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -BG_BLEED]);

  // Foreground slides up faster → sits in front and creates depth.
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -FG_BLEED]);

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
      <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/50 to-transparent" />

      {/* ── Layer 3: Foreground cutout ────────────────────────────────── */}
      {/*
        Fills the entire hero. Extends FG_BLEED px below the section so
        the bottom edge stays hidden at max translateY. Moving faster than
        the background (FG_BLEED > BG_BLEED) creates the depth illusion.
        object-contain preserves the PNG's transparency and aspect ratio.
      */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0"
        style={{
          top: 0,
          height: `calc(100% + ${FG_BLEED}px)`,
          willChange: "transform",
          y: reducedMotion ? 0 : fgY,
        }}
      >
        <Image
          src="/images/hero-foreground.png"
          alt=""
          fill
          className="object-contain object-bottom"
          priority
          sizes="100vw"
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
