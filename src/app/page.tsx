import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/60" />

        {/* Content */}
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
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/menu">View Menu</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
