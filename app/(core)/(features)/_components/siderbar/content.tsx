import React from "react"
import ProductDetails from "@/app/(core)/(features)/products/[id]/_components/product-details"
import ProductSpecifications from "@/app/(core)/(features)/products/[id]/_components/product-specifications"
import ProductStock from "@/app/(core)/(features)/products/[id]/_components/product-stock"

import ClientDetails from "@/app/(core)/(features)/clients/[id]/_components/client-details"
import ClientAddress from "@/app/(core)/(features)/clients/[id]/_components/client-address"
import NotFoundContent from "./not-found-content"

interface Props {
  activeId: string
}

const FeaturesContent: React.FC<Props> = ({ activeId }) => {
  const renderContent = () => {
    switch (activeId) {
      // PRODUCT
      case "product-details":
        return <ProductDetails />
      case "product-specifications":
        return <ProductSpecifications />
      case "product-stock":
        return <ProductStock />

      // CLIENT
      case "client-details":
        return <ClientDetails />
      case "client-address":
        return <ClientAddress />

      // NOT FOUND
      default:
        return <NotFoundContent />
    }
  }

  return (
    <div className="w-full">
      {renderContent()}
    </div>
  )
}

export default FeaturesContent