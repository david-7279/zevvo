import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import NewSupplierForm from "@/app/(core)/(features)/_components/forms/add-new-supplier"

const NewSupplier = () => {
  return (
    <CoreWrapper>
      <NewSupplierForm />
    </CoreWrapper>
  )
}

export default NewSupplier