"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/data/menu";

type SidebarCategory = {
  slug: CategorySlug;
  label: string;
};

export function MenuSidebar({ categories }: { categories: SidebarCategory[] }) {
  return (
    <aside className="hidden w-40 shrink-0 sm:block">
      <nav className="sticky top-24 flex flex-col gap-3">
        {categories.map(({ slug, label }) => (
          <button
            key={slug}
            type="button"
            onClick={() => scrollToSection(slug)}
            className={cn(
              "text-left text-sm font-medium text-muted-foreground",
              "transition-colors hover:text-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
