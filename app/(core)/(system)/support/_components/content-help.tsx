import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { UserIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "Go to your account settings and click on 'Reset Password'. Follow the instructions sent to your email.",
  },
  {
    question: "How can I contact support?",
    answer: "You can use the contact form below or email us at support@example.com.",
  },
  // Add more FAQs as needed
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
          {/* ISSUES */}
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