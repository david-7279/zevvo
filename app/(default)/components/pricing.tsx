import { CircleDollarSignIcon } from "lucide-react";

import Heading from "@/app/(default)/components/heading";
import PricingCard from "./pricing-card";

const pricingInformation = [
  {
    index: 0,
    title: "Startup",
    description: "Ideal para pequenos negócios que estão a começar e querem organizar clientes e vendas de forma simples.",
    price: 10,
    features: [
      { title: "Gestão de Clientes", description: "Registe até 500 clientes com filtros e pesquisa básica." },
      { title: "Gestão de Produtos", description: "Crie até 100 produtos com categorias simples." },
      { title: "Faturas Básicas", description: "Gere faturas em PDF e envie por e-mail manualmente." },
      { title: "Relatórios Mensais", description: "Acesse relatórios de vendas exportáveis em Excel." },
      { title: "Suporte por E-mail", description: "Apoio via e-mail com resposta em até 48 horas." },
      { title: "Acesso PWA", description: "Use a plataforma no telemóvel como uma app." },
    ],
  },
  {
    index: 1,
    title: "Standard",
    description: "Perfeito para negócios em crescimento que precisam de mais controlo e automação.",
    price: 20,
    features: [
      { title: "Tudo do Plano Startup", description: "Inclui todas as funcionalidades do plano Startup." },
      { title: "Clientes Ilimitados", description: "Registe quantos clientes quiser com etiquetas e filtros avançados." },
      { title: "Produtos Ilimitados", description: "Adicione produtos com subcategorias e ordenação personalizada." },
      { title: "Dashboard Interativo", description: "Visualize métricas com gráficos dinâmicos e atualizados." },
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
      { title: "Tudo do Plano Standard", description: "Inclui todas as funcionalidades do plano Standard." },
      { title: "Gestão Multi-Utilizador", description: "Adicione até 5 utilizadores com permissões personalizadas." },
      { title: "Relatórios Avançados", description: "Gráficos interativos e relatórios enviados automaticamente por e-mail." },
      { title: "Sistema Multilíngue", description: "Use a plataforma em Português e Inglês." },
      { title: "Suporte Premium", description: "Canal de tickets com prioridade e histórico, resposta em até 12 horas." },
      { title: "Gestão Avançada de Faturas", description: "Personalize faturas e acompanhe estados em tempo real." },
      { title: "Integração com Stripe", description: "Gerencie pagamentos e planos diretamente na plataforma." },
      { title: "Alertas Personalizados", description: "Configure notificações para ações específicas do seu negócio." },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
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
        </div>
      </div>
    </div>
  )
}

export default Pricing