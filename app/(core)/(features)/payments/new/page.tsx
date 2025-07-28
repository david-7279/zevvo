import React from 'react'
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import NewPaymentForm from "@/app/(core)/(features)/_components/forms/add-new-payment"

const NewPayment = () => {
  return (
    <CoreWrapper>
      <NewPaymentForm />
    </CoreWrapper>
  )
}

export default NewPayment