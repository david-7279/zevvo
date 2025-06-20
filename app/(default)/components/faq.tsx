import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestionIcon } from "lucide-react";

import Heading from "@/app/(default)/components/heading";
import Link from "next/link";

const faqData = [
  {
    question: "O que é a plataforma e como ela ajuda meu negócio?",
    answer:
      "Nossa plataforma é uma solução tudo-em-um para negócios locais, permitindo gerir clientes, produtos, faturas e relatórios de forma simples e eficiente. Com funcionalidades como faturas automáticas e dashboard interativo, você poupa tempo e organiza suas vendas para crescer mais rápido. Experimente grátis por 7 dias!",
  },
  {
    question: "Preciso de conhecimentos técnicos para usar a plataforma?",
    answer:
      "Não! A plataforma foi desenhada para ser intuitiva, mesmo para quem não tem experiência técnica. Com uma interface simples e suporte dedicado, você pode começar a gerir seu negócio em minutos. Além disso, oferecemos guias e suporte por e-mail ou tickets para ajudar em cada passo.",
  },
  {
    question: "Existe um plano gratuito ou período de teste?",
    answer:
      "Sim, todos os planos incluem um teste gratuito de 7 dias, sem necessidade de cartão de crédito. Além disso, oferecemos um plano gratuito com funcionalidades básicas. Comece hoje mesmo sem compromisso!",
  },
  {
    question: "Como funcionam os planos de preços?",
    answer:
      "Temos três planos: Startup ($10/mês), Standard ($20/mês) e Premium ($30/mês). O plano Startup é perfeito para negócios pequenos, enquanto o Standard e Premium oferecem funcionalidades avançadas como clientes ilimitados, faturas automáticas e suporte prioritário. Você pode mudar de plano a qualquer momento.",
  },
  {
    question: "Como funciona a emissão de faturas?",
    answer:
      "Com nossa plataforma, você pode criar faturas em PDF com poucos cliques, personalizá-las e enviá-las por e-mail. Nos planos Standard e Premium, as faturas podem ser enviadas automaticamente, e você recebe alertas sobre faturas vencidas, facilitando a gestão de pagamentos.",
  },
  {
    question: "Que tipo de suporte está disponível?",
    answer:
      "Oferecemos suporte por e-mail no plano Startup (resposta em até 48 horas) e suporte prioritário via tickets nos planos Standard (24 horas) e Premium (12 horas). Todos os planos incluem acesso a guias e FAQs, e o plano Premium tem um histórico completo de tickets para maior controlo.",
  },
  {
    question: "Posso exportar meus dados ou relatórios?",
    answer:
      "Sim! Nos planos Standard e Premium, você pode importar e exportar dados de clientes e produtos em Excel com filtros e validação. Além disso, todos os planos permitem exportar relatórios mensais de vendas, e o plano Premium inclui gráficos interativos e envio automático por e-mail.",
  },
];

const Faq = () => {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Heading
              icon={MessageCircleQuestionIcon}
              title="Perguntas Frequentes"
              heading="Tire suas dúvidas!"
              paragraph="Encontre respostas para as perguntas mais comuns sobre nossa plataforma e como ela pode ajudar seu negócio."
            />
          </div>

          <div className="max-w-3xl w-full mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="leading-5 [&:not(:first-child)]:mt-6">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex justify-center items-center gap-1 max-w-full flex-wrap sm:text-xs">
            <p className="text-muted-foreground text-sm whitespace-normal break-words">
              Ainda tem dúvidas? Envie-nos um e-mail para
            </p>
            <Link href={"mailto:david.dev7279@outlook.com"} className="group">
              <p className="relative text-sm text-foreground transition-all duration-500
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
                group-hover:after:w-full break-all">
                zevvo@gmail.com
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;