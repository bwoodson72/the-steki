import Image from "next/image";
import { menuCategories } from "@/data/menu";
import { formatEUR } from "@/lib/format/format-eur";
import { MenuSidebar } from "./menu-sidebar";

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="type-h1 mb-12 text-foreground">What we serve</h1>

      <div className="flex gap-16">
        <MenuSidebar
          categories={menuCategories.map(({ slug, label }) => ({ slug, label }))}
        />

        {/* Sections */}
        <div className="flex flex-1 flex-col gap-20">
          {menuCategories.map((cat) => (
            <section key={cat.slug} id={cat.slug}>
              {/* Section header band */}
              <div className="relative mb-6 h-44 overflow-hidden rounded-lg">
                <Image
                  src={cat.sectionImage}
                  alt=""
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="calc(100vw - 3rem)"
                />

                {/* Token-based overlay — bg-foreground at reduced opacity */}
                <div className="absolute inset-0 bg-foreground/40" />

                {/* Title sits above the overlay */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h2 className="type-h2 text-primary-foreground text-shadow-md text-shadow-foreground">{cat.label}</h2>
                </div>
              </div>

              {/* Items list */}
              <ul className="flex flex-col divide-y divide-border">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-6 py-5"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                    <span className="shrink-0 text-sm font-medium text-foreground">
                      {formatEUR(item.priceEUR)}
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
