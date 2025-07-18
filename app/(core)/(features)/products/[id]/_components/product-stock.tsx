import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EditIcon, HistoryIcon, PackageIcon, PackagePlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const ProductStock = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Stock do Produto</h1>
        <p className="text-muted-foreground">
          Informações detalhadas do stock do produto
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

      {/* Stock Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PackagePlusIcon className="h-5 w-5" />
            Gestão de Stock
          </CardTitle>
          <CardDescription>
            Informações detalhadas sobre o stock do produto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Unidades em Stock</span>
            <span className="text-sm text-muted-foreground">100</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm">
              <EditIcon className="h-4 w-4" />
              Atualizar Stock
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stock History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HistoryIcon className="h-5 w-5" />
            Histórico de Stock
          </CardTitle>
          <CardDescription>
            Informações detalhadas sobre o histórico de stock do produto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">

        </CardContent>
      </Card>
    </div>
  )
}

export default ProductStock