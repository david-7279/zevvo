"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Trash2, Plus, Minus, Package, Tag, Euro, History, ImageIcon, ArrowLeftIcon, DotIcon, EditIcon, Trash2Icon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Path } from "@/lib/paths"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/motion-tabs"
import { TabsContents } from "@/components/ui/motion-tabs"

// Mock product data - in real app, this would come from API
const getProductById = (id: string) => {
  const products = {
    PRD001: {
      id: "PRD001",
      name: "Smartphone Pro Max",
      price: 899.99,
      type: "Eletrónicos",
      stockSize: 45,
      stockStatus: "Em Stock",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "O mais avançado smartphone da nossa gama, com câmara profissional de 108MP, processador de última geração e bateria de longa duração. Perfeito para utilizadores exigentes que procuram performance e qualidade.",
      sku: "SPM-2024-001",
      createdAt: "2024-01-15",
      lastUpdated: "2024-01-08",
      category: "Smartphones",
      brand: "TechPro",
      weight: "195g",
      dimensions: "160.8 x 78.1 x 7.4 mm",
      warranty: "24 meses",
      supplier: "TechSupply Ltd",
      costPrice: 650.0,
      margin: 38.4,
    },
    PRD002: {
      id: "PRD002",
      name: "Laptop Gaming",
      price: 1299.99,
      type: "Computadores",
      stockSize: 12,
      stockStatus: "Stock Baixo",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Laptop gaming de alta performance com placa gráfica dedicada, processador Intel i7 e 16GB RAM. Ideal para gaming e trabalho profissional.",
      sku: "LG-2024-002",
      createdAt: "2024-01-10",
      lastUpdated: "2024-01-07",
      category: "Laptops",
      brand: "GameMax",
      weight: "2.3kg",
      dimensions: "359 x 236 x 19.9 mm",
      warranty: "36 meses",
      supplier: "Gaming Solutions",
      costPrice: 950.0,
      margin: 36.9,
    },
  }
  return products[id as keyof typeof products] || null
}

const stockHistory = [
  { date: "2024-01-08", action: "Adicionado", quantity: 10, user: "João Silva", reason: "Reposição stock" },
  { date: "2024-01-07", action: "Vendido", quantity: -3, user: "Sistema", reason: "Venda online" },
  { date: "2024-01-06", action: "Adicionado", quantity: 5, user: "Maria Santos", reason: "Correção inventário" },
  { date: "2024-01-05", action: "Vendido", quantity: -2, user: "Sistema", reason: "Venda loja" },
]

const tabs = [
  {
    name: 'Detalhes',
    value: 'details',
    content: (
      <>
        <span className='text-foreground font-semibold'>Detalhes</span> Aqui pode ver os detalhes do produto.
      </>
    )
  },
  {
    name: 'Histórico',
    value: 'history',
    content: (
      <>
        <span className='text-foreground font-semibold'>Histórico</span> Aqui pode ver o histórico de movimentações do produto.
      </>
    )
  }
]

interface ProductDetailsProps {
  productId: string
}

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const router = useRouter()
  const product = getProductById(productId)

  // Stock management
  const [stockQuantity, setStockQuantity] = useState(1)
  const [isStockDialogOpen, setIsStockDialogOpen] = useState(false)
  const [stockAction, setStockAction] = useState<"add" | "remove">("add")

  // Edit product
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [editImagePreview, setEditImagePreview] = useState<string | null>(null)

  // Delete product
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Package className="h-16 w-16 text-muted-foreground" />
        <h2 className="text-2xl font-semibold">Produto não encontrado</h2>
        <p className="text-muted-foreground">O produto que procura não existe ou foi removido.</p>
        <Link href={Path.products}>
          <Button variant="outline" className="gap-2 bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            Voltar aos Produtos
          </Button>
        </Link>
      </div>
    )
  }

  const getStockStatusColor = (status: string) => {
    switch (status) {
      case "Em Stock":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Stock Baixo":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Sem Stock":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const handleStockUpdate = () => {
    // Here you would typically send the data to your API
    console.log(`${stockAction} ${stockQuantity} units`)
    setIsStockDialogOpen(false)
    setStockQuantity(1)
    // Show success message
    alert(`Stock ${stockAction === "add" ? "adicionado" : "removido"} com sucesso!`)
  }

  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setEditingProduct((prev: any) => ({ ...prev, image: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <CoreWrapper>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href={Path.products}>
            <Button variant="ghost" className="group">
              <ArrowLeftIcon className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              Voltar
            </Button>
          </Link>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={Path.products}>Produtos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>{product.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <EditIcon className="h-4 w-4" />
            Editar
          </Button>

          <Button variant="outline" className="gap-2 bg-transparent text-red-600 dark:text-red-400">
            <Trash2Icon className="h-4 w-4 text-red-600 dark:text-red-400" />
            Eliminar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div>

      </div>
    </CoreWrapper>
  )
}

export default ProductDetails