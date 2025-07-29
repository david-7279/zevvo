"use client"

import { useState } from "react"
import FeaturesAside from "@/app/(core)/(features)/_components/siderbar/aside";
import FeaturesContent from "@/app/(core)/(features)/_components/siderbar/content";
import CoreWrapper from "@/app/(core)/_components/core-wrapper";
import { TrendingUpDownIcon, TagIcon, InfoIcon, BoxesIcon } from "lucide-react";

const invoiceData = [
  {
    id: "invoice-details",
    title: "Detalhes",
    icon: InfoIcon,
  },
  {
    id: "invoice-products",
    title: "Produtos",
    icon: BoxesIcon,
  },
]

const InvoicePage = () => {
  const [activeId, setActiveId] = useState(invoiceData[0].id)

  return (
    <CoreWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FeaturesAside items={invoiceData} activeId={activeId} onItemClick={setActiveId} type="da fatura" />

          <main className="flex-1 min-w-0">
            <FeaturesContent activeId={activeId} />
          </main>
        </div>
      </div>
    </CoreWrapper>
  )
}

export default InvoicePage
