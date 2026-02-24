import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SECTIONS = [
  {
    id: "our-story",
    heading: "Our Story",
    body: [
      "The Steki opened in 2013, started by two siblings who grew up watching their grandfather run a kafeneio on the same street. He kept it simple: Greek coffee, good company, a table where the morning could stretch as long as it needed to. That rhythm is still what we're after.",
      "When we took over the corner unit we spent three months stripping it back — plaster walls, a counter made from a single slab of oak, two small rooms that let the light come through in the afternoon. We brought in an espresso machine and kept the briki. Neither was going anywhere.",
      "Over a decade in, some of the same people still order the same thing. That feels like the right measure of success.",
    ],
  },
  {
    id: "what-we-serve",
    heading: "What We Serve",
    body: [
      "The coffee bar runs from early morning to late evening. Espresso-based drinks sit alongside traditional Greek coffee — freddo cappuccino, frappe, filter, cold brew — brewed from rotating single-origin beans we select twice a year.",
      "The counter food is short and changes with what's good. There's always a cheese pie, usually a spinach pie, loukoumades when the oil is fresh, and bougatsa throughout the day. Breakfast plates are simple: yoghurt with honey and walnuts, eggs with feta, toast with olive oil.",
      "We don't try to be everything. The menu is exactly as long as it needs to be.",
    ],
  },
  {
    id: "the-space",
    heading: "The Space",
    body: [
      "Off-white walls, Greek-blue woodwork on the window frames, and as much natural light as the street allows. We kept the original terrazzo floor and added a handful of mismatched chairs that turned out to suit the room perfectly.",
      "There are two rooms: the front faces the street and gets the morning sun; the back is quieter, good for an hour with a book or a slow breakfast. A small courtyard opens in summer. Dogs are welcome.",
      "We built the space to be calm. You can stay as long as your cup lasts — and order another when it does.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* ── Page header with optional image ───────────────────────────── */}
      <div className="relative flex h-56 items-end sm:h-72">
        <Image
            src="/images/cafe.avif"
            alt=""
            fill
            className="object-cover object-[center_30%]"
            priority
            fetchPriority="high"
            quality={45}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1152px"
        />

        {/* Overlay always rendered; image absent → shows solid muted tone */}
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-8">
          <h1 className="type-h1 text-primary-foreground">Since 2013</h1>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_280px]">

          {/* Main prose */}
          <div className="flex flex-col gap-16">
            {SECTIONS.map(({ id, heading, body }) => (
              <section key={id} id={id}>
                <h2 className="mb-5 type-h2 text-foreground">
                  {heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="max-w-prose text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar facts */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-6 rounded-lg border border-border bg-card p-6 text-sm">
              <div>
                <p className="type-caption text-muted-foreground">
                  Founded
                </p>
                <p className="mt-1 font-medium text-foreground">2013</p>
              </div>
              <div>
                <p className="type-caption text-muted-foreground">
                  Location
                </p>
                <p className="mt-1 font-medium text-foreground">Nea Ionia, Athens</p>
                <p className="text-muted-foreground">14 Agiou Meletiou</p>
              </div>
              <div>
                <p className="type-caption text-muted-foreground">
                  Hours
                </p>
                <p className="mt-1 font-medium text-foreground">Mon–Fri 7:00–22:00</p>
                <p className="text-muted-foreground">Sat 8:00–23:00</p>
                <p className="text-muted-foreground">Sun 8:30–21:00</p>
              </div>
              <div className="border-t border-border pt-4">
                <Button asChild size="sm" className="w-full">
                  <Link href="/menu">View the Menu</Link>
                </Button>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
