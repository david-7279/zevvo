import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { EuroIcon, FileTextIcon, HandCoinsIcon, PackageIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { Path } from "@/lib/paths"
import { Button } from "@/components/ui/button"

const InvoiceProducts = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Produtos da Fatura</h1>
        <p className="text-muted-foreground">
          Informações detalhadas dos produtos da fatura
        </p>
      </div>

      {/* Product Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileTextIcon className="h-5 w-5" />
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

      {/* Basic Information - Products*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PackageIcon className="h-5 w-5" />
              Informações do Produto
            </CardTitle>
            <CardDescription>
              Informações básicas do produto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Nome</span>
              <span className="text-sm text-muted-foreground">Smartphone Pro</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Categoria</span>
              <span className="text-sm text-muted-foreground">Eletronicos</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Fornecedor</span>
              <span className="text-sm text-muted-foreground">TechPro</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Quantidade</span>
              <span className="text-sm text-muted-foreground">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Preço de Venda</span>
              <span className="text-sm text-muted-foreground">€ 200</span>
            </div>
            <Separator />
            <Link href={Path.products} target="_blank">
              <Button variant="outline">
                Ver página do produto
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PackageIcon className="h-5 w-5" />
              Informações do Produto
            </CardTitle>
            <CardDescription>
              Informações básicas do produto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Nome</span>
              <span className="text-sm text-muted-foreground">Tablet</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Categoria</span>
              <span className="text-sm text-muted-foreground">Acessórios</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Fornecedor</span>
              <span className="text-sm text-muted-foreground">GadgetWorld</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Quantidade</span>
              <span className="text-sm text-muted-foreground">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Preço de Venda</span>
              <span className="text-sm text-muted-foreground">€ 900</span>
            </div>
            <Separator />
            <Link href={Path.products} target="_blank">
              <Button variant="outline">
                Ver página do produto
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default InvoiceProducts