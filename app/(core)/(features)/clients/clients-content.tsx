"use client"

import React from "react"
import DataTable from "@/app/(core)/(features)/_components/table/table-data"
import { columnsClients } from "@/app/(core)/(features)/_components/table/table-columns"
import ProductFilters from "@/app/(core)/(features)/products/product-filters"
import { ClientRowAction } from "@/app/(core)/(features)/_components/table/client-row-action"

const initialClients = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "912345678",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    phone: "934567890",
  },
  {
    id: 3,
    name: "Carlos Santos",
    email: "carlos.santos@email.com",
    phone: "965432187",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "987654321",
  },
]


const ClientsContent = () => {
  return (
    <div>
      {/* Clients Table */}
      <DataTable
        data={initialClients}
        columns={columnsClients}
        collectionType="cliente"
        addNewLink="clients"
        idSelector={row => row.id}
        filtersContent={<ProductFilters />}
        RowActionsComponent={ClientRowAction}
      />

      {/* Paymentys History Table */}
    </div>
  )
}

export default ClientsContent