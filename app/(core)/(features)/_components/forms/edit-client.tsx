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

const EditClientForm = () => {
  const router = useRouter()

  const [newClient, setnewClient] = useState({
    primeiroNome: "",
    apelido: "",
    email: "",
    telemovel: "",
    morada: "",
    cidade: "",
    codigoPostal: "",
  })

  const [isSubmiting, setisSubmiting] = useState(false)

  const handleInputChange = (campo: string, valor: string) => {
    setnewClient((anterior) => ({ ...anterior, [campo]: valor }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setisSubmiting(true)

    try {
      console.log("A criar cliente:", { ...newClient })
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert("Cliente criado com sucesso!")
      router.push(Path.clients)
    } catch (error) {
      console.error("Erro ao criar cliente:", error)
      alert("Ocorreu um erro ao criar o cliente. Por favor, tente novamente.")
    } finally {
      setisSubmiting(false)
    }
  }

  const resetForm = () => {
    setnewClient({
      primeiroNome: "",
      apelido: "",
      email: "",
      telemovel: "",
      morada: "",
      cidade: "",
      codigoPostal: "",
    })
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col items-start gap-4">
        <Link href={Path.clients}>
          <Button variant='ghost' className='group'>
            <ArrowLeftIcon className='transition-transform duration-200 group-hover:-translate-x-0.5' />
            Voltar aos Clientes
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Editar Cliente</h1>
          <p className="text-sm text-muted-foreground">Atualiza os dados do cliente</p>
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
                  Dados essenciais do cliente como nome, email e número de telemóvel.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primeiroNome">Primeiro Nome *</Label>
                    <Input
                      id="primeiroNome"
                      placeholder="Ex: David"
                      value={newClient.primeiroNome}
                      onChange={(e) => handleInputChange("primeiroNome", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apelido">Apelido *</Label>
                    <Input
                      id="apelido"
                      placeholder="Ex: Vieira"
                      value={newClient.apelido}
                      onChange={(e) => handleInputChange("apelido", e.target.value)}
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
                      value={newClient.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telemovel">Número de Telemóvel *</Label>
                    <Input
                      id="telemovel"
                      placeholder="Ex: 900 100 200"
                      value={newClient.telemovel}
                      onChange={(e) => handleInputChange("telemovel", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Morada */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground">Morada</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Indique a morada, código postal e cidade do cliente.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="morada">Morada</Label>
                    <Input
                      id="morada"
                      placeholder="Ex: Rua de Cima, 00"
                      value={newClient.morada}
                      onChange={(e) => handleInputChange("morada", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="codigoPostal">Código Postal</Label>
                    <Input
                      id="codigoPostal"
                      placeholder="Ex: 4000-100"
                      value={newClient.codigoPostal}
                      onChange={(e) => handleInputChange("codigoPostal", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input
                      id="cidade"
                      placeholder="Ex: Porto"
                      value={newClient.cidade}
                      onChange={(e) => handleInputChange("cidade", e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ações do Formulário */}
            <div className="flex flex-wrap gap-5 items-center justify-between">
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={resetForm} disabled={isSubmiting}>
                  Limpar Formulário
                </Button>
                <Link href={Path.clients}>
                  <Button type="button" variant="outline" disabled={isSubmiting}>
                    Cancelar
                  </Button>
                </Link>
              </div>
              <Button
                type="submit"
                disabled={
                  !newClient.primeiroNome ||
                  !newClient.apelido ||
                  !newClient.email ||
                  !newClient.telemovel ||
                  !newClient.morada ||
                  !newClient.codigoPostal ||
                  isSubmiting
                }
                className="min-w-[140px]"
              >
                {isSubmiting ? (
                  "A criar..."
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Cliente
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

export default EditClientForm
