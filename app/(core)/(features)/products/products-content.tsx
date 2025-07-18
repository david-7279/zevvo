"use client"

import React from 'react'
import DataTable from "@/app/(core)/(features)/_components/table/table-data"
import { columnsProduct } from "@/app/(core)/(features)/_components/table/table-columns"


const initialProducts = [
  {
    id: "PRD001",
    name: "Smartphone Pro Max",
    brand: "Apple",
    sku: "1234567890",
    price: "899.99",
    type: "Eletrónicos",
    stock: 45,
    stockStatus: "Em Stock",
    description: "O mais avançado smartphone da nossa gama, com câmara profissional de 108MP.",
  },
  {
    id: "PRD002",
    name: "Laptop Gaming",
    brand: "Dell",
    sku: "1234567890",
    price: "1,299.99",
    type: "Computadores",
    stock: 12,
    stockStatus: "Stock Baixo",
    description: "Laptop gaming de alta performance com placa gráfica dedicada.",
  },
  {
    id: "PRD003",
    name: "Headphones Wireless",
    brand: "Sony",
    sku: "1234567890",
    price: "199.99",
    type: "Áudio",
    stock: 0,
    stockStatus: "Sem Stock",
    description: "Headphones sem fios com cancelamento de ruído ativo.",
  },
  {
    id: "PRD004",
    name: "Tablet 10 polegadas",
    brand: "Samsung",
    sku: "1234567890",
    price: "349.99",
    type: "Eletrónicos",
    stock: 28,
    stockStatus: "Em Stock",
    description: "Tablet com ecrã de 10 polegadas e alta resolução.",
  },
  {
    id: "PRD005",
    name: "Smartwatch Sport",
    brand: "Apple",
    sku: "1234567890",
    price: "249.99",
    type: "Wearables",
    stock: 67,
    stockStatus: "Em Stock",
    description: "Smartwatch desportivo com GPS e monitor cardíaco.",
  },
]

const ProductContent = () => {
  return (
    <div>
      {/* Products Table */}
      <DataTable
        data={initialProducts}
        columns={columnsProduct}
        collectionType="produto"
        idSelector={row => row.id}
      />

      {/* Stock History Table */}
    </div>
  )
}

export default ProductContent