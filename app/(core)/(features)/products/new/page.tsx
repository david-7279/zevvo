import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import NewProductForm from "@/app/(core)/(features)/_components/forms/add-new-product"

const NewProduct = () => {
  return (
    <CoreWrapper>
      <NewProductForm />
    </CoreWrapper>
  )
}

export default NewProduct