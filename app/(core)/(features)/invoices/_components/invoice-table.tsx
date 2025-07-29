"use client"

import React, { useState, useMemo } from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/tabs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon, FilterIcon, PlusIcon, SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getSortedRowModel, getPaginationRowModel, getCoreRowModel, useReactTable, getFilteredRowModel, SortingState, ColumnFiltersState, flexRender, ColumnDef } from '@tanstack/react-table';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu';

interface Props {
  columns: ColumnDef<any>[];
  addNewLink: string;
  data: any[];
  idSelector: (row: any) => string | number;
  filtersContent?: React.ReactNode;
  RowActionsComponent: React.ComponentType<{ id: string | number, MenuItem: React.ElementType }>;
}

const InvoiceTable = ({
  data,
  columns,
  idSelector,
  filtersContent,
  addNewLink,
  RowActionsComponent,
}: Props) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [tab, setTab] = useState("all");

  // Define as a regular function, not inside useMemo
  const customGlobalFilter = (row: any, columnId: string, filterValue: string) => {
    const {
      id,
      client,
      clientId,
      paymentPrice,
      paymentStatus,
      products,
      timestamp,
      dueDate,
      createAt,
      description,
      invoiceNumer,
    } = row.original;
    const search = filterValue.toLowerCase();

    return (
      (id && id.toString().toLowerCase().includes(search)) ||
      (client && client.toLowerCase().includes(search)) ||
      (clientId && clientId.toString().toLowerCase().includes(search)) ||
      (paymentPrice && paymentPrice.toString().toLowerCase().includes(search)) ||
      (paymentStatus && paymentStatus.toLowerCase().includes(search)) ||
      (products && products.toLowerCase().includes(search)) ||
      (timestamp && timestamp.toLowerCase().includes(search)) ||
      (dueDate && dueDate.toLowerCase().includes(search)) ||
      (createAt && createAt.toLowerCase().includes(search)) ||
      (description && description.toLowerCase().includes(search)) ||
      (invoiceNumer && invoiceNumer.toString().toLowerCase().includes(search))
    );
  };

  // Tab counts
  const allCount = data.length;
  const receivedCount = useMemo(() => data.filter((row) => row.paymentStatus === "Recebido").length, [data]);
  const pendingCount = useMemo(() => data.filter((row) => row.paymentStatus === "Pendente").length, [data]);
  const failedCount = useMemo(() => data.filter((row) => row.paymentStatus === "Falhado").length, [data]);

  // Filter data based on tab value
  const getFilteredData = () => {
    if (tab === "all") return data;
    if (tab === "received") return data.filter((row) => row.paymentStatus === "Recebido");
    if (tab === "pending") return data.filter((row) => row.paymentStatus === "Pendente");
    if (tab === "failed") return data.filter((row) => row.paymentStatus === "Falhado");
    return data;
  };

  const filteredData = useMemo(() => getFilteredData(), [data, tab]);

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: customGlobalFilter,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      globalFilter,
    },
  });

  return (
    <div className="w-full space-y-5">
      {/* All three controls on the same line */}
      <div className="flex flex-col gap-3 w-full lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 w-full lg:flex-row lg:items-center lg:gap-3">
          <Link href={`/${addNewLink}/new`}>
            <Button
              variant="default"
              size="default"
              className="w-full lg:w-auto"
            >
              <PlusIcon className="size-4" />
              Adicionar fatura
            </Button>
          </Link>
          <div className="flex items-center w-full lg:w-auto">
            <div className="relative w-full">
              <div className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <SearchIcon className="size-4" />
                <span className="sr-only">Fatura</span>
              </div>
              <Input
                placeholder={`Pesquise por uma fatura específica...`}
                value={globalFilter}
                onChange={e => setGlobalFilter(e.target.value)}
                size={35}
                className="w-full lg:w-[350px] peer ps-9"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center w-full lg:w-auto">
          <Sheet modal={false}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full lg:w-auto">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
            </SheetTrigger>
            <SheetContent className="w-80 sm:w-96">
              <SheetHeader>
                <SheetTitle>Filtros Avançados</SheetTitle>
                <SheetDescription>Refine a sua pesquisa com filtros detalhados</SheetDescription>
                {filtersContent}
              </SheetHeader>
              <SheetFooter>
                <Button type='submit'>Aplicar Filtros</Button>
                <SheetClose asChild>
                  <Button variant='outline'>Fechar</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Tabs for filtering */}
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todos ({allCount})</TabsTrigger>
          <TabsTrigger value="received">Pagas ({receivedCount})</TabsTrigger>
          <TabsTrigger value="pending">Nao Pagas ({pendingCount})</TabsTrigger>
          <TabsTrigger value="failed">Vencidas ({failedCount})</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex-1 w-full overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 z-20 bg-background">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-muted/30 data-[state=selected]:bg-muted border-b transition-colors h-12"
                style={{ position: "sticky", top: 0, zIndex: 20, background: "inherit" }}
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="bg-background sticky top-0 z-20"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className="overflow-hidden">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <ContextMenu key={row.id}>
                  <ContextMenuTrigger asChild>
                    <TableRow
                      data-state={row.getIsSelected() && "selected"}
                      className="h-23"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <RowActionsComponent id={row.original.id} MenuItem={ContextMenuItem} />
                  </ContextMenuContent>
                </ContextMenu>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center h-24">
                  Sem resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-5 py-4">
        <div className="flex-1 flex flex-row flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground whitespace-nowrap">
          <p className="text-foreground">
            A visualizar {table.getRowModel().rows.length} <span className="text-muted-foreground">de {table.getFilteredRowModel().rows.length} fatura(s)</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm text-muted-foreground">Página</span>
          <Input
            type="number"
            size={3}
            placeholder="1"
          />
          <span className="text-muted-foreground text-sm">de <span className="text-foreground">total</span></span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="size-4" />
            <span className="hidden sm:block">Anterior</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="hidden sm:block">Próxima</span>
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div >
  )
}

export default InvoiceTable