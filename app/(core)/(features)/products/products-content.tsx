"use client"

import React from 'react'
import DataTable from "@/app/(core)/(features)/_components/table/table-data"
import { columnsProduct } from "@/app/(core)/(features)/_components/table/table-columns"


const initialProducts = [
  {
    id: "PRD001",
    name: "Smartphone Pro Max",
    price: "899.99",
    type: "Eletrónicos",
    stock: 45,
    stockStatus: "Em Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "O mais avançado smartphone da nossa gama, com câmara profissional de 108MP.",
  },
  {
    id: "PRD002",
    name: "Laptop Gaming",
    price: "1,299.99",
    type: "Computadores",
    stock: 12,
    stockStatus: "Stock Baixo",
    image: "/placeholder.svg?height=40&width=40",
    description: "Laptop gaming de alta performance com placa gráfica dedicada.",
  },
  {
    id: "PRD003",
    name: "Headphones Wireless",
    price: "199.99",
    type: "Áudio",
    stock: 0,
    stockStatus: "Sem Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Headphones sem fios com cancelamento de ruído ativo.",
  },
  {
    id: "PRD004",
    name: "Tablet 10 polegadas",
    price: "349.99",
    type: "Eletrónicos",
    stock: 28,
    stockStatus: "Em Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Tablet com ecrã de 10 polegadas e alta resolução.",
  },
  {
    id: "PRD005",
    name: "Smartwatch Sport",
    price: "249.99",
    type: "Wearables",
    stock: 67,
    stockStatus: "Em Stock",
    image: "/placeholder.svg?height=40&width=40",
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
        collectionType="produtos"
        idSelector={row => row.id}
      />

      {/* Stock History Table */}
    </div>
  )
}

export default ProductContent