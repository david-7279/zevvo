import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BadgeIcon, BadgeInfoIcon, ClipboardListIcon, EuroIcon, FileUserIcon, TruckIcon } from "lucide-react"

const SupplierDetails = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Detalhes do Fornecedor</h1>
        <p className="text-muted-foreground">
          Informação detalhada sobre o fornecedor
        </p>
      </div>

      {/* Client Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TruckIcon className="h-5 w-5" />
            Nome do Fornecedor Aqui
          </CardTitle>
          <CardDescription>
            Identificação do fornecedor aqui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Estado do fornecedor</span>
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
            <ClipboardListIcon className="h-5 w-5" />
            Informação Básica
          </CardTitle>
          <CardDescription>
            Dados essenciais do fornecedor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Empresa</span>
            <span className="text-sm text-muted-foreground">Tech Pro</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Endereço de e-mail</span>
            <span className="text-sm text-muted-foreground">zevvo@exemplo.com</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Número de telemóvel</span>
            <span className="text-sm text-muted-foreground">900 100 200</span>
          </div>
        </CardContent>
      </Card>

      {/* Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeInfoIcon className="h-5 w-5" />
            Detalhes do Fornecedor
          </CardTitle>
          <CardDescription>
            Informação detalhada sobre o fornecedor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Categoria dos produtos</span>
            <span className="text-sm text-muted-foreground">Tecnologia</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Condições</span>
            <span className="text-sm text-muted-foreground">Pagamento a pronto</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SupplierDetails