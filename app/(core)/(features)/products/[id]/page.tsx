"use client"

import { useState } from "react"
import ProductAside from "@/app/(core)/(features)/products/[id]/_components/aside";
import ProductContent from "@/app/(core)/(features)/products/[id]/_components/content";
import CoreWrapper from "@/app/(core)/_components/core-wrapper";
import { PackageIcon, UserIcon, WalletIcon } from "lucide-react";

interface ProductPageProps {
  params: {
    id: string
  }
}

const productData = [
  {
    id: "details",
    title: "Detalhes",
    icon: PackageIcon,
  },
  {
    id: "specifications",
    title: "Especificações",
    icon: UserIcon,
  },
  {
    id: "stock",
    title: "Stock",
    icon: WalletIcon,
  },
]

const ProductPage = ({ params }: ProductPageProps) => {
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
