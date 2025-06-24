"use client"
import React from 'react'

import { CircleDollarSignIcon, FilterIcon, TrendingUp, TrendingUpIcon } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
          <Button variant="outline" className="h-9 rounded-xl">
            <FilterIcon className="size-4 mr-1" />
            Filtrar
          </Button>
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