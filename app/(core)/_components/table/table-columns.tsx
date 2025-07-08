"use client"

import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/app/(core)/_components/table/table-header";
import DataTableColumnRow from "@/app/(core)/_components/table/table-row";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ReportData {
  id: number
  clientName: string
  productName: string
  price: number
  status: string
  timeStamp: string
}

export const columnsReport: ColumnDef<ReportData>[] = [
  {
    accessorKey: "id",
    id: "Identifier",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Identificador" tooltip="Valor único" />,
    accessorFn: row => row.id,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} />,
  },
  {
    accessorKey: "clientName",
    id: "Client",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Cliente" tooltip="Nome do cliente" />,
    accessorFn: (row) => row.clientName,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: "productName",
    id: "Product",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Produto" tooltip="Nome do produto" />,
    accessorFn: (row) => row.productName,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: "price",
    id: "Price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Preço" tooltip="Preço do produto" />,
    accessorFn: (row) => row.price,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" tooltip="Estado do stock" />,
    accessorKey: 'status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string

      const styles = {
        'Em estoque':
          'bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
        'Sem estoque':
          'bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive',
        'Limitado':
          'bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5'
      }[status]

      return (
        <Badge className={(cn('rounded-full border-none focus-visible:outline-none'), styles)}>
          {row.getValue('status')}
        </Badge>
      )
    },
    enableSorting: false,
    meta: {
      filterVariant: 'select'
    }
  },
  {
    accessorKey: "timeStamp",
    id: "Time Stamp",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Data" tooltip="Data da transação" />,
    accessorFn: (row) => row.timeStamp,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: "action",
    id: "Action",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ação" tooltip="Ação do produto" />,
    // accessorFn: (row) => row.action,
    cell: ({ row }) => {
      // const book = row.original.book;
      return (
        <div className="flex gap-2">
          {/* <ActionUpdateBook book={book} onBookUpdated={onBookUpdated} />
          <ActionDeleteBook book={book} onBookDeleted={onBookDeleted} /> */}
        </div>
      );
    },
  }
]