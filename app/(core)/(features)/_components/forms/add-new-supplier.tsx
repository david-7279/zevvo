"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, ArrowLeftIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Path } from "@/lib/paths"
import Link from "next/link"

// Import Select components
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const CATEGORY_OPTIONS = [
  "Tecnologia",
  "Alimentação",
  "Serviços",
  "Vestuário",
  "Construção",
  "Transporte",
  "Outro",
]

const CONDITIONS_OPTIONS = [
  "Pagamento a pronto",
  "Pagamento a 30 dias",
  "Pagamento a 60 dias",
  "Pagamento a 90 dias",
  "Outro",
]

const STATUS_OPTIONS = [
  { value: "active", label: "Ativo" },
  { value: "inactive", label: "Inativo" },
]

const NewSupplierForm = () => {
  const router = useRouter()

  const [newSupplier, setNewSupplier] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    conditions: "",
    supplierStatus: "",
  })

  const [isSubmiting, setisSubmiting] = useState(false)

  const handleInputChange = (campo: string, valor: string) => {
    setNewSupplier((anterior) => ({ ...anterior, [campo]: valor }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setisSubmiting(true)

    try {
      console.log("A criar fornecedor:", { ...newSupplier })
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("Fornecedor criado com sucesso!")
      router.push(Path.suppliers)
    } catch (error) {
      console.error("Erro ao criar fornecedor:", error)
      alert("Ocorreu um erro ao criar o fornecedor. Por favor, tente novamente.")
    } finally {
      setisSubmiting(false)
    }
  }

  const resetForm = () => {
    setNewSupplier({
      name: "",
      email: "",
      phone: "",
      category: "",
      conditions: "",
      supplierStatus: "",
    })
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col items-start gap-4">
        <Link href={Path.suppliers}>
          <Button variant='ghost' className='group'>
            <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-0.5' />
            Voltar aos Fornecedores
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Criar Novo Fornecedor</h1>
          <p className="text-sm text-muted-foreground">Preencha os dados do novo fornecedor</p>
        </div>
      </div>

      {/* Formulário */}
      <Card className="shadow-none">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Secção de Informação Básica */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Informação básica</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Dados essenciais do fornecedor como nome, email e número de telemóvel.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome do Fornecedor *</Label>
                    <Input
                      id="name"
                      placeholder="Ex: Tech Pro"
                      value={newSupplier.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Endereço de Email *</Label>
                    <Input
                      id="email"
                      placeholder="Ex: zevvo@exemplo.com"
                      value={newSupplier.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de Telemóvel *</Label>
                    <Input
                      id="phone"
                      placeholder="Ex: 900 100 200"
                      value={newSupplier.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Secção de Categoria, Condições e Estado */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Detalhes do Fornecedor</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Indique a categoria, condições e estado do fornecedor.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria dos produtos *</Label>
                    <Select
                      value={newSupplier.category}
                      onValueChange={(value) => handleInputChange("category", value)}
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORY_OPTIONS.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="conditions">Condições do Fornecedor *</Label>
                    <Select
                      value={newSupplier.conditions}
                      onValueChange={(value) => handleInputChange("conditions", value)}
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione as condições" />
                      </SelectTrigger>
                      <SelectContent>
                        {CONDITIONS_OPTIONS.map((cond) => (
                          <SelectItem key={cond} value={cond}>
                            {cond}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplierStatus">Estado do Fornecedor *</Label>
                    <Select
                      value={newSupplier.supplierStatus}
                      onValueChange={(value) => handleInputChange("supplierStatus", value)}
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUS_OPTIONS.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Ações do Formulário */}
            <div className="flex flex-wrap gap-5 items-center justify-between">
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={resetForm} disabled={isSubmiting}>
                  Limpar Formulário
                </Button>
                <Link href={Path.suppliers}>
                  <Button type="button" variant="outline" disabled={isSubmiting}>
                    Cancelar
                  </Button>
                </Link>
              </div>
              <Button
                type="submit"
                disabled={
                  !newSupplier.name ||
                  !newSupplier.email ||
                  !newSupplier.phone ||
                  !newSupplier.category ||
                  !newSupplier.conditions ||
                  !newSupplier.supplierStatus ||
                  isSubmiting
                }
                className="min-w-[140px]"
              >
                {isSubmiting ? (
                  "A criar..."
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Fornecedor
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

export default NewSupplierForm
