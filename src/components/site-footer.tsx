import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",  href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu",  href: "/menu" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card w-full">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">

        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <p className="text-sm font-medium text-foreground">
            © {new Date().getFullYear()} The Steki
          </p>
          <p className="text-sm text-muted-foreground">Athens, Greece</p>
        </div>

        <nav className="flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

      </div>
    </footer>
  );
}
