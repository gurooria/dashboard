'use client'

import React, { useMemo, useState } from 'react'
import {
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  RowData,
  SortingState,
  TableMeta,
  useReactTable,
} from '@tanstack/react-table'
import {
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  ChevronUp,
  Search,
} from 'lucide-react'

import { calculatePercentage, cn, formatUSD } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { data } from '@/components/breakdown/dummy-data'
import { TableSwitch } from '@/components/breakdown/table-switch'

declare module '@tanstack/table-core' {
  interface TableMeta<TData extends RowData> {
    switchValue: 'percent' | 'cash'
  }
}

const RFA_RATE = 0.02 // 2% example rate
const LFM_RATE = 0.01 // 1% example rate

export type DataItem = {
  id: number
  name: string
  positionValue: number
  leftoverValue: number
  haircut: number
  cashCost: number
  sblCost: number
  utilizedValue?: number
  unsecuredFundingCost?: number
  totalCost?: number
  subRows?: DataItem[]
}

const SortableHeader: React.FC<{
  column: any
  table: any
  label: string
  bp?: boolean
}> = ({ column, table, label, bp = false }) => (
  <button
    onClick={column.getToggleSortingHandler()}
    className="flex cursor-pointer items-center gap-2 rounded-lg p-1 hover:bg-muted-foreground/10"
  >
    <span className="font-mono">
      {label} (
      {table.options.meta?.switchValue === 'cash' ? '$' : bp ? 'bp' : '%'})
    </span>
    {{
      asc: <ChevronUp className="size-5" />,
      desc: <ChevronDown className="size-5" />,
    }[column.getIsSorted() as string] ?? <ChevronsUpDown className="size-5" />}
  </button>
)

// Define your columns
const columns: ColumnDef<DataItem>[] = [
  {
    id: 'collapse',
    header: ({ table }) => null,
    cell: ({ row }) =>
      row.getCanExpand() ? (
        <Button
          plain
          className="mr-2 cursor-pointer"
          onClick={row.getToggleExpandedHandler()}
        >
          {row.getIsExpanded() ? (
            <ChevronDown className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          )}
        </Button>
      ) : null,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Stock',
    cell: ({ row }) => {
      return (
        <div className="cursor-pointer underline hover:opacity-80">
          {row.original.name}
        </div>
      )
    },
  },
  {
    accessorKey: 'positionValue',
    header: ({ table }) => (
      <span className="flex font-mono">
        Position Value ({table.options.meta?.switchValue === 'cash' ? '$' : '%'}
        )
      </span>
    ),
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('positionValue') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, false)
      }
    },
  },
  {
    accessorKey: 'leftoverValue',
    header: ({ table, column }) => (
      <SortableHeader column={column} table={table} label="Leftover" />
    ),
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('leftoverValue') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, false, row.index)
      }
    },
    enableSorting: true,
  },
  {
    accessorKey: 'haircut',
    header: ({ table }) => (
      <span className="font-mono">
        Haircut ({table.options.meta?.switchValue === 'cash' ? '$' : '%'})
      </span>
    ),
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('haircut') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, false)
      }
    },
  },
  {
    accessorKey: 'utilizedValue',
    header: ({ table, column }) => (
      <SortableHeader column={column} table={table} label="Utilized Value" />
    ),
    accessorFn: (row) => row.positionValue - row.leftoverValue - row.haircut,
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('utilizedValue') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, false)
      }
    },
    enableSorting: true,
  },
  {
    accessorKey: 'cashCost',
    header: ({ table, column }) => (
      <SortableHeader column={column} table={table} label="Cash Cost" bp />
    ),
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('cashCost') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, true)
      }
    },
    enableSorting: true,
  },
  {
    accessorKey: 'sblCost',
    header: ({ table, column }) => (
      <SortableHeader column={column} table={table} label="SBL Cost" bp />
    ),
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('sblCost') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, true)
      }
    },
    enableSorting: true,
  },
  {
    accessorKey: 'unsecuredFundingCost',
    header: ({ table, column }) => (
      <SortableHeader
        column={column}
        table={table}
        label="Unsecured Funding Cost"
        bp
      />
    ),
    accessorFn: (row) =>
      (row.haircut + row.leftoverValue) * (RFA_RATE + LFM_RATE),
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('unsecuredFundingCost') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, true)
      }
    },
    enableSorting: true,
  },
  {
    accessorKey: 'totalCost',
    header: ({ table, column }) => (
      <SortableHeader column={column} table={table} label="Total Cost" bp />
    ),
    accessorFn: (row) =>
      row.cashCost +
      row.sblCost +
      (row.haircut + row.leftoverValue) * (RFA_RATE + LFM_RATE),
    cell: ({ row, getValue, table }) => {
      const value = getValue() as number
      const parentRow = row.depth === 1 ? row.getParentRow() : null
      const parentValue = parentRow
        ? (parentRow.getValue('totalCost') as number)
        : 0

      if (table.options.meta?.switchValue === 'cash') {
        return formatUSD(value)
      } else {
        return row.depth === 0
          ? formatUSD(value)
          : calculatePercentage(value, parentValue, true)
      }
    },
    enableSorting: true,
  },
]

export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [searchInput, setSearchInput] = useState<string>('')

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchInput.toLowerCase())
      )
    )
  }, [searchInput])

  const [switchValue, setSwitchValue] = useState<'percent' | 'cash'>('percent')

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    state: {
      sorting,
      expanded,
    },
    meta: {
      switchValue,
    },
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full items-center justify-between">
        <div className="relative flex max-w-96 items-center">
          <Search className="absolute left-3 size-4" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
        </div>
        <div>
          <TableSwitch
            switchValue={switchValue}
            switchChange={(value) => setSwitchValue(value)}
          />
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="">
          <TableHeader className="bg-muted text-muted-foreground">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="px-4">
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
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className={cn(row.depth === 0 ? 'h-12' : 'h-10')}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    className={cn(
                      row.depth === 0
                        ? 'bg-background'
                        : 'bg-muted-foreground/10 py-2'
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
