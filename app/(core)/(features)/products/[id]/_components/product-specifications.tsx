import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PackageIcon, NotepadTextDashedIcon } from "lucide-react"

const ProductSpecifications = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Especificações do Produto</h1>
        <p className="text-muted-foreground">
          Informações detalhadas das especificações do produto
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

      {/* Technical Specifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <NotepadTextDashedIcon className="h-5 w-5" />
            Especificações Técnicas
          </CardTitle>
          <CardDescription>
            Informações técnicas do produto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Peso</span>
            <span className="text-sm text-muted-foreground">100g</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Dimensões</span>
            <span className="text-sm text-muted-foreground">100x100x100mm</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Material</span>
            <span className="text-sm text-muted-foreground">Plástico</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductSpecifications