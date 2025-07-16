import React from 'react'

const initialProducts = [
  {
    id: "PRD001",
    name: "Smartphone Pro Max",
    price: "€899.99",
    type: "Eletrónicos",
    stockSize: 45,
    stockStatus: "Em Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "O mais avançado smartphone da nossa gama, com câmara profissional de 108MP.",
  },
  {
    id: "PRD002",
    name: "Laptop Gaming",
    price: "€1,299.99",
    type: "Computadores",
    stockSize: 12,
    stockStatus: "Stock Baixo",
    image: "/placeholder.svg?height=40&width=40",
    description: "Laptop gaming de alta performance com placa gráfica dedicada.",
  },
  {
    id: "PRD003",
    name: "Headphones Wireless",
    price: "€199.99",
    type: "Áudio",
    stockSize: 0,
    stockStatus: "Sem Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Headphones sem fios com cancelamento de ruído ativo.",
  },
  {
    id: "PRD004",
    name: "Tablet 10 polegadas",
    price: "€349.99",
    type: "Eletrónicos",
    stockSize: 28,
    stockStatus: "Em Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Tablet com ecrã de 10 polegadas e alta resolução.",
  },
  {
    id: "PRD005",
    name: "Smartwatch Sport",
    price: "€249.99",
    type: "Wearables",
    stockSize: 67,
    stockStatus: "Em Stock",
    image: "/placeholder.svg?height=40&width=40",
    description: "Smartwatch desportivo com GPS e monitor cardíaco.",
  },
]

const stockHistory = [
  {
    id: "PRD001",
    name: "Smartphone Pro Max",
    stockSize: 45,
    action: "added",
    timestamp: "2024-01-08 14:30",
  },
  {
    id: "PRD002",
    name: "Laptop Gaming",
    stockSize: 12,
    action: "removed",
    timestamp: "2024-01-08 13:15",
  },
  {
    id: "PRD004",
    name: "Tablet 10 polegadas",
    stockSize: 28,
    action: "added",
    timestamp: "2024-01-08 11:45",
  },
  {
    id: "PRD005",
    name: "Smartwatch Sport",
    stockSize: 67,
    action: "added",
    timestamp: "2024-01-08 10:20",
  },
  {
    id: "PRD003",
    name: "Headphones Wireless",
    stockSize: 0,
    action: "removed",
    timestamp: "2024-01-08 09:30",
  },
]

const ProductContent = () => {
  return (
    <div>ProductContent</div>
  )
}

export default ProductContent