"use client"

import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/app/(core)/(features)/_components/table/table-header";
import DataTableColumnRow from "@/app/(core)/(features)/_components/table/table-row";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { DataTableColumnHeaderNoSort } from "@/app/(core)/(features)/_components/table/table-header-no-sort";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { ProductRowActions } from "@/app/(core)/(features)/_components/table/product-row-actions";
import { ClientRowAction } from "@/app/(core)/(features)/_components/table/client-row-action";

interface ProductData {
  id: number
  name: string
  brand: string
  sku: string
  price: number
  type: string
  stock: string
  stockStatus: string
}

interface ClientsData {
  id: number
  name: string
  email: string
  phone: string
}

interface PaymentsData {
  id: number
  client: string
  product: string
  price: number
  date: string
  paymentStatus: string
}

export const columnsProduct: ColumnDef<ProductData>[] = [
  {
    accessorKey: "id",
    id: "Identifier",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" tooltip="Identificador único do produto" />,
    accessorFn: row => row.id,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "name",
    id: "Name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nome" tooltip="Nome, marca e SKU do produto" />,
    accessorFn: (row) => row.name,
    cell: ({ row }) => (
      <div className="space-y-1">
        <div className="font-medium text-gray-900">{row.original.name}</div>
        <div className="text-xs text-muted-foreground">{row.original.brand}</div>
        <div className="text-xs text-muted-foreground font-mono">SKU: {row.original.sku}</div>
      </div>
    ),
  },
  {
    accessorKey: "price",
    id: "Price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Preço" tooltip="Preço de venda do produto" />,
    accessorFn: (row) => row.price,
    cell: ({ getValue }) => <DataTableColumnRow getValue={"€ " + String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "type",
    id: "Type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tipo" tooltip="Tipo de produto" />,
    accessorFn: (row) => row.type,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: "stock",
    id: "Stock",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" tooltip="Unidades em stock do produto" />,
    accessorFn: (row) => row.stock,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: 'stockStatus',
    id: "Status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Estado" tooltip="Estado do stock do produto" />,
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
    header: ({ column }) => <DataTableColumnHeaderNoSort column={column} className="flex justify-center items-center w-full h-full" title="Ações" tooltip="Ações do produto" />,
    cell: (row) => {
      return (
        <div className="flex justify-center items-center w-full h-full ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ProductRowActions id={row.row.original.id} MenuItem={DropdownMenuItem} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    }
  }
]

export const columnsClients: ColumnDef<ClientsData>[] = [
  {
    accessorKey: "id",
    id: "Identifier",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" tooltip="Identificador único do cliente" />,
    accessorFn: row => row.id,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "name",
    id: "Name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Nome" tooltip="Nome do cliente" />,
    accessorFn: (row) => row.name,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "email",
    id: "Email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" tooltip="Endereço de email do cliente" />,
    accessorFn: (row) => row.email,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "phone",
    id: "Phone",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Telemóvel" tooltip="Número de telemóvel do cliente" />,
    accessorFn: (row) => row.phone,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: "action",
    id: "Action",
    header: ({ column }) => <DataTableColumnHeaderNoSort column={column} className="flex justify-center items-center w-full h-full" title="Ações" tooltip="Ações do cliente" />,
    cell: (row) => {
      return (
        <div className="flex justify-center items-center w-full h-full ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ClientRowAction id={row.row.original.id} MenuItem={DropdownMenuItem} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    }
  }
]

export const columnsPayments: ColumnDef<PaymentsData>[] = [
  {
    accessorKey: "id",
    id: "Identifier",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" tooltip="Identificador único do cliente" />,
    accessorFn: row => row.id,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "client",
    id: "Client",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Cliente" tooltip="Nome do cliente" />,
    accessorFn: (row) => row.client,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "product",
    id: "Product",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Produto/Serviço" tooltip="Produto ou serviço" />,
    accessorFn: (row) => row.product,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "price",
    id: "Price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Preço" tooltip="Valor do pagamento" />,
    accessorFn: (row) => row.price,
    cell: ({ getValue }) => <DataTableColumnRow getValue={"€ " + String(getValue())} className="font-medium" />,
  },
  {
    accessorKey: "date",
    id: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Data/Hora" tooltip="Data e hora do pagamento" />,
    accessorFn: (row) => row.date,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  {
    accessorKey: 'paymentStatus',
    id: "Status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Estado" tooltip="Estado do pagamento" />,
    accessorFn: (row) => row.paymentStatus,
    cell: ({ row }) => {
      const status = row.getValue('Status') as string

      const styles = {
        'Recebido':
          'bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
        'Pendente':
          'bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:focus-visible:ring-amber-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-amber-400/5',
        'Falhado':
          'bg-destructive/10 [a&]:hover:bg-destructive/5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive',

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
    header: ({ column }) => <DataTableColumnHeaderNoSort column={column} className="flex justify-center items-center w-full h-full" title="Ações" tooltip="Ações do cliente" />,
    cell: (row) => {
      return (
        <div className="flex justify-center items-center w-full h-full ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ClientRowAction id={row.row.original.id} MenuItem={DropdownMenuItem} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    }
  }
]