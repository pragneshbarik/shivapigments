"use client"

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table"
import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CaretUp, CaretDown, CaretUpDown } from "@phosphor-icons/react"

export interface Product {
  name: string
  grade: string
  description: string
  swatch: string
  applications: string[]
}

const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.accessor("name", {
    header: "Product",
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div
          className={`size-4 shrink-0 rounded-full bg-gradient-to-br ${row.original.swatch} ring-1 ring-inset ring-black/10`}
        />
        <span className="text-sm font-medium text-zinc-800">{row.original.name}</span>
      </div>
    ),
  }),
  columnHelper.accessor("grade", {
    header: "C.I. Number",
    enableSorting: true,
    cell: ({ getValue }) => (
      <span className="font-mono text-xs text-zinc-500">{getValue()}</span>
    ),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    enableSorting: false,
    cell: ({ getValue }) => (
      <span className="text-xs text-zinc-500">{getValue()}</span>
    ),
  }),
  columnHelper.accessor("applications", {
    header: "Applications",
    enableSorting: false,
    cell: ({ getValue }) => (
      <div className="flex flex-wrap gap-2.5">
        {getValue().map((app) => (
          <span
            key={app}
            className="rounded-full bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-700"
          >
            {app}
          </span>
        ))}
      </div>
    ),
  }),
]

function SortIcon({ sorted }: { sorted: false | "asc" | "desc" }) {
  if (sorted === "asc") return <CaretUp className="size-3 text-[#1a3a6b]" weight="fill" />
  if (sorted === "desc") return <CaretDown className="size-3 text-[#1a3a6b]" weight="fill" />
  return <CaretUpDown className="size-3 text-zinc-300" />
}

export default function ProductsTable({ data }: { data: Product[] }) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200/50">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b-zinc-200 hover:bg-transparent">
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={
                    (header.column.getCanSort()
                      ? "cursor-pointer select-none "
                      : "") + "text-zinc-700 font-semibold text-xs uppercase tracking-wider"
                  }
                >
                  <div className="flex items-center gap-1">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() && (
                      <SortIcon sorted={header.column.getIsSorted()} />
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-zinc-50 transition-colors">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
