import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EuroIcon, PackageIcon, ScanBarcodeIcon } from "lucide-react"

const ProductDetails = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Detalhes do Produto</h1>
        <p className="text-muted-foreground">
          Informações detalhadas do produto
        </p>
      </div>

      {/* Product Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PackageIcon className="h-5 w-5" />
            Nome do Produto Aqui
          </CardTitle>
          <CardDescription>
            Identificação do produto Aqui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Estado de Stock</span>
            <Badge variant="default" className="bg-green-100 text-green-800">
              Em Stock
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Vendidos</span>
            <span className="text-sm text-muted-foreground">100</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Descrição</p>
              <p className="text-xs text-muted-foreground">Descrição do produto</p>
            </div>
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
            Informações básicas do produto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Categoria</span>
            <span className="text-sm text-muted-foreground">Eletrónicos</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Marca</span>
            <span className="text-sm text-muted-foreground">TechPro</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Garantia</span>
            <span className="text-sm text-muted-foreground">12 meses</span>
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
            Informações financeiras do produto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Preço de Venda</span>
            <span className="text-sm text-muted-foreground">€499.99</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Preço de Compra</span>
            <span className="text-sm text-muted-foreground">€399.99</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Margem de Lucro</span>
            <span className="text-sm text-muted-foreground">25%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Fornecedor</span>
            <span className="text-sm text-muted-foreground">TechPro LTDA</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductDetails