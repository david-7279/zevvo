"use client"

import { useState } from "react"
import FeaturesAside from "@/app/(core)/(features)/_components/siderbar/aside";
import FeaturesContent from "@/app/(core)/(features)/_components/siderbar/content";
import CoreWrapper from "@/app/(core)/_components/core-wrapper";
import { InfoIcon, MapPinHouseIcon } from "lucide-react";

const clientData = [
  {
    id: "client-details",
    title: "Detalhes",
    icon: InfoIcon,
  },
  {
    id: "client-address",
    title: "Morada",
    icon: MapPinHouseIcon,
  },
]

const ClientPage = () => {
  const [activeId, setActiveId] = useState(clientData[0].id)

  return (
    <CoreWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FeaturesAside items={clientData} activeId={activeId} onItemClick={setActiveId} type="do cliente" />

          <main className="flex-1 min-w-0">
            <FeaturesContent activeId={activeId} />
          </main>
        </div>
      </div>
    </CoreWrapper>
  )
}

export default ClientPage
