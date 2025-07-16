"use client"

import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/app/(core)/(features)/_components/table/table-header";
import DataTableColumnRow from "@/app/(core)/(features)/_components/table/table-row";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import DataTableColumnRowImage from "@/app/(core)/(features)/_components/table/table-row-image";
import { DataTableColumnHeaderNoSort } from "@/app/(core)/(features)/_components/table/table-header-no-sort";

interface ProductData {
  image: string
  id: number
  name: string
  price: number
  type: string
  stock: string
  stockStatus: string
}

export const columnsProduct: ColumnDef<ProductData>[] = [
  {
    accessorKey: "image",
    id: "Image",
    header: ({ column }) => <DataTableColumnHeaderNoSort column={column} title="Imagem" tooltip="Imagem do produto" />,
    accessorFn: row => row.image,
    cell: ({ getValue }) => <DataTableColumnRowImage src="" alt={getValue.name} width={24} height={24} />,
  },
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
    header: ({ column }) => <DataTableColumnHeaderNoSort column={column} title="Ação" tooltip="Ação do produto" />,
    // accessorFn: (row) => row.action,
    cell: () => {
      // const book = row.original.book;
      return (
        <div className="flex gap-2">
          {/* 
          <ActionUpdateBook book={book} onBookUpdated={onBookUpdated} />
          <ActionDeleteBook book={book} onBookDeleted={onBookDeleted} /> 
          */}
        </div>
      );
    },
  }
]