import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import FeatureHeaderCardComponent from "../_components/header-card"
import { CheckCircleIcon, ClockIcon, EuroIcon, TriangleAlertIcon } from "lucide-react"
import ClientsContent from "@/app/(core)/(features)/clients/clients-content"
import PaymentsContent from "@/app/(core)/(features)/payments/payments-content"

const customData = [
  {
    title: "Total de Pagamentos",
    value: "€45,230",
    description: "Total de pagamentos deste mês",
    percentage: "+2.1 %",
    trend: "up" as const,
    icon: EuroIcon,
  },
  {
    title: "Recebidos",
    value: "€38,450",
    description: "Total de pagamentos deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: CheckCircleIcon,
  },
  {
    title: "Pendentes",
    value: "€5,680",
    description: "Total de clientes ativos deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: ClockIcon,
  },
  {
    title: "Falhados",
    value: "€1,100",
    description: "Total de pagamentos deste mês",
    percentage: "-2.1%",
    trend: "down" as const,
    icon: TriangleAlertIcon,
  },
]

const Payments = () => {
  return (
    <CoreWrapper>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Pagamentos</h3>
      <div className="space-y-16">
        {/* Header Cards Row */}
        <div className="flex flex-row flex-wrap gap-5">
          <FeatureHeaderCardComponent data={customData} />
        </div >

        {/* CONTENT */}
        <PaymentsContent />
      </div>
    </CoreWrapper>
  )
}

export default Payments