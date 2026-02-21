"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",  href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu",  href: "/menu" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center text-primary-foreground sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-primary-foreground/20 px-6 pb-4 pt-3 sm:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
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
