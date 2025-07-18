"use client"

import { useState } from "react"
import ProductAside from "@/app/(core)/(features)/products/[id]/_components/aside";
import ProductContent from "@/app/(core)/(features)/products/[id]/_components/content";
import CoreWrapper from "@/app/(core)/_components/core-wrapper";
import { TrendingUpDownIcon, TagIcon, InfoIcon } from "lucide-react";

const productData = [
  {
    id: "details",
    title: "Detalhes",
    icon: InfoIcon,
  },
  {
    id: "specifications",
    title: "Especificações",
    icon: TagIcon,
  },
  {
    id: "stock",
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
          <ProductAside items={productData} activeId={activeId} onItemClick={setActiveId} />

          <main className="flex-1 min-w-0">
            <ProductContent activeId={activeId} />
          </main>
        </div>
      </div>
    </CoreWrapper>
  )
}

export default ProductPage
