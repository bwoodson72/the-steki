'use client'

import React, { useRef } from 'react'
import { useScroll, useTransform, useSpring, MotionValue } from 'motion/react'

// Extract the offset type directly from useScroll's parameter shape — no internal import needed
type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset']

interface UseParallaxOptions {
    speed?: number       // 0 = no movement, 1 = moves with scroll, negative = moves opposite direction
    smooth?: boolean     // wrap output in useSpring for silky movement
    offset?: ScrollOffset
}

export function useParallax({
                                speed = 0.3,
                                smooth = false,
                                offset = ['start end', 'end start'],
                            }: UseParallaxOptions = {}): {
    ref: React.RefObject<HTMLDivElement | null>  // React 19: useRef initialises to null
    y: MotionValue<string>
} {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    })

    const yRange = speed * 100
    const rawY = useTransform(scrollYProgress, [0, 1], [`${yRange}%`, `${-yRange}%`])

    // Always call useSpring unconditionally (Rules of Hooks) — then pick which value to return
    const springY = useSpring(rawY, { stiffness: 80, damping: 20 }) as unknown as MotionValue<string>

    return { ref, y: smooth ? springY : rawY }
}