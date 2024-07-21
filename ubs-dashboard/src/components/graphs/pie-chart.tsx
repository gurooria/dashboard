'use client'

import { Pie, PieChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { level: 'FUNC', amount: 275, fill: 'var(--color-FUNC)' },
  { level: 'SECTOR', amount: 200, fill: 'var(--color-SECTOR)' },
  { level: 'IM', amount: 187, fill: 'var(--color-IM)' },
  { level: 'FUNDING', amount: 173, fill: 'var(--color-FUNDING)' },
  { level: 'LEFTOVER', amount: 90, fill: 'var(--color-LEFTOVER)' },
]

const chartConfig = {
  amount: {
    label: 'amount',
  },
  FUNC: {
    label: 'FUNC',
    color: 'hsl(var(--chart-1))',
  },
  SECTOR: {
    label: 'SECTOR',
    color: 'hsl(var(--chart-2))',
  },
  IM: {
    label: 'IM',
    color: 'hsl(var(--chart-3))',
  },
  FUNDING: {
    label: 'FUNDING',
    color: 'hsl(var(--chart-4))',
  },
  LEFTOVER: {
    label: 'LEFTOVER',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function PieChartComp() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Internalisation Breakdown</CardTitle>
        <CardDescription>Stock X position value</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="m-auto aspect-square w-full"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="amount" hideLabel />}
            />
            <Pie data={chartData} dataKey="amount" />
            <ChartLegend
              content={<ChartLegendContent nameKey="level" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
