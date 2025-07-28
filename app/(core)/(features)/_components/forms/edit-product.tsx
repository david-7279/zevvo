"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Calculator, ArrowLeftIcon, EditIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Path } from "@/lib/paths"

const EditProductForm = () => {
  const router = useRouter()

  const [newProduct, setNewProduct] = useState({
    name: "",
    sku: "",
    price: "",
    stockUnity: "",
    warranty: "",
    salePrice: "",
    buyPrice: "",
    weight: "",
    dimensions: "",
    material: "",
    category: "",
    supplier: "",
    description: "",
    minStock: "",
    location: "",
    taxRate: "23", // Default to normal Portuguese VAT rate
  })

  const [profitMargin, setProfitMargin] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Calculate profit margin automatically
  useEffect(() => {
    const salePrice = Number.parseFloat(newProduct.salePrice) || 0
    const buyPrice = Number.parseFloat(newProduct.buyPrice) || 0

    if (salePrice > 0 && buyPrice > 0) {
      const margin = ((salePrice - buyPrice) / salePrice) * 100
      setProfitMargin(margin)
    } else {
      setProfitMargin(0)
    }
  }, [newProduct.salePrice, newProduct.buyPrice])

  const handleInputChange = (field: string, value: string) => {
    setNewProduct((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Creating product:", { ...newProduct, profitMargin })
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("Produto criado com sucesso!")
      router.push("/products")
    } catch (error) {
      console.error("Error creating product:", error)
      alert("Erro ao criar produto. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setNewProduct({
      name: "",
      sku: "",
      price: "",
      stockUnity: "",
      warranty: "",
      salePrice: "",
      buyPrice: "",
      weight: "",
      dimensions: "",
      material: "",
      category: "",
      supplier: "",
      description: "",
      minStock: "",
      location: "",
      taxRate: "23",
    })
    setProfitMargin(0)
  }

  const categories = [
    "Eletrónicos",
    "Computadores",
    "Áudio",
    "Wearables",
    "Acessórios",
    "Casa e Jardim",
    "Desporto",
    "Moda",
    "Automóvel",
    "Saúde e Beleza",
  ]

  const suppliers = [
    "TechSupply Ltd",
    "Gaming Solutions",
    "AudioTech Distributor",
    "SportTech Wholesale",
    "Fashion Direct",
    "Home & Garden Co",
    "Auto Parts Plus",
    "Beauty Supply Pro",
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col items-start gap-4">
        <Link href={Path.products}>
          <Button variant='ghost' className='group'>
            <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-0.5' />
            Voltar aos Produtos
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Editar Produto</h1>
          <p className="text-sm text-muted-foreground">Atualiza os detalhes do produto</p>
        </div>
      </div>

      {/* Form */}
      <Card className="shadow-none">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Basic Information Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Informações básicas</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Detalhes essenciais do produto como nome, categoria e identificação.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome do Produto *</Label>
                    <Input
                      id="name"
                      placeholder="Ex: Smartphone Pro Max"
                      value={newProduct.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU *</Label>
                    <Input
                      id="sku"
                      placeholder="Ex: SPM-2024-001"
                      value={newProduct.sku}
                      onChange={(e) => handleInputChange("sku", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria *</Label>
                    <Select value={newProduct.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplier">Fornecedor *</Label>
                    <div className="flex gap-2">
                      <Select value={newProduct.supplier} onValueChange={(value) => handleInputChange("supplier", value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione um fornecedor" />
                        </SelectTrigger>
                        <SelectContent>
                          {suppliers.map((supplier) => (
                            <SelectItem key={supplier} value={supplier}>
                              {supplier}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button type="button" variant="outline" size="sm" className="px-3 bg-transparent">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva as características principais do produto..."
                    rows={4}
                    value={newProduct.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

            </div>

            <Separator />

            {/* Pricing & Financial Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Preços e financeiro</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Configure os preços de compra, venda e calcule automaticamente a margem de lucro.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="buyPrice">Preço de Compra (€) *</Label>
                    <Input
                      id="buyPrice"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={newProduct.buyPrice}
                      onChange={(e) => handleInputChange("buyPrice", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salePrice">Preço de Venda (€) *</Label>
                    <Input
                      id="salePrice"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={newProduct.salePrice}
                      onChange={(e) => handleInputChange("salePrice", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="profitMargin">Margem de Lucro</Label>
                    <div className="flex items-center h-10 px-3 border border-input bg-muted rounded-md w-full">
                      <Calculator className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className={`font-medium ${profitMargin > 0 ? "text-green-600" : "text-muted-foreground"}`}>
                        {profitMargin.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxRate">Taxa IVA (%)</Label>
                    <Select value={newProduct.taxRate} onValueChange={(value) => handleInputChange("taxRate", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione taxa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0% - Isento</SelectItem>
                        <SelectItem value="6">6% - Taxa reduzida</SelectItem>
                        <SelectItem value="13">13% - Taxa intermédia</SelectItem>
                        <SelectItem value="23">23% - Taxa normal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <Separator />
            {/* Inventory & Stock Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Inventário e stock</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Gerir quantidades em stock, alertas de stock mínimo e localização na loja.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stockUnity">Quantidade em Stock *</Label>
                    <Input
                      id="stockUnity"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={newProduct.stockUnity}
                      onChange={(e) => handleInputChange("stockUnity", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="minStock">Alerta Stock Mínimo</Label>
                    <Input
                      id="minStock"
                      type="number"
                      min="0"
                      placeholder="5"
                      value={newProduct.minStock}
                      onChange={(e) => handleInputChange("minStock", e.target.value)}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">Receber alerta quando stock atingir este valor</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localização na Loja</Label>
                  <Input
                    id="location"
                    placeholder="Ex: Prateleira A3, Armazém"
                    value={newProduct.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Product Specifications Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Especificações</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Detalhes técnicos do produto como peso, dimensões, material e garantia.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Peso</Label>
                    <Input
                      id="weight"
                      placeholder="Ex: 195g"
                      value={newProduct.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Dimensões</Label>
                    <Input
                      id="dimensions"
                      placeholder="Ex: 160 x 78 x 7.4 mm"
                      value={newProduct.dimensions}
                      onChange={(e) => handleInputChange("dimensions", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                  <div className="space-y-2">
                    <Label htmlFor="warranty">Garantia</Label>
                    <Input
                      id="warranty"
                      placeholder="Ex: 24 meses"
                      value={newProduct.warranty}
                      onChange={(e) => handleInputChange("warranty", e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="material">Material</Label>
                    <Input
                      id="material"
                      placeholder="Ex: Alumínio, Vidro temperado"
                      value={newProduct.material}
                      onChange={(e) => handleInputChange("material", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Form Actions */}
            <div className="flex flex-wrap gap-5 items-center justify-between">
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={resetForm} disabled={isSubmitting}>
                  Limpar Formulário
                </Button>
                <Link href="/products">
                  <Button type="button" variant="outline" disabled={isSubmitting}>
                    Cancelar
                  </Button>
                </Link>
              </div>
              <Button
                type="submit"
                disabled={
                  !newProduct.name ||
                  !newProduct.sku ||
                  !newProduct.category ||
                  !newProduct.supplier ||
                  !newProduct.buyPrice ||
                  !newProduct.salePrice ||
                  !newProduct.stockUnity ||
                  isSubmitting
                }
                className="min-w-[140px]"
              >
                {isSubmitting ? (
                  "Criando..."
                ) : (
                  <>
                    <EditIcon className="h-4 w-4 mr-2" />
                    Editar Produto
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditProductForm
