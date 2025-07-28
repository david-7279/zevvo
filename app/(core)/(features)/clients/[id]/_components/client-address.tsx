import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EuroIcon, HouseIcon, PackageIcon, ScanBarcodeIcon, UserIcon } from "lucide-react"

const ClientAddress = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Morada do Cliente</h1>
        <p className="text-muted-foreground">
          Informações sobre a morada do cliente
        </p>
      </div>

      {/* Client Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
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

      {/* Address Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HouseIcon className="h-5 w-5" />
            Morada
          </CardTitle>
          <CardDescription>
            Morada detalhada do cliente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Rua</span>
            <span className="text-sm text-muted-foreground">Rua de Cima, 00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Localidade</span>
            <span className="text-sm text-muted-foreground">Porto</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Código Postal</span>
            <span className="text-sm text-muted-foreground">4000-100</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ClientAddress