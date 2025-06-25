"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { TrendingUp, CircleDollarSignIcon, CalendarRangeIcon, FilterIcon } from "lucide-react"

const chartDataMontly = [
  { month: "Janeiro", sales: 186 },
  { month: "Fevereiro", sales: 305 },
  { month: "Março", sales: 237 },
  { month: "Abril", sales: 73 },
  { month: "Maio", sales: 209 },
  { month: "Junho", sales: 214 },
  { month: "Julho", sales: 198 },
  { month: "Agosto", sales: 256 },
  { month: "Setembro", sales: 175 },
  { month: "Outubro", sales: 220 },
  { month: "Novembro", sales: 190 },
  { month: "Decembro", sales: 230 },
]

const chartConfig = {
  sales: {
    label: "Vendas",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

// Find the best sales month
const bestMonthData = chartDataMontly.reduce(
  (best, current) => (current.sales > best.sales ? current : best),
  chartDataMontly[0]
)

const DashboardSalesChart = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <Button variant="ghost" className="bg-card rounded-xl border py-2 hover:bg-card dark:hover:bg-transparent">
          <div className="flex items-center space-x-2">
            <CircleDollarSignIcon className="h-4 w-4 text-muted-foreground" />
            <small className="text-sm text-muted-foreground leading-none font-medium">Vendas</small>
          </div>
        </Button>

        <div className="flex items-center gap-2">
          <Select defaultValue="semanal">
            <SelectTrigger className="relative w-full rounded-xl ps-9">
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50">
                <CalendarRangeIcon size={16} aria-hidden="true" />
              </div>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semanal">Semanal</SelectItem>
              <SelectItem value="mensal">Mensal</SelectItem>
              <SelectItem value="anual">Anual</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartDataMontly}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => typeof value === "string" ? value.slice(0, 3) : value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Tendência de aumento de 5,2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {bestMonthData.month} foi o melhor mês de vendas
        </div>
      </CardFooter>
    </Card>
  )
}

export default DashboardSalesChart