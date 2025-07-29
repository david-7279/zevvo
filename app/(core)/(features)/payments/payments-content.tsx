"use client"

import React from 'react'
import ProductFilters from '../products/product-filters';
import { PaymentRowAction } from "@/app/(core)/(features)/_components/table/row-action/payment";
import PaymentTable from './_components/payment-table';
import { columnsPayments } from '../_components/table/table-columns';

const initialPayments = [
  {
    id: 1,
    client: "João Silva",
    product: "Smartphone Pro",
    price: 4999.99,
    date: "21-12-2024 14:32:30",
    paymentStatus: "Recebido",
  },
  {
    id: 2,
    client: "David Silva",
    product: "Tablet",
    price: 999.99,
    date: "21-11-2024 11:31:22",
    paymentStatus: "Falhado",
  },
  {
    id: 2,
    client: "Manuel Antonio",
    product: "Livro",
    price: 9.99,
    date: "01-08-2024 09:30:22",
    paymentStatus: "Pendente",
  },
]

const PaymentsContent = () => {
  return (
    <div>
      {/* Payments Table */}
      <PaymentTable
        data={initialPayments}
        columns={columnsPayments}
        idSelector={row => row.id}
        addNewLink="payments"
        RowActionsComponent={PaymentRowAction}
        filtersContent={<ProductFilters />}

      />
    </div>
  )
}

export default PaymentsContent