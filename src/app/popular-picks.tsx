"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { type FeaturedItem } from "@/data/featured";
import { formatEUR } from "@/lib/format/format-eur";

export function PopularPicks({ items }: { items: FeaturedItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {items.map((item, index) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
        >
          {/* Image */}
          <div className="relative h-36 w-full shrink-0 overflow-hidden">
            <Image
              src={item.sectionImage}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {item.categoryLabel}
            </span>

            <div className="flex flex-1 flex-col gap-1">
              <span className="font-semibold text-foreground">{item.name}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </span>
            </div>

            <span className="mt-auto text-sm font-semibold text-foreground">
              {formatEUR(item.priceEUR)}
            </span>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
