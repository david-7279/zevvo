import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Heading from "@/app/(default)/_components/heading";
import { BarChartIcon, BoxesIcon, FileTextIcon, PackageIcon, UserIcon } from "lucide-react";
import { Path } from "@/lib/paths";

const features = [
  {
    Icon: PackageIcon,
    name: "Gestão de Produtos Simplificada",
    description: "Registe e organize seus produtos com filtros, etiquetas e pesquisa avançada. Acompanhe interações e impulsione suas vendas com facilidade.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Gestão de Clientes" />,
  },

  {
    Icon: FileTextIcon,
    name: "Faturas Automáticas",
    description: "Crie, personalize e envie faturas em PDF automaticamente. Receba alertas de vencimento e mantenha o controlo dos pagamentos.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Faturas Automáticas" />,
  },
  {
    Icon: BarChartIcon,
    name: "Relatórios Interativos",
    description: "Acesse relatórios de vendas com gráficos dinâmicos e exporte dados em Excel. Tome decisões informadas para crescer seu negócio.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Relatórios Interativos" />,
  },
  {
    Icon: UserIcon,
    name: "Gestão de Clientes Simplificada",
    description: "Registe e organize seus clientes com filtros, etiquetas e pesquisa avançada. Acompanhe interações e impulsione suas vendas com facilidade.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Gestão de Clientes" />,
  },
];

const Features = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 justify-center items-center">
          <Heading
            icon={BoxesIcon}
            title="Funcionalidades"
            heading="Construído para satisfazer as suas necessidades!"
            paragraph="Descubra como nossa plataforma simplifica a gestão do seu negócio local com ferramentas poderosas e fáceis de usar."
          />
          <BentoGrid>
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}

export default Features