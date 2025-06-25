import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Crown, Check, X } from "lucide-react"

const BillingContent = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Plano e Faturação</h1>
        <p className="text-muted-foreground">
          Gerir o seu plano de subscrição e informações de faturação
        </p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            Plano Atual
          </CardTitle>
          <CardDescription>
            Detalhes da sua subscrição atual
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Plano Profissional</h3>
                <Badge variant="default">Ativo</Badge>
              </div>
              <p className="text-sm text-muted-foreground">€29/mês • Renovação automática</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">€29</p>
              <p className="text-sm text-muted-foreground">por mês</p>
            </div>
          </div>

          <Separator />

          {/* Usage */}
          <div className="space-y-4">
            <h4 className="font-medium">Utilização este mês</h4>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Utilizadores</span>
                <span>8 / 15</span>
              </div>
              <Progress value={53} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Armazenamento</span>
                <span>2.5 GB / 10 GB</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>API Calls</span>
                <span>15.2K / 50K</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
          </div>

          <div className="flex gap-2">
            <Button>Upgrade do Plano</Button>
            <Button variant="outline">Cancelar Subscrição</Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Planos Disponíveis</CardTitle>
          <CardDescription>
            Escolha o plano que melhor se adequa às suas necessidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Basic Plan */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="text-center">
                <h3 className="font-semibold">Básico</h3>
                <div className="mt-2">
                  <span className="text-2xl font-bold">€9</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Até 5 utilizadores</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>2 GB armazenamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>10K API calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-500" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" size="sm">
                Escolher Plano
              </Button>
            </div>

            {/* Professional Plan - Current */}
            <div className="border-2 border-primary rounded-lg p-4 space-y-4 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                Atual
              </Badge>
              <div className="text-center">
                <h3 className="font-semibold">Profissional</h3>
                <div className="mt-2">
                  <span className="text-2xl font-bold">€29</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Até 15 utilizadores</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>10 GB armazenamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>50K API calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <Button className="w-full" size="sm" disabled>
                Plano Atual
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="text-center">
                <h3 className="font-semibold">Empresarial</h3>
                <div className="mt-2">
                  <span className="text-2xl font-bold">€99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Utilizadores ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>100 GB armazenamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>500K API calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Suporte 24/7</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" size="sm">
                Fazer Upgrade
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Método de Pagamento
          </CardTitle>
          <CardDescription>
            Gerir os seus métodos de pagamento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expira 12/26</p>
              </div>
            </div>
            <Badge variant="secondary">Principal</Badge>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">Adicionar Cartão</Button>
            <Button variant="outline" size="sm">Editar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Faturação</CardTitle>
          <CardDescription>
            As suas faturas mais recentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "1 Jun 2025", amount: "€29,00", status: "Pago" },
              { date: "1 Mai 2025", amount: "€29,00", status: "Pago" },
              { date: "1 Abr 2025", amount: "€29,00", status: "Pago" },
            ].map((invoice, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">{invoice.date}</p>
                  <p className="text-sm text-muted-foreground">Plano Profissional</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{invoice.amount}</p>
                  <Badge variant="secondary" className="text-xs">
                    {invoice.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <Button variant="outline" size="sm">
            Ver Todas as Faturas
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default BillingContent
