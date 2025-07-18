import React from "react"
import ProductDetails from "@/app/(core)/(features)/products/[id]/_components/product-details"
import ProductSpecifications from "@/app/(core)/(features)/products/[id]/_components/product-specifications"
import ProductStock from "@/app/(core)/(features)/products/[id]/_components/product-stock"

interface Props {
  activeId: string
}

const ProductContent: React.FC<Props> = ({ activeId }) => {
  const renderContent = () => {
    switch (activeId) {
      case "details":
        return <ProductDetails />
      case "specifications":
        return <ProductSpecifications />
      case "stock":
        return <ProductStock />
      default:
        return <ProductDetails />
    }
  }

  return (
    <div className="w-full">
      {renderContent()}
    </div>
  )
}

export default ProductContent