import React from "react"
import { ChartAreaIcon, CheckIcon, ClipboardListIcon, Columns3CogIcon, LucideMessageCircleQuestion, XIcon } from "lucide-react"
import { Path } from "@/lib/paths";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";


const pricingHeader = [
  {
    Icon: ClipboardListIcon,
    name: "Startup",
    description: "Ideal para micro e pequenas empresas que estão a iniciar e pretendem organizar clientes e vendas de forma simples e eficiente.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Gestão de Clientes" />,
  },
  {
    Icon: ChartAreaIcon,
    name: "Standard",
    description: "Perfeito para empresas em crescimento que necessitam de mais controlo, automação e funcionalidades avançadas de gestão.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Faturação Automática" />,
  },
  {
    Icon: Columns3CogIcon,
    name: "Premium",
    description: "A solução completa para empresas que pretendem maximizar a eficiência, escalar operações e aceder a todas as funcionalidades.",
    href: Path.dashboard,
    cta: "Começar Agora",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="Relatórios Interativos" />,
  },
];

const pricingCoreFeatures = [
  {
    tooltipTitle: "Preço",
    tooltipContent: "Custo mensal do plano.",
    startupContent: "€10",
    standardContent: "€20",
    premiumContent: "€30",
  },
  {
    tooltipTitle: "Produtos",
    tooltipContent: "Número máximo de produtos que pode registar e gerir na plataforma.",
    startupContent: "200",
    standardContent: "500",
    premiumContent: "1000",
  },
  {
    tooltipTitle: "Fornecedores",
    tooltipContent: "Número máximo de fornecedores que pode adicionar à sua base de dados.",
    startupContent: "100",
    standardContent: "300",
    premiumContent: "500",
  },
  {
    tooltipTitle: "Clientes",
    tooltipContent: "Número máximo de clientes que pode gerir no sistema.",
    startupContent: "100",
    standardContent: "300",
    premiumContent: "500",
  },
]

const pricingInformation = [
  {
    tooltipTitle: "Faturas",
    tooltipContent: "Tipo de faturação disponível em cada plano.",
    startupContent: "Gerar faturas em PDF manualmente",
    standardContent: "Envio automático de faturas por email",
    premiumContent: "Envio automático de faturas, alertas e integração com outros sistemas",
  },
  {
    tooltipTitle: "Pagamentos",
    tooltipContent: "Pagamentos automáticos integrados com a plataforma.",
    startupContent: <CheckIcon className="size-4" />,
    standardContent: <CheckIcon className="size-4" />,
    premiumContent: <CheckIcon className="size-4" />,
  },
]

const pricingSecuritySuport = [
  {
    tooltipTitle: "Email",
    tooltipContent: "Suporte ao cliente via e-mail, com tempos de resposta diferenciados por plano.",
    startupContent: "Apoio via e-mail com resposta até 48 horas úteis",
    standardContent: "Apoio via e-mail com resposta até 24 horas úteis, alertas de limites e relatórios automáticos",
    premiumContent: "Apoio prioritário via e-mail, alertas de limites, relatórios automáticos e envio de faturas automáticas",
  },
  {
    tooltipTitle: "Tickets",
    tooltipContent: "Suporte por tickets dentro da plataforma para resolução de problemas e dúvidas.",
    startupContent: <XIcon className="size-4" />,
    standardContent: <XIcon className="size-4" />,
    premiumContent: <CheckIcon className="size-4" />,
  },
  {
    tooltipTitle: "Autenticação de Dois Fatores",
    tooltipContent: "Segurança adicional através de autenticação de dois fatores (2FA) para proteger a sua conta.",
    startupContent: <CheckIcon className="size-4" />,
    standardContent: <CheckIcon className="size-4" />,
    premiumContent: <CheckIcon className="size-4" />,
  },
]

function renderPricingCellContent(content: React.ReactNode) {
  if (typeof content === "string" || typeof content === "number") {
    return <small className="text-sm leading-none">{content}</small>;
  }

  if (React.isValidElement(content)) {
    return (
      <span className="flex justify-center items-center h-6">
        {content}
      </span>
    );
  }
  return content;
}

const PricingContent = () => (
  <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 mt-5">
    <div className="mx-auto max-w-5xl px-6 space-y-16">

      <div className="space-y-5 flex justify-center items-center text-center">
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Escolha o plano certo para si
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Compare os nossos planos para encontrar a solução ideal para as necessidades do seu negócio.
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

      {/* Características Principais */}
      <div className="grid gap-y-2 px-4">
        <h3 className="scroll-m-20 text-xl tracking-tight">
          Características principais
        </h3>
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="flex font-semibold text-sm">
                  <div className="flex-1 px-2 py-1"></div>
                  <div className="w-1/4 text-center px-2 py-1">Startup</div>
                  <div className="w-1/4 text-center px-2 py-1">Standard</div>
                  <div className="w-1/4 text-center px-2 py-1">Premium</div>
                </div>
                {pricingCoreFeatures.map((feature, idx) => (
                  <React.Fragment key={feature.tooltipTitle}>
                    <div className="flex items-center">
                      <div className="flex-1 px-2 py-1">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="inline-flex gap-1.5 items-center cursor-pointer">
                              {feature.tooltipTitle}
                              <LucideMessageCircleQuestion className="size-4 mb-1 text-muted-foreground" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.tooltipContent}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(feature.startupContent)}
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(feature.standardContent)}
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(feature.premiumContent)}
                      </div>
                    </div>
                    {idx < pricingCoreFeatures.length - 1 && (
                      <Separator className="my-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Funcionalidades Adicionais */}
      <div className="grid gap-y-2 px-4">
        <h3 className="scroll-m-20 text-xl tracking-tight">
          Funcionalidades adicionais
        </h3>
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="flex font-semibold text-sm">
                  <div className="flex-1 px-2 py-1"></div>
                  <div className="w-1/4 text-center px-2 py-1">Startup</div>
                  <div className="w-1/4 text-center px-2 py-1">Standard</div>
                  <div className="w-1/4 text-center px-2 py-1">Premium</div>
                </div>
                {pricingInformation.map((information, idx) => (
                  <React.Fragment key={information.tooltipTitle}>
                    <div className="flex items-center">
                      <div className="flex-1 px-2 py-1">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="inline-flex gap-1.5 items-center cursor-pointer">
                              {information.tooltipTitle}
                              <LucideMessageCircleQuestion className="size-4 mb-1 text-muted-foreground" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{information.tooltipContent}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(information.startupContent)}
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(information.standardContent)}
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(information.premiumContent)}
                      </div>
                    </div>
                    {idx < pricingInformation.length - 1 && (
                      <Separator className="my-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Segurança e Suporte */}
      <div className="grid gap-y-2 px-4">
        <h3 className="scroll-m-20 text-xl tracking-tight">
          Segurança e Suporte
        </h3>
        <Card>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="flex font-semibold text-sm">
                  <div className="flex-1 px-2 py-1"></div>
                  <div className="w-1/4 text-center px-2 py-1">Startup</div>
                  <div className="w-1/4 text-center px-2 py-1">Standard</div>
                  <div className="w-1/4 text-center px-2 py-1">Premium</div>
                </div>
                {pricingSecuritySuport.map((data, idx) => (
                  <React.Fragment key={data.tooltipTitle}>
                    <div className="flex items-center">
                      <div className="flex-1 px-2 py-1">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="inline-flex gap-1.5 items-center cursor-pointer">
                              {data.tooltipTitle}
                              <LucideMessageCircleQuestion className="size-4 mb-1 text-muted-foreground" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{data.tooltipContent}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(data.startupContent)}
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(data.standardContent)}
                      </div>
                      <div className="w-1/4 text-center px-2 py-1">
                        {renderPricingCellContent(data.premiumContent)}
                      </div>
                    </div>
                    {idx < pricingSecuritySuport.length - 1 && (
                      <Separator className="my-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)

export default PricingContent