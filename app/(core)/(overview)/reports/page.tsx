"use client"

import React from "react"

import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import OverviewHeaderCardComponent from "@/app/(core)/(overview)/_components/header-card"
import { BoxesIcon, DollarSignIcon, UsersIcon } from "lucide-react"

import DataTable from "@/app/(core)/(features)/_components/table/table-data"
import { columnsReport } from "@/app/(core)/(features)/_components/table/table-columns"

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

const customReport = [
  {
    id: 1,
    clientName: "David Vieira",
    productName: "Água 1.5L",
    price: 0.90,
    stock: "Em estoque",
    timeStamp: "08-12-2025 13:42:51"
  },
  {
    id: 2,
    clientName: "David Soares",
    productName: "Sumo de Laranja 0.5L",
    price: 0.70,
    stock: "Em estoque",
    timeStamp: "08-12-2025 13:42:57"
  }
]

const Reports = () => {
  return (
    <CoreWrapper>
      {/* Report Title */}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Relatórios</h3>

      <div className="space-y-16">
        {/* Header Cards Row */}
        <div className="flex flex-row flex-wrap justify-between gap-5">
          <OverviewHeaderCardComponent data={customData} />
        </div >

        {/* Data Table */}
        <DataTable
          data={customReport}
          columns={columnsReport}
          collectionType="relatório"
          idSelector={row => row.id}
        />
      </div>
    </CoreWrapper>
  )
}

export default Reports