import React from "react"

import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import OverviewHeaderCardComponent from "@/app/(core)/(overview)/_components/header-card"
import { BoxesIcon, DollarSignIcon, UsersIcon } from "lucide-react"
import DataTableReport from "@/app/(core)/(overview)/reports/_components/table-report"

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

const Reports = () => {
  return (
    <CoreWrapper>
      {/* Report Title */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Relatórios</h3>

      {/* Header Cards Row */}
      <div className="flex flex-row flex-wrap justify-between gap-5">
        <OverviewHeaderCardComponent data={customData} />
      </div >

      {/* Data Table */}
      <div>
        <DataTableReport />
      </div>
    </CoreWrapper>
  )
}

export default Reports