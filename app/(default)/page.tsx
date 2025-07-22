import Hero from "@/app/(default)/_components/hero";
import Features from "@/app/(default)/_components/features";
import Pricing from "@/app/(default)/_components/pricing";
import Faq from "@/app/(default)/_components/faq";
import CTA from "@/app/(default)/_components/cta";

export default function Home() {
  return (
    <main className="@container mx-auto max-w-7xl px-4 lg:px-0 mt-40">
      <div className="space-y-24">
        <Hero />

        <section id="features">
          <Features />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="faq">
          <Faq />
        </section>

        <section id="cta">
          <CTA />
        </section>
      </div>
    </main>
  );
}
