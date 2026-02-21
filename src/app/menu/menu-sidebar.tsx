"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/data/menu";

type SidebarCategory = {
  slug: CategorySlug;
  label: string;
};

export function MenuSidebar({ categories }: { categories: SidebarCategory[] }) {
  const slugs = categories.map((c) => c.slug);
  const active = useActiveSection(slugs);

  return (
    <aside className="hidden w-40 shrink-0 sm:block">
      <nav className="sticky top-24 flex flex-col">
        {categories.map(({ slug, label }) => {
          const isActive = active === slug;
          return (
            <button
              key={slug}
              type="button"
              onClick={() => scrollToSection(slug)}
              className={cn(
                "border-l-2 py-2 pl-3 text-left text-sm font-medium transition-colors",
                isActive
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
