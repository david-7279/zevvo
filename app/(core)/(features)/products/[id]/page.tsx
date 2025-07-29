"use client"

import { useState } from "react"
import FeaturesAside from "@/app/(core)/(features)/_components/siderbar/aside";
import FeaturesContent from "@/app/(core)/(features)/_components/siderbar/content";
import CoreWrapper from "@/app/(core)/_components/core-wrapper";
import { TrendingUpDownIcon, TagIcon, InfoIcon } from "lucide-react";

const productData = [
  {
    id: "product-details",
    title: "Detalhes",
    icon: InfoIcon,
  },
  {
    id: "product-specifications",
    title: "Especificações",
    icon: TagIcon,
  },
  {
    id: "product-stock",
    title: "Stock",
    icon: TrendingUpDownIcon,
  },
]

const ProductPage = () => {
  const [activeId, setActiveId] = useState(productData[0].id)

  return (
    <CoreWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FeaturesAside items={productData} activeId={activeId} onItemClick={setActiveId} type="do produto" />

          <main className="flex-1 min-w-0">
            <FeaturesContent activeId={activeId} />
          </main>
        </div>
      </div>
    </CoreWrapper>
  )
}

export default ProductPage
