import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredItems } from "@/data/featured";
import { formatEUR } from "@/lib/format/format-eur";

export default function Home() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[calc(100svh-4rem)] items-center"
        style={{
          backgroundImage: "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Your daily Greek coffee ritual.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Freddo classics, warm pies, and a calm corner of Nea Ionia—made
              for regulars.
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
                className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Popular Picks ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Popular Picks
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              A few things regulars keep coming back for.
            </p>
          </div>

          <Button asChild variant="ghost" size="sm" className="shrink-0 text-muted-foreground hover:text-foreground">
            <Link href="/menu">Full menu →</Link>
          </Button>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3">
          {featuredItems.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6"
            >
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
            </li>
          ))}
        </ul>
      </section>

      {/* ── Hours & Location ──────────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-2">

          <div>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground">
              Hours
            </h2>
            <dl className="flex flex-col gap-2 text-sm">
              {[
                { day: "Monday – Friday", hours: "7:00 – 22:00" },
                { day: "Saturday",        hours: "8:00 – 23:00" },
                { day: "Sunday",          hours: "8:30 – 21:00" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{day}</dt>
                  <dd className="font-medium text-foreground">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground">
              Location
            </h2>
            <address className="flex flex-col gap-1 text-sm not-italic text-muted-foreground">
              <span className="font-medium text-foreground">Nea Ionia Coffee</span>
              <span>14 Agiou Meletiou</span>
              <span>Nea Ionia, Athens 142 31</span>
              <span>Greece</span>
            </address>
            <p className="mt-4 text-sm text-muted-foreground">
              Two blocks from Nea Ionia metro station, ground floor.
            </p>
          </div>

        </div>
      </section>

      {/* ── About Snapshot ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-prose">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
            A neighbourhood place since 2013.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            We opened on a quiet corner of Nea Ionia with a single espresso
            machine and a shared table. Over a decade later the machine has
            changed, the table hasn't. Everything we serve is roasted nearby,
            brewed to order, and meant to be drunk without rushing.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Read our story →
          </Link>
        </div>
      </section>

    </main>
  );
}
