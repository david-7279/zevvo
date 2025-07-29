import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import FeatureHeaderCardComponent from "../_components/header-card"
import { CheckCircleIcon, ClockIcon, EuroIcon, FileTextIcon, TriangleAlertIcon } from "lucide-react"
import InvoicesContent from "@/app/(core)/(features)/invoices/invoices-content"

const customData = [
  {
    title: "Total de Faturas",
    value: "€45,230",
    description: "Total de faturas deste mês",
    percentage: "+2.1 %",
    trend: "up" as const,
    icon: FileTextIcon,
  },
  {
    title: "Pagas",
    value: "€38,450",
    description: "Total de faturas pagas deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: CheckCircleIcon,
  },
  {
    title: "Não Pagas",
    value: "€5,680",
    description: "Total de faturas não pagas deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: ClockIcon,
  },
  {
    title: "Vencidas",
    value: "€1,100",
    description: "Total de faturas vencidas deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: TriangleAlertIcon,
  },
]

const Invoices = () => {
  return (
    <CoreWrapper>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Faturas</h3>
      <div className="space-y-16">
        {/* Header Cards Row */}
        <div className="flex flex-row flex-wrap gap-5">
          <FeatureHeaderCardComponent data={customData} />
        </div >

        {/* CONTENT */}
        <InvoicesContent />
      </div>
    </CoreWrapper>
  )
}

export default Invoices