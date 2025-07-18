"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, EditIcon, Trash2Icon } from "lucide-react"
import Link from "next/link"
import { Path } from "@/lib/paths"
import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"



interface ProductDetailsProps {
  productId: string
}

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  return (
    <CoreWrapper>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href={Path.products}>
            <Button variant="ghost" className="group">
              <ArrowLeftIcon className="transition-transform duration-200 group-hover:-translate-x-0.5" />
              Voltar
            </Button>
          </Link>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={Path.products}>Produtos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>{productId}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <EditIcon className="h-4 w-4" />
            Editar
          </Button>

          <Button variant="outline" className="gap-2 bg-transparent text-red-600 dark:text-red-400">
            <Trash2Icon className="h-4 w-4 text-red-600 dark:text-red-400" />
            Eliminar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div>

      </div>
    </CoreWrapper>
  )
}

export default ProductDetails