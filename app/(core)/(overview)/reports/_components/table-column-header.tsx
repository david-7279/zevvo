import { Column } from "@tanstack/react-table"
import { ArrowUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
  tooltip: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  tooltip,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center p-0 m-0 ", className)}>
      <Button
        variant="ghost"
        className="has-[>svg]:px-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <Tooltip>
          <TooltipTrigger>
            <span>{title}</span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
        <ArrowUpDownIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}