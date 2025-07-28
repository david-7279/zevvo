import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EuroIcon, PackageIcon, ScanBarcodeIcon } from "lucide-react"

const ClientDetails = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Detalhes do Cliente</h1>
        <p className="text-muted-foreground">
          Informações detalhadas do cliente
        </p>
      </div>

      {/* Product Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PackageIcon className="h-5 w-5" />
            Nome do Cliente Aqui
          </CardTitle>
          <CardDescription>
            Identificação do cliente aqui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Estado do Cliente</span>
            <Badge variant="default" className="bg-green-100 text-green-800">
              Ativo
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ScanBarcodeIcon className="h-5 w-5" />
            Informações Básicas
          </CardTitle>
          <CardDescription>
            Informações básicas do cliente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Nome completo</span>
            <span className="text-sm text-muted-foreground">David Vieira</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Endereço de email</span>
            <span className="text-sm text-muted-foreground">zevvo@exemplo.com</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Número de telemóvel</span>
            <span className="text-sm text-muted-foreground">900 100 200</span>
          </div>
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
            Informações financeiras do cliente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Valor de pagamentos em atraso</span>
            <span className="text-sm text-muted-foreground">€25,99</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Produtos adquiridos</span>
            <span className="text-sm text-muted-foreground">100</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Produtos retomados</span>
            <span className="text-sm text-muted-foreground">2</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ClientDetails