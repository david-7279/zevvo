import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import FeatureHeaderCardComponent from "../_components/header-card"
import { DollarSignIcon, PackageIcon, TriangleAlertIcon, UsersIcon } from "lucide-react"
import ClientsContent from "@/app/(core)/(features)/clients/clients-content"


const customData = [
  {
    title: "Total de Clientes",
    value: "122",
    description: "Total de clientes deste mês",
    percentage: "+8.2%",
    trend: "up" as const,
    icon: PackageIcon,
  },
  {
    title: "Novos Clientes",
    value: "30",
    description: "Total de novos clientes deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: DollarSignIcon,
  },
  {
    title: "Clientes Ativos",
    value: "3",
    description: "Total de clientes ativos deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: TriangleAlertIcon,
  },
  {
    title: "Pagamentos deste mês",
    value: "€4,125",
    description: "Total de pagamentos deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: UsersIcon,
  },
]

const Clients = () => {
  return (
    <CoreWrapper>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Clientes</h3>
      <div className="space-y-16">
        {/* Header Cards Row */}
        <div className="flex flex-row flex-wrap gap-5">
          <FeatureHeaderCardComponent data={customData} />
        </div >

        {/* CONTENT */}
        <ClientsContent />

      </div>
    </CoreWrapper>
  )
}

export default Clients