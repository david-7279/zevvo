import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/app/(core)/_components/table/table-header";
import DataTableColumnRow from "@/app/(core)/_components/table/table-row";

interface ReportData {
  clientName: string
  productName: string
  price: number
  timeStamp: string
}

export const columnsReport: ColumnDef<ReportData>[] = [
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
    accessorKey: "timeStamp",
    id: "Time Stamp",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Data" tooltip="Data da compra" />,
    accessorFn: (row) => row.timeStamp,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
  // action for delete and edit
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