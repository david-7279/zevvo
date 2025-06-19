import Hero from "@/app/(default)/components/hero";

export default function Home() {
  return (
    <main className="@container mx-auto max-w-7xl px-4 lg:px-0 mt-40">
      <div className="space-y-72">
        <section>
          <Hero />
        </section>

        <section id="#features">
        </section>

        <section id="#pricing">
        </section>

        <section id="#faq">
        </section>
      </div>
    </main>
  );
}
