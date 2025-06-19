import Hero from "@/app/(default)/components/hero";
import Features from "@/app/(default)/components/features";

export default function Home() {
  return (
    <main className="@container mx-auto max-w-7xl px-4 lg:px-0 mt-40">
      <div className="space-y-24">
        <Hero />

        <section id="#features">
          <Features />
        </section>

        <section id="#pricing">
        </section>

        <section id="#faq">
        </section>
      </div>
    </main>
  );
}
