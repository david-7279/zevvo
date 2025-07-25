import React from "react"

import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import DashboardFooterCard from "@/app/(core)/(overview)/dashboard/_components/footer-card"
import DashboardSalesChart from "@/app/(core)/(overview)/dashboard/_components/charts/sales"
import DashboardStocksChart from "@/app/(core)/(overview)/dashboard/_components/charts/stocks"
import OverviewHeaderCardComponent from "@/app/(core)/(overview)/_components/header-card"
import { BoxesIcon, DollarSignIcon, UsersIcon } from "lucide-react"

const customData = [
  {
    title: "Receitas",
    value: "$12,000",
    description: "Total de receitas deste mês",
    percentage: "+8.2%",
    trend: "up" as const,
    icon: DollarSignIcon,
  },
  {
    title: "Produtos",
    value: "1,200",
    description: "Total de produtos deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: BoxesIcon,
  },
  {
    title: "Orders",
    value: "1,200",
    description: "Total orders this month",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: UsersIcon,
  },
]

const Dashboard = () => {
  return (
    <CoreWrapper>
      {/* Dashboard Title */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dashboard</h3>

      {/* Header Cards Row */}
      <div className="flex flex-row flex-wrap justify-baseline gap-5">
        <OverviewHeaderCardComponent data={customData} />
      </div >

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardSalesChart />
        <DashboardStocksChart />
      </div >

      {/* Bottom Cards Row */}
      <div className="flex flex-row flex-wrap gap-5 md:gap-10" >
        <DashboardFooterCard />
      </div>
    </CoreWrapper>
  )
}

export default Dashboard