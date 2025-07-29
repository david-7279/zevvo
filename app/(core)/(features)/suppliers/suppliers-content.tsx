"use client"

import React from "react"
import DataTable from "@/app/(core)/(features)/_components/table/table-data"
import { columnsSuppliers } from "@/app/(core)/(features)/_components/table/table-columns"
import { SupplierRowAction } from "@/app/(core)/(features)/_components/table/row-action/supplier"
import ProductFilters from "@/app/(core)/(features)/products/product-filters"

const initialSuppliers = [
  {
    id: 1,
    name: "Tech Solutions Lda.",
    email: "contacto@techsolutions.pt",
    phone: "912345678",
    category: "Tecnologia",
    conditions: "Pagamento a 30 dias",
    supplierStatus: "Ativo",
  },
  {
    id: 2,
    name: "Alimentos Frescos SA",
    email: "sofia.martins@alimentosfrescos.pt",
    phone: "934567890",
    category: "Alimentação",
    conditions: "Pagamento a 15 dias",
    supplierStatus: "Ativo",
  },
  {
    id: 3,
    name: "Construções Modernas",
    email: "carlos.santos@construcoesmodernas.pt",
    phone: "965432187",
    category: "Construção",
    conditions: "Pagamento a 60 dias",
    supplierStatus: "Inativo",
  },
  {
    id: 4,
    name: "Serviços Limpeza Pro",
    email: "ana.costa@limpezapro.pt",
    phone: "987654321",
    category: "Serviços",
    conditions: "Pagamento imediato",
    supplierStatus: "Ativo",
  },
]


const SuppliersContent = () => {
  return (
    <div>
      {/* Suppliers Table */}
      <DataTable
        data={initialSuppliers}
        columns={columnsSuppliers}
        collectionType="fornecedor"
        addNewLink="suppliers"
        idSelector={row => row.id}
        filtersContent={<ProductFilters />}
        RowActionsComponent={SupplierRowAction}
      />

      {/* Paymentys History Table */}
    </div>
  )
}

export default SuppliersContent