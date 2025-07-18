import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { User, Key } from "lucide-react"

const AccountContent = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Definições da Conta</h1>
        <p className="text-muted-foreground">
          Gerir as informações da sua conta e preferências pessoais
        </p>
      </div>

      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Informações do Perfil
          </CardTitle>
          <CardDescription>
            Atualize as suas informações pessoais
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Primeiro Nome</Label>
              <Input id="firstName" placeholder="Nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Último Nome</Label>
              <Input id="lastName" placeholder="Apelido" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="zevvo@exemplo.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" placeholder="910 200 300" />
          </div>

          <Button>Guardar Alterações</Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Segurança da Conta
          </CardTitle>
          <CardDescription>
            Configurações de segurança e palavra-passe
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Alterar Palavra-passe</p>
              <p className="text-xs text-muted-foreground">Última alteração há 30 dias</p>
            </div>
            <Button variant="outline" size="sm">Alterar</Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Eliminar Conta</p>
              <p className="text-xs text-muted-foreground">Eliminar permanentemente a sua conta</p>
            </div>
            <Button variant="destructive" size="sm">Eliminar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountContent
