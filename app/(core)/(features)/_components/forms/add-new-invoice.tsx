"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Path } from "@/lib/paths"

// Dummy data for select options
const clients = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
]

const products = [
  "Produto 1",
  "Produto 2",
  "Produto 3",
]

const paymentMethods = [
  "Dinheiro",
  "Cartão de Crédito",
  "Cartão de Débito",
  "Pix",
  "Transferência Bancária",
]

interface InvoicesData {
  id: number
  client: string
  clientId: number
  paymentPrice: number
  paymentStatus: string
  products: string
  timestamp: string
  dueDate: string
  createAt: string
  description: string
  invoiceNumer: number
}

const NewInvoiceForm = () => {
  const router = useRouter()

  // Form state based on InvoicesData (excluding id, clientId, paymentStatus, timestamp, createAt, invoiceNumer)
  const [newInvoice, setNewInvoice] = useState<{
    client: string
    products: string
    paymentPrice: string
    paymentMethod: string
    dueDate: string
    description: string
  }>({
    client: "",
    products: "",
    paymentPrice: "",
    paymentMethod: "",
    dueDate: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof typeof newInvoice, value: string) => {
    setNewInvoice((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would map to InvoicesData as needed for backend
      console.log("Creating invoice:", { ...newInvoice })
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("Fatura criada com sucesso!")
      router.push(Path.payments)
    } catch (error) {
      console.error("Error creating invoice:", error)
      alert("Erro ao criar fatura. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setNewInvoice({
      client: "",
      products: "",
      paymentPrice: "",
      paymentMethod: "",
      dueDate: "",
      description: "",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col items-start gap-4">
        <Link href={Path.invoices}>
          <Button variant='ghost' className='group'>
            <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-0.5' />
            Voltar as faturas
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Criar Nova Fatura</h1>
          <p className="text-sm text-muted-foreground">Preencha os detalhes da nova fatura</p>
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
                  Detalhes essenciais da fatura como cliente, produtos e identificação.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client">Nome do Cliente *</Label>
                    <Select value={newInvoice.client} onValueChange={(value) => handleInputChange("client", value)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map((client) => (
                          <SelectItem key={client} value={client}>
                            {client}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="products">Produto/Serviço *</Label>
                    <Select value={newInvoice.products} onValueChange={(value) => handleInputChange("products", value)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um produto ou serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product} value={product}>
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Pricing & Financial Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Preços e financeiro</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Configure o valor da fatura e o método de pagamento.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="paymentPrice">Valor da Fatura *</Label>
                    <Input
                      id="paymentPrice"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={newInvoice.paymentPrice}
                      onChange={(e) => handleInputChange("paymentPrice", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">Método de pagamento *</Label>
                    <Select value={newInvoice.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o método de pagamento" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map((paymentMethod) => (
                          <SelectItem key={paymentMethod} value={paymentMethod}>
                            {paymentMethod}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Additional Information */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Informações adicionais</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Adicione uma descrição e a data de vencimento da fatura.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Data de Vencimento *</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    placeholder="Selecione a data de vencimento"
                    value={newInvoice.dueDate}
                    onChange={(e) => handleInputChange("dueDate", e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva as características principais da fatura (Opcional)..."
                    rows={4}
                    value={newInvoice.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="w-full"
                  />
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
                <Link href={Path.payments}>
                  <Button type="button" variant="outline" disabled={isSubmitting}>
                    Cancelar
                  </Button>
                </Link>
              </div>
              <Button
                type="submit"
                disabled={
                  !newInvoice.client ||
                  !newInvoice.products ||
                  !newInvoice.paymentPrice ||
                  !newInvoice.paymentMethod ||
                  !newInvoice.dueDate ||
                  isSubmitting
                }
                className="min-w-[140px]"
              >
                {isSubmitting ? (
                  "Criando..."
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Fatura
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

export default NewInvoiceForm
