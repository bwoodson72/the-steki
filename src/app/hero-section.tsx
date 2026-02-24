"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/lib/a11y/use-prefers-reduced-motion";
import { useParallax } from "@/lib/useParallax";

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  // Each layer gets its own parallax instance with different speeds
  const { ref: bgRef, y: bgY } = useParallax({ speed: 0.1, smooth: true });
  const { ref: textRef, y: textY } = useParallax({ speed: 0.3, smooth: true });
  const { ref: fgRef, y: fgY } = useParallax({ speed: 0.2, smooth: true });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* ── Layer 1: Background image ─────────────────────────────────── */}
      <motion.div
        ref={bgRef}
        aria-hidden
        className="absolute inset-0 min-h-[calc(100vh+88px)]"
        style={{
          y: reducedMotion ? 0 : bgY,
        }}
      >
        <Image
          src="/images/hero-background.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Layer 2: Gradient overlay ─────────────────────────────────── */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/25 to-transparent" />

      {/* ── Layer 3: Hero text ─────────────────────────────────────────── */}
      <motion.div
        ref={textRef}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20"
        style={{
          y: reducedMotion ? 0 : textY,
        }}
      >
        <div className="max-w-lg">
          <h1 className="type-hero text-background text-shadow-md text-shadow-foreground">
            Your daily Greek coffee ritual.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-background/80 sm:text-lg text-shadow-foreground text-shadow-md">
            Freddo classics, warm pies, and a calm corner of Nea Ionia—made for
            regulars.
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
              className="border-background bg-secondary-foreground/10 text-background backdrop-blur-sm hover:bg-background/20"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* ── Layer 4: Foreground cutout ────────────────────────────────── */}
      <motion.div
        ref={fgRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-1/2 h-[200%]"
        style={{
          y: reducedMotion ? 0 : fgY,
        }}
      >
        <Image
          src="/images/hero-foreground.webp"
          alt=""
          fill
          className="object-cover object-center"
          loading="eager"
          sizes="100vw"
        />
      </motion.div>
    </section>
  );
}
