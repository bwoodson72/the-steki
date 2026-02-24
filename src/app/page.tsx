import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { featuredItems } from "@/data/featured";
import { HeroSection } from "./hero-section";
import { PopularPicks } from "./popular-picks";

export default function Home() {
  return (
    <main>
      <HeroSection />

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

        <PopularPicks items={featuredItems} />
      </section>

      {/* ── Hours & Location ──────────────────────────────────────────── */}
      <section className="border-t border-border bg-linear-to-br from-amber-50/60 via-card to-card">
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-prose">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              A neighbourhood place since 2013.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We opened on a quiet corner of Nea Ionia with a single espresso
              machine and a shared table. Over a decade later the machine has
              changed, the table hasn&#39;t. Everything we serve is roasted nearby,
              brewed to order, and meant to be drunk without rushing.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Read our story →
            </Link>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-xl">
            <Image
              src="/images/cafe.avif"
              alt="Inside Nea Ionia Coffee"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
