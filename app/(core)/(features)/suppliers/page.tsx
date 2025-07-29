import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import FeatureHeaderCardComponent from "../_components/header-card"
import SuppliersContent from "@/app/(core)/(features)/suppliers/suppliers-content"
import { ClockIcon, DollarSignIcon, EuroIcon, PackageIcon, TriangleAlertIcon, TruckIcon, UsersIcon } from "lucide-react"


const customData = [
  {
    title: "Total de Fornecedores",
    value: "122",
    description: "Total de fornecedores deste mês",
    percentage: "+8.2%",
    trend: "up" as const,
    icon: TruckIcon,
  },
  {
    title: "Fornecedores Ativos",
    value: "30",
    description: "Total de fornecedores ativos",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: PackageIcon,
  },
  {
    title: "Total de Pagamentos",
    value: "€4,125",
    description: "Total de pagamentos deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: EuroIcon,
  },
  {
    title: "Pagamentos Pendentes",
    value: "€4,125",
    description: "Total de pagamentos pendentes",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: ClockIcon,
  },
]

const Suppliers = () => {
  return (
    <CoreWrapper>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Fornecedores</h3>
      <div className="space-y-16">
        {/* Header Cards Row */}
        <div className="flex flex-row flex-wrap gap-5">
          <FeatureHeaderCardComponent data={customData} />
        </div >

        {/* CONTENT */}
        <SuppliersContent />
      </div>
    </CoreWrapper>
  )
}

export default Suppliers