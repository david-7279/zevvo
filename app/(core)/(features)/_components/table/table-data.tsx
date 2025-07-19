"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, FilterIcon, SearchIcon } from "lucide-react";
import { ProductRowActions } from "@/app/(core)/(features)/_components/table/product-row-actions";
import Link from "next/link";

interface Props {
  columns: ColumnDef<any>[];
  addNewLink: string;
  collectionType: string;
  data: any[];
  idSelector: (row: any) => string | number;
  onUpdated?: () => void;
  onDeleted?: () => void;
  filtersContent?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DataTable = ({ data, columns, collectionType, idSelector, onUpdated, onDeleted, filtersContent, addNewLink }: Props) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const customGlobalFilter = (row: any, columnId: string, filterValue: string) => {
    const { name, brand, sku } = row.original;
    const search = filterValue.toLowerCase();
    return (
      (name && name.toLowerCase().includes(search)) ||
      (brand && brand.toLowerCase().includes(search)) ||
      (sku && sku.toLowerCase().includes(search))
    );
  }

  const table = useReactTable({
    data,
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

  console.log("Data: ", data);

  return (
    <div className="w-full space-y-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3 w-full lg:flex-row lg:w-auto lg:items-center">
          <Link href={`/${addNewLink}/new`}>
            <Button
              variant="default"
              size="default"
              className="w-full lg:w-auto"
            >
              Adicionar {collectionType}
            </Button>
          </Link>
          <div className="flex items-center w-full lg:w-auto">
            <div className="relative">
              <div className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <SearchIcon className="size-4" />
                <span className="sr-only">User</span>
              </div>
              <Input
                placeholder={`Pesquisa por um ${collectionType} específico...`}
                value={globalFilter}
                onChange={e => setGlobalFilter(e.target.value)}
                size={35}
                className="w-full lg:w-[300px] peer ps-9"
              />
            </div>

          </div>
        </div>
        <div className="flex items-end justify-end text-right w-full lg:w-auto lg:justify-end">
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
                    <ProductRowActions id={row.original.id} MenuItem={ContextMenuItem} />
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
            Visualizando {table.getRowModel().rows.length} <span className="text-muted-foreground">de {table.getFilteredRowModel().rows.length} {collectionType}(s)</span>
          </p>
        </div>
        <div className="space-x-2">
          <Pagination>
            <PaginationContent className='rounded-md border shadow-xs'>
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <ChevronLeftIcon className="size-4" />
                  <span className="hidden sm:block">Anterior</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <span className="hidden sm:block">Próxima</span>
                  <ChevronRightIcon className="size-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}

export default DataTable