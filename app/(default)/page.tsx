import Features from "@/app/(default)/components/features";
import Solutions from "@/app/(default)/components/solutions";
import Pricing from "@/app/(default)/components/pricing";
import About from "@/app/(default)/components/about";

export default function Home() {
  return (
    <main className="@container mx-auto max-w-5xl px-4 mt-40">
      <div className="space-y-52">
        <section id="#features">
          <Features />
        </section>

        <section id="#solutions">
          <Solutions />
        </section>

        <section id="#pricing">
          <Pricing />
        </section>

        <section id="#about">
          <About />
        </section>
      </div>
    </main>
  );
}
