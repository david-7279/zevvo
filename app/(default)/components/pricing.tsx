import { CircleDollarSignIcon } from "lucide-react";

import Heading from "@/app/(default)/components/heading";
import PricingCard from "./pricing-card";
import Link from "next/link";
import { Path } from "@/lib/paths";

const pricingInformation = [
  {
    index: 0,
    title: "Startup",
    description: "Ideal para pequenos negócios que estão a começar e querem organizar clientes e vendas de forma simples.",
    price: 10,
    features: [
      { title: "Gestão de Clientes", description: "Registe até 100 clientes com filtros e pesquisa básica." },
      { title: "Gestão de Produtos", description: "Crie até 200 produtos com categorias simples." },
      { title: "Faturas Básicas", description: "Gere faturas em PDF e envie por e-mail manualmente." },
      { title: "Dashboard Interativo", description: "Visualize métricas com gráficos dinâmicos e atualizados." },
      { title: "Relatórios Mensais", description: "Acesse relatórios de vendas exportáveis em Excel." },
      { title: "Suporte por E-mail", description: "Apoio via e-mail com resposta em até 48 horas." },
    ],
  },
  {
    index: 1,
    title: "Standard",
    description: "Perfeito para negócios em crescimento que precisam de mais controlo e automação.",
    price: 20,
    features: [
      { title: "Gestão de Clientes", description: "Registe até 300 clientes com filtros e pesquisa básica." },
      { title: "Gestão de Produtos", description: "Crie até 500 produtos com categorias simples." },
      { title: "Faturas Automáticas", description: "Envie faturas automaticamente e receba alertas de vencimento." },
      { title: "Importação/Exportação Excel", description: "Importe e exporte dados com validação e filtros." },
      { title: "Suporte Prioritário", description: "Apoio via tickets com resposta em até 24 horas." },
      { title: "Notificações por E-mail", description: "Receba alertas de limites e relatórios automáticos." },
    ],
  },
  {
    index: 2,
    title: "Premium",
    description: "A solução completa para negócios que querem maximizar eficiência e escalar operações.",
    price: 30,
    features: [
      { title: "Gestão de Clientes", description: "Registe até 500 clientes com filtros e pesquisa básica." },
      { title: "Gestão de Produtos", description: "Crie até 1000 produtos com categorias simples." },
      { title: "Suporte Premium", description: "Canal de tickets com prioridade e histórico, resposta em até 12 horas." },
      { title: "Gestão Avançada de Faturas", description: "Personalize faturas e acompanhe estados em tempo real." },
      { title: "Notificações por E-mail", description: "Receba alertas de limites, relatórios automáticos e faturas automáticas." },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col space-y-5">
          <Heading
            icon={CircleDollarSignIcon}
            title="Preços"
            heading="Preços que fazem sentido!"
            paragraph="Atualmente, gerir um pequeno negócio já é difícil"
          />

          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {pricingInformation.map((item, index) => (
              <PricingCard
                key={index}
                index={item.index}
                title={item.title}
                description={item.description}
                price={item.price}
                features={item.features}
              />
            ))}
          </div>

          <div className="flex justify-center items-center gap-1 max-w-full flex-wrap sm:text-xs">
            <p className="text-muted-foreground text-sm whitespace-normal break-words">
              Ainda tem dúvidas? Visite a página de
            </p>
            <Link href={Path.pricing} className="group">
              <p className="relative text-sm text-foreground transition-all duration-500
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
                group-hover:after:w-full break-all">
                precário
              </p>
            </Link>
            <p className="text-muted-foreground text-sm whitespace-normal break-words">para saber tudo sobre o melhor plano para si.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing