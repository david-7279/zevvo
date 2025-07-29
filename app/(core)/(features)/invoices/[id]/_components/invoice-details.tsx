import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EuroIcon, HandCoinsIcon, PackageIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { Path } from "@/lib/paths"
import { Button } from "@/components/ui/button"

const InvoiceDetails = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Detalhes da Fatura</h1>
        <p className="text-muted-foreground">
          Informações detalhadas da fatura
        </p>
      </div>

      {/* Product Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HandCoinsIcon className="h-5 w-5" />
            Nome do Cliente AQUI
          </CardTitle>
          <CardDescription>
            Identificação da fatura aqui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Estado da fatura</span>
            <Badge variant="default" className="bg-green-100 text-green-800">
              Paga
            </Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Descrição</p>
              <p className="text-xs text-muted-foreground">Descrição da fatura</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Information - Clients*/}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Informações do Cliente
          </CardTitle>
          <CardDescription>
            Informações básicas do cliente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Nome</span>
            <span className="text-sm text-muted-foreground">David</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Email</span>
            <span className="text-sm text-muted-foreground">david@gmail.com</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Número de telemóvel</span>
            <span className="text-sm text-muted-foreground">900 100 200</span>
          </div>
          <Separator />
          <Link href={Path.clients}>
            <Button variant="outline">
              Ver página do cliente
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Financial Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <EuroIcon className="h-5 w-5" />
            Informações Financeiras
          </CardTitle>
          <CardDescription>
            Informações financeiras do pagamento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Preço</span>
            <span className="text-sm text-muted-foreground">€499,99</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Método de pagamento</span>
            <span className="text-sm text-muted-foreground">Cartão de crédito</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Data de vencimento</span>
            <span className="text-sm text-muted-foreground">11/09/2024</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Margem de lucro</span>
            <span className="text-sm text-muted-foreground">25%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default InvoiceDetails