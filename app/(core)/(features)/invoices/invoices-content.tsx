"use client"

import React from "react"
import ProductFilters from "../products/product-filters";
import InvoiceTable from "@/app/(core)/(features)/invoices/_components/invoice-table";
import { columnsInvoices } from "@/app/(core)/(features)/_components/table/table-columns";
import { InvoiceRowAction } from "@/app/(core)/(features)/_components/table/row-action/invoice";

const initialInvoices = [
  {
    id: 1,
    client: "João Silva",
    clientId: 101,
    paymentPrice: 4999.99,
    paymentStatus: "Recebido",
    products: "Smartphone Pro, Capa Protetora",
    timestamp: "2024-12-21 14:32:30",
    dueDate: "2025-01-21",
    createAt: "2024-12-21 14:32:30",
    description: "Compra de smartphone e capa protetora.",
    invoiceNumer: 2024001,
  },
  {
    id: 2,
    client: "David Silva",
    clientId: 102,
    paymentPrice: 999.99,
    paymentStatus: "Falhado",
    products: "Tablet",
    timestamp: "2024-11-21 11:31:22",
    dueDate: "2024-12-21",
    createAt: "2024-11-21 11:31:22",
    description: "Compra de tablet.",
    invoiceNumer: 2024002,
  },
  {
    id: 3,
    client: "Manuel Antonio",
    clientId: 103,
    paymentPrice: 9.99,
    paymentStatus: "Pendente",
    products: "Livro",
    timestamp: "2024-08-01 09:30:22",
    dueDate: "2024-09-01",
    createAt: "2024-08-01 09:30:22",
    description: "Compra de livro.",
    invoiceNumer: 2024003,
  },
]

const InvoicesContent = () => {
  return (
    <div>
      {/* Invoice Table */}
      <InvoiceTable
        data={initialInvoices}
        columns={columnsInvoices}
        idSelector={(row: any) => row.id}
        addNewLink="invoices"
        RowActionsComponent={InvoiceRowAction}
        filtersContent={<ProductFilters />}
      />
    </div>
  )
}

export default InvoicesContent