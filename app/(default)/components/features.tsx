import React from "react";
import {
  BarChartIcon,
  BoxesIcon,
  FileTextIcon,
  PackageIcon,
  UsersIcon,
} from "lucide-react";

import Heading from "@/app/(default)/components/heading";

const featuresData = [
  {
    title: "Gestão de Clientes Simplificada",
    description:
      "Registe e organize seus clientes com filtros, etiquetas e pesquisa avançada. Acompanhe interações e impulsione suas vendas com facilidade.",
    icon: UsersIcon,
  },
  {
    title: "Faturas Automáticas",
    description:
      "Crie, personalize e envie faturas em PDF automaticamente. Receba alertas de vencimento e mantenha o controlo dos pagamentos.",
    icon: FileTextIcon,
  },
  {
    title: "Relatórios Interativos",
    description:
      "Acesse relatórios de vendas com gráficos dinâmicos e exporte dados em Excel. Tome decisões informadas para crescer seu negócio.",
    icon: BarChartIcon,
  },
  {
    title: "Gestão de Produtos Simplificada",
    description:
      "Registe e organize seus produtos com filtros, etiquetas e pesquisa avançada. Acompanhe interações e impulsione suas vendas com facilidade.",
    icon: PackageIcon,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`bg-muted rounded-md p-6 flex justify-between flex-col ${index === 0 || index === 3
                    ? "h-full lg:col-span-2 aspect-square lg:aspect-auto"
                    : "aspect-square"
                  }`}
              >
                <feature.icon className="w-8 h-8 stroke-1" />
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground max-w-xs text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;