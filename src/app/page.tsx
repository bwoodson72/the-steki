import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground">
      <Coffee className="size-12 text-primary" />
      <h1 className="text-4xl font-semibold tracking-tight">Nea Ionia Coffee</h1>
      <p className="text-muted-foreground">Coming soon.</p>
      <Button size="lg">Explore the Menu</Button>
    </main>
  );
}
