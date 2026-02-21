import { menuCategories } from "@/data/menu";

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-4xl font-semibold tracking-tight text-foreground">
        Menu
      </h1>

      <div className="flex gap-16">
        {/* Sidebar */}
        <aside className="hidden w-40 shrink-0 sm:block">
          <nav className="sticky top-24 flex flex-col gap-3">
            {menuCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Sections */}
        <div className="flex flex-1 flex-col gap-20">
          {menuCategories.map((cat) => (
            <section key={cat.slug} id={cat.slug}>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">
                {cat.label}
              </h2>

              <ul className="flex flex-col divide-y divide-border">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-foreground">
                      €{item.priceEUR.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
