import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, MoreHorizontal, User, ArrowRight } from "lucide-react"
import DashboardHeaderCard from '../_components/dashboard-header-card'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Dashboard Title */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dashboard</h3>

      {/* Header Cards Row */}
      <div className="flex flex-row flex-wrap justify-between gap-5">
        <DashboardHeaderCard />
      </div >

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendas Chart */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded bg-muted" />
              <span className="font-medium">Vendas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="semanal">
                <SelectTrigger className="w-24 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semanal">Semanal</SelectItem>
                  <SelectItem value="mensal">Mensal</SelectItem>
                  <SelectItem value="anual">Anual</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                Filtrar
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-64">
            <div className="text-6xl font-bold text-muted-foreground">CHART</div>
          </CardContent>
        </Card>

        {/* Stock Chart */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded bg-muted" />
              <span className="font-medium">Stock</span>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-64">
            <div className="text-6xl font-bold text-muted-foreground">CHART</div>
          </CardContent>
        </Card >
      </div >

      {/* Bottom Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-muted rounded-lg">
                <User className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Gestão de clientes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Organize as informações dos clientes e acompanhe o histórico de compromissos num único local.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium">
                  Descobrir Mais
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-muted rounded-lg">
                <User className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">Gestão de clientes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Organize as informações dos clientes e acompanhe o histórico de compromissos num único local.
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium">
                  Descobrir Mais
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard