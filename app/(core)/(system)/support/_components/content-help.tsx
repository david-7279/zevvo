import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, ArrowUpRightIcon, UserIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Path } from "@/lib/paths"
import Link from "next/link"

const faqs = [
  {
    question: "Como consigo alterar a minha palavra-passe?",
    answer: "Vai à sua definições de conta, na parte de 'Segurança da Conta' e clica em 'Alterar'.",
    link: Path.settings,
    more: "Ir para as definições"
  },
  {
    question: "Como consigo contactar o suporte?",
    answer: "Pode entrar em contacto pelo formulário em baixo, ou via e-mail para zevvohelp@outlook.com.",
    link: 'mailto:zevvohelp@outlook.com',
    more: "Enviar email"
  },
  {
    question: "Como consigo alterar as definições da plataform?",
    answer: "Para alterar as definções da nossa plataforma, vá à página de definições da plataforma, nessa secção consegue alterar o tema, tamanho da letra e a linguagem.",
    link: Path.settings,
    more: "Ir para as definições"
  },
]

const HelpContent = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Ajuda</h1>
        <p className="text-muted-foreground">
          Veja as dúvidas gerais da nossa plataforma, ou envie-nos uma mensagem
        </p>
      </div>

      {/* Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Dúvidas Gerais
          </CardTitle>
          <CardDescription>
            Informasse de algumas dúvidas, que pode ser a resposta que procura.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* FAQ */}
          <div className="flex flex-row flex-wrap gap-3 w-full">
            {faqs.map((faq, index) => (
              <Link href={faq.link} key={index} className="group">
                <Card className="w-md shadow-none gap-2">
                  <CardHeader>
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                  <CardFooter className="inline-flex items-center gap-2">
                    {faq.link && (
                      <>
                        <p className="relative text-sm text-muted-foreground text-center transition-all duration-500
          after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-500
          group-hover:after:w-full">
                          {faq.more}
                        </p>
                        <ArrowRightIcon className="mt-0.5 text-muted-foreground size-3.5 transition-all duration-500 group-hover:translate-x-1 group-hover:text-foreground" />
                      </>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Message */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Contacte-nos
          </CardTitle>
          <CardDescription>
            Não encontrou a resposta? Envie-nos uma menagem com a sua dúvida.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form Fields */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="zevvo@exemplo.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Selecione a sua dúvida</Label>
            <Select >
              <SelectTrigger className="w-full" id="topic">
                <SelectValue placeholder="Escolha um tópico" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pagamentos">Pagamentos</SelectItem>
                <SelectItem value="plano">Plano</SelectItem>
                <SelectItem value="clientes">Gestão de Clientes</SelectItem>
                <SelectItem value="produtos">Gestão de Produtos</SelectItem>
                <SelectItem value="stock">Gestão de Stock</SelectItem>
                <SelectItem value="faturas">Faturas</SelectItem>
                <SelectItem value="outra">Outra</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="question">Qual a sua dúvida</Label>
            <Textarea
              id="question"
              placeholder="Descreva a sua dúvida ao pormenor, para que nós conseguimos ajudar"
              rows={4}
            />
          </div>

          <Button>Enviar Mensagem</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default HelpContent