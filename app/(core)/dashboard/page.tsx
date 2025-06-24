import React from "react"

import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import DashboardHeaderCard from "@/app/(core)/_components/dashboard-header-card"
import DashboardFooterCard from "@/app/(core)/_components/dashboard-footer-card"
import DashboardSalesChart from "@/app/(core)/_components/dashboard-sales-chart"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

const Dashboard = () => {
  return (
    <CoreWrapper>
      {/* Dashboard Title */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dashboard</h3>

      {/* Header Cards Row */}
      <div className="flex flex-row flex-wrap justify-between gap-5">
        <DashboardHeaderCard />
      </div >

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendas Chart */}
        <DashboardSalesChart />

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
      <div className="flex flex-row flex-wrap gap-10" >
        <DashboardFooterCard />
      </div>
    </CoreWrapper>
  )
}

export default Dashboard