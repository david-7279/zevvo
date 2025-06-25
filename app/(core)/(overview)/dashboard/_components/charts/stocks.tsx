"use client"
import React from 'react'

import { CalendarRangeIcon, CircleDollarSignIcon, TrendingUpIcon } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from '@/components/ui/button'

const chartDataMonthly = [
  { month: "Janeiro", stocks: 186 },
  { month: "Fevereiro", stocks: 305 },
  { month: "Março", stocks: 237 },
  { month: "Abril", stocks: 73 },
  { month: "Maio", stocks: 209 },
  { month: "Junho", stocks: 214 },
  { month: "Julho", stocks: 198 },
  { month: "Agosto", stocks: 256 },
  { month: "Setembro", stocks: 175 },
  { month: "Outubro", stocks: 220 },
  { month: "Novembro", stocks: 190 },
  { month: "Decembro", stocks: 230 },
]

const chartConfig = {
  stocks: {
    label: "Stocks",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

// Find the best stock month
const bestMonthData = chartDataMonthly.reduce(
  (best, current) => (current.stocks > best.stocks ? current : best),
  chartDataMonthly[0]
)

const DashboardStocksChart = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <Button variant="ghost" className="bg-card rounded-xl border py-2 hover:bg-card dark:hover:bg-transparent">
          <div className="flex items-center space-x-2">
            <CircleDollarSignIcon className="h-4 w-4 text-muted-foreground" />
            <small className="text-sm text-muted-foreground leading-none font-medium">Stocks</small>
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
          <LineChart
            accessibilityLayer
            data={chartDataMonthly}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => typeof value === "string" ? value.slice(0, 3) : value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="stocks"
              type="natural"
              stroke="var(--color-stocks)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Tendência de aumento de 5,2% este mês <TrendingUpIcon className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {bestMonthData.month} foi o melhor mês de stocks
        </div>
      </CardFooter>
    </Card>
  )
}

export default DashboardStocksChart