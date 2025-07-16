"use client"

import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/app/(core)/(features)/_components/table/table-header";
import DataTableColumnRow from "@/app/(core)/(features)/_components/table/table-row";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DataTableColumnHeaderNoSort } from "@/app/(core)/(features)/_components/table/table-header-no-sort";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EditIcon, EyeIcon, MoreHorizontalIcon, Trash2Icon, XIcon } from "lucide-react";
import Link from "next/link";

interface ProductData {
  id: number
  name: string
  price: number
  type: string
  stock: string
  stockStatus: string
}

export const columnsProduct: ColumnDef<ProductData>[] = [
  {
    accessorKey: "id",
    id: "Identifier",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Identificador" tooltip="Valor único do produto" />,
    accessorFn: row => row.id,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} />,
  },
  {
    accessorKey: "name",
    id: "Name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nome" tooltip="Nome do produto" />,
    accessorFn: (row) => row.name,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: "price",
    id: "Price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Preço" tooltip="Preço do produto" />,
    accessorFn: (row) => row.price,
    cell: ({ getValue }) => <DataTableColumnRow getValue={"€ " + String(getValue())} className="" />,
  },
  {
    accessorKey: "type",
    id: "Type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tipo" tooltip="Tipo do produto" />,
    accessorFn: (row) => row.type,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: "stock",
    id: "Stock",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" tooltip="Quantidade do produto" />,
    accessorFn: (row) => row.stock,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: 'stockStatus',
    id: "Status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" tooltip="Estado do produto" />,
    accessorFn: (row) => row.stockStatus,
    cell: ({ row }) => {
      const status = row.getValue('Status') as string

      const styles = {
        'Em Stock':
          'bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
        'Sem Stock':
          'bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive',
        'Stock Baixo':
          'bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
      }[status]

      return (
        <Badge className={(cn('rounded-full border-none focus-visible:outline-none'), styles)}>
          {row.getValue('Status')}
        </Badge>
      )
    },
    enableSorting: true,
    meta: {
      filterVariant: 'select'
    }
  },
  {
    accessorKey: "action",
    id: "Action",
    header: ({ column }) => <DataTableColumnHeaderNoSort column={column} className="flex justify-center items-center w-full h-full" title="Ações" tooltip="Ação do produto" />,
    cell: () => {
      return (
        <div className="flex justify-center items-center w-full h-full ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="gap-2" asChild>
                <Link href={`/products/`}>
                  <EyeIcon className="h-4 w-4" />
                  Ver Produto
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2" asChild>
                <Link href={`/products//edit`}>
                  <EditIcon className="h-4 w-4" />
                  Editar
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-red-600">
                <Trash2Icon className="h-4 w-4 text-red-600" />
                Eliminar
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <XIcon className="h-4 w-4" />
                Cancelar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    }
  }
]