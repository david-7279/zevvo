import React from "react"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import NewInvoiceForm from "@/app/(core)/(features)/_components/forms/add-new-payment"

const NewInvoice = () => {
  return (
    <CoreWrapper>
      <NewInvoiceForm />
    </CoreWrapper>
  )
}

export default NewInvoice