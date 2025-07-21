import React from "react"
import { BlocksIcon, BrainCogIcon, CheckIcon, PiggyBankIcon, ShieldQuestionIcon, XIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { Path } from "@/lib/paths";

const plans = [
  {
    name: "Startup",
    price: "€10",
    description: "Ideal para micro e pequenas empresas que estão a iniciar e pretendem organizar clientes e vendas de forma simples e eficiente.",
    core: [
      { label: "Ate 200 produtos" },
      { label: "Ate 100 fornecedores" },
      { label: "Ate 100 clientes" },
    ],
    additional: [
      { label: "Faturas em PDF manualmente" },
      { label: "Pagamentos automáticos" },
      { label: "Exporte dados para o seu ambiente de trabalho como precaução" },
      { label: "Visualização gráfica para monitorizar o seu negócio" },
    ],
    security: [
      { label: "Apoio via e-mail com resposta até 48 horas úteis" },
      { label: "Autenticação de Dois Fatores ativa por defeito" },
    ],
  },
  {
    name: "Standard",
    price: "€20",
    description: "Perfeito para empresas em crescimento que necessitam de mais controlo, automação e funcionalidades avançadas de gestão.",
    core: [
      { label: "Ate 500 produtos" },
      { label: "Ate 300 fornecedores" },
      { label: "Ate 300 clientes" },
    ],
    additional: [
      { label: "Envio automático de faturas por email" },
      { label: "Pagamentos automáticos" },
      { label: "Exporte dados para o seu ambiente de trabalho como precaução" },
      { label: "Visualização gráfica para monitorizar o seu negócio" },
    ],
    security: [
      { label: "Apoio via e-mail com resposta até 24 horas úteis" },
      { label: "Autenticação de Dois Fatores ativa por defeito" },
    ],
  },
  {
    name: "Premium",
    price: "€30",
    description: "A solução completa para empresas que pretendem maximizar a eficiência, escalar operações e aceder a todas as funcionalidades.",
    core: [
      { label: "Ate 1000 produtos" },
      { label: "Ate 500 fornecedores" },
      { label: "Ate 500 clientes" },
    ],
    additional: [
      { label: "Envio automático de faturas e alertas" },
      { label: "Pagamentos automáticos" },
      { label: "Exporte dados para o seu ambiente de trabalho como precaução" },
      { label: "Visualização gráfica para monitorizar o seu negócio" },
    ],
    security: [
      { label: "Apoio prioritário via e-mail" },
      { label: "Suporte por tickets dentro da plataforma" },
      { label: "Autenticação de Dois Fatores ativa por defeito" },
    ],
  },
];

const PricingResponsive = () => (
  <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 mt-5 space-y-16 px-4">

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

    <div className="flex items-center justify-center text-center space-x-5 px-4 py-4 sm:px-2">
      <Link href={Path.login}>
        <ShimmerButton className="bg-foreground rounded-xl w-full sm:w-auto max-w-xs mx-auto">
          <span className="whitespace-pre-wrap text-white text-center text-sm font-medium leading-none">
            Começar Agora
          </span>
        </ShimmerButton>
      </Link>
    </div>

    <div className="grid gap-y-6 gap-15 px-4">
      {plans.map((plan) => (
        <Card key={plan.name}>
          <CardHeader>
            <CardTitle>
              <div className="space-y-5">
                <h4 className="font-semibold text-lg">{plan.name}</h4>
                <h2 className="font-semibold text-4xl">{plan.price}<span className="text-muted-foreground text-sm font-normal">/mês</span></h2>
              </div>
            </CardTitle>
            <CardDescription>
              {plan.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto space-y-9">
              {/* Core Features */}
              <div className="space-y-2">
                <div className="inline-flex gap-1.5 items-center">
                  <BrainCogIcon className="size-4" />
                  <p>Características Principais</p>
                </div>
                <Separator />
                <div className="space-y-2 flex flex-col">
                  {plan.core.map((item) => (
                    <div key={item.label} className="inline-flex gap-1.5 items-center">
                      <CheckIcon className="size-4" />
                      <span className="text-sm text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div className="space-y-2">
                <div className="inline-flex gap-1.5 items-center">
                  <BlocksIcon className="size-4" />
                  <p>Funcionalidades Adicionais</p>
                </div>
                <Separator />
                <div className="space-y-2 flex flex-col">
                  {plan.additional.map((item) => (
                    <div key={item.label} className="inline-flex gap-1.5 items-center">
                      <CheckIcon className="size-4" />
                      <span className="text-sm text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security and Support */}
              <div className="space-y-2 flex-flex-col">
                <div className="inline-flex gap-1.5 items-center">
                  <ShieldQuestionIcon className="size-4" />
                  <p>Segurança & Suporte</p>
                </div>
                <Separator />
                <div className="space-y-2">
                  {plan.security.map((item) => (
                    <div key={item.label} className="inline-flex gap-1.5 items-center">
                      <CheckIcon className="size-4" />
                      <span className="text-sm text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
)

export default PricingResponsive