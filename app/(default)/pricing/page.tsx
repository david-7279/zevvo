import React from 'react'
import { Axis3DIcon, BarChartIcon, ChartAreaIcon, ClipboardListIcon, Columns3CogIcon, FileTextIcon, PackageIcon } from 'lucide-react'
import { Path } from '@/lib/paths';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';

const pricingHeader = [
  {
    Icon: ClipboardListIcon,
    name: "Startup",
    description: "Ideal para pequenos negócios que estão a começar e querem organizar clientes e vendas de forma simples.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Gestão de Clientes" />,
  },

  {
    Icon: ChartAreaIcon,
    name: "Standard",
    description: "Perfeito para negócios em crescimento que precisam de mais controlo e automação.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Faturas Automáticas" />,
  },
  {
    Icon: Columns3CogIcon,
    name: "Premium",
    description: "A solução completa para negócios que querem maximizar eficiência e escalar operações.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Relatórios Interativos" />,
  },
];

const Pricing = () => {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 mt-5">
      <div className="mx-auto max-w-5xl px-6 space-y-16">

        <div className="space-y-5 flex justify-center items-center text-center">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Escolha o plano certo para si
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Compare os nossos planos para encontrar a solução perfeita para as suas necessidades.
            </p>
          </div>
        </div>

        <div className="grid gap-y-12 px-4 lg:[grid-template-columns:1fr_auto]">

          <BentoGrid>
            {pricingHeader.map((pricing) => (
              <BentoCard key={pricing.name} {...pricing} />
            ))}
          </BentoGrid>


        </div>
      </div>
    </section>
  )
}

export default Pricing