import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import FeatureHeaderCardComponent from "../_components/header-card"
import { BoxesIcon, DollarSignIcon, PackageIcon, TriangleAlertIcon, UsersIcon } from "lucide-react"

const customData = [
  {
    title: "Total de Produtos",
    value: "122",
    description: "Total de receitas deste mês",
    percentage: "+8.2%",
    trend: "up" as const,
    icon: PackageIcon,
  },
  {
    title: "Mais Vendido",
    value: "Smartphone Pro",
    description: "Total do produto mais vendido deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: DollarSignIcon,
  },
  {
    title: "Em falta",
    value: "3",
    description: "Total de produtos em falta deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: TriangleAlertIcon,
  },
  {
    title: "Total de Stock",
    value: "€4,125",
    description: "Total de stocks deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: UsersIcon,
  },
]

const Products = () => {
  return (
    <CoreWrapper>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Produtos</h3>
      <div className="space-y-16">
        {/* Header Cards Row */}
        <div className="flex flex-row flex-wrap gap-5">
          <FeatureHeaderCardComponent data={customData} />
        </div >
      </div>
    </CoreWrapper>
  )
}

export default Products