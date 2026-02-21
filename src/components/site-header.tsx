"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutList, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuCategories } from "@/data/menu";
import { scrollToSection } from "@/lib/scroll-to-section";

const NAV_LINKS = [
  { label: "Home",  href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu",  href: "/menu" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const onMenuPage = pathname === "/menu";

  function handleCategorySelect(slug: string) {
    setSheetOpen(false);
    // Small delay lets the sheet begin closing before the scroll fires,
    // so the layout shift doesn't affect the scroll target calculation.
    setTimeout(() => scrollToSection(slug), 150);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Wordmark */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-primary-foreground"
        >
          Nea Ionia Coffee
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === href
                  ? "text-primary-foreground"
                  : "text-primary-foreground/65 hover:text-primary-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 sm:hidden">

          {/* Categories sheet — only on /menu */}
          {onMenuPage && (
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Browse menu categories"
                  className="flex items-center justify-center text-primary-foreground"
                >
                  <LayoutList className="size-5" />
                </button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64 p-0">
                <SheetHeader className="border-b border-border px-6 py-5">
                  <SheetTitle className="text-left text-base font-semibold">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col px-4 py-4">
                  {menuCategories.map(({ slug, label }) => (
                    <button
                      key={slug}
                      type="button"
                      onClick={() => handleCategorySelect(slug)}
                      className="rounded-md px-2 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}

          {/* Main nav toggle */}
          <button
            type="button"
            className="flex items-center justify-center text-primary-foreground"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {navOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {navOpen && (
        <nav className="flex flex-col gap-1 border-t border-primary-foreground/20 px-6 pb-4 pt-3 sm:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setNavOpen(false)}
              className={cn(
                "py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "text-primary-foreground"
                  : "text-primary-foreground/65 hover:text-primary-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
