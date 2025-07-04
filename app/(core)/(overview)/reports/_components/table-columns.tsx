import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/app/(core)/(overview)/reports/_components/table-column-header";
import DataTableColumnRow from "@/app/(core)/(overview)/reports/_components/table-column-row";

interface ReportData {
  clientName: string
}

export const columnsSubject: ColumnDef<ReportData>[] = [
  {
    accessorKey: "clientName",
    id: "Client",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Cliente" tooltip="Nome do cliente" />,
    accessorFn: (row) => row.clientName,
    cell: ({ getValue }) => <DataTableColumnRow getValue={String(getValue())} className="" />,
  },
] 