import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Globe, Shield, Database } from "lucide-react"

const SystemContent = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Definições da Plataforma</h1>
        <p className="text-muted-foreground">
          Configurações gerais do sistema e preferências da plataforma
        </p>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Estado do Sistema
          </CardTitle>
          <CardDescription>
            Informações sobre o estado atual da plataforma
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Estado dos Serviços</span>
            <Badge variant="default" className="bg-green-100 text-green-800">
              Operacional
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Última Atualização</span>
            <span className="text-sm text-muted-foreground">15 de junho de 2025</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Versão da Plataforma</span>
            <span className="text-sm text-muted-foreground">v1.3.0</span>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Segurança
          </CardTitle>
          <CardDescription>
            Configurações de segurança e autenticação
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="space-y-1">
              <p className="text-sm font-medium">Autenticação de Dois Fatores</p>
              <p className="text-xs text-muted-foreground">Proteção adicional para sua conta</p>
            </div>
            <Button variant="outline" size="sm">Ativar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Data & Storage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Dados e Armazenamento
          </CardTitle>
          <CardDescription>
            Gestão de dados e configurações de armazenamento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="space-y-1">
              <p className="text-sm font-medium">Backup Automático</p>
              <p className="text-xs text-muted-foreground">Backup semanal dos seus dados</p>
            </div>
            <Badge variant="secondary">Ativado</Badge>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Exportar Dados</p>
              <p className="text-xs text-muted-foreground">Descarregar uma cópia dos seus dados</p>
            </div>
            <Button variant="outline" size="sm">Exportar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SystemContent
