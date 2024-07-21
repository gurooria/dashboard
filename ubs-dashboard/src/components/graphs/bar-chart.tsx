'use client'

import { useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from 'recharts'

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
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const levels = [
  { key: 'FUNC', label: 'FUNC' },
  { key: 'SECTOR', label: 'SECTOR' },
  { key: 'IM', label: 'IM' },
  { key: 'FUNDING', label: 'FUNDING' },
  { key: 'LEFTOVER', label: 'LEFTOVER' },
  { key: 'TOTAL', label: 'TOTAL' },
]

const multipliers: { [key: string]: { [key: string]: number } } = {
  FUNC: { Cash: 1.0, SBL: 1.0, UF: 1.0 },
  SECTOR: { Cash: 1.2, SBL: 1.1, UF: 1.3 },
  IM: { Cash: 0.8, SBL: 0.9, UF: 0.7 },
  FUNDING: { Cash: 1.5, SBL: 1.4, UF: 1.6 },
  LEFTOVER: { Cash: 0.5, SBL: 0.6, UF: 0.4 },
  TOTAL: { Cash: 3.0, SBL: 5.0, UF: 4.0 },
}

const initialChartData = [
  { costType: 'Cash', cost: 275, fill: 'var(--color-Cash)' },
  { costType: 'SBL', cost: -100, fill: 'var(--color-SBL)' },
  { costType: 'UF', cost: 187, fill: 'var(--color-UF)' },
]

const chartConfig = {
  cost: {
    label: 'Cost',
  },
  Cash: {
    label: 'Cash Cost',
    color: 'hsl(var(--chart-1))',
  },
  SBL: {
    label: 'SBL Cost',
    color: 'hsl(var(--chart-2))',
  },
  UF: {
    label: 'Unsecured Funding Cost',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

export function CostBreakdownBarChart() {
  const [activeLevel, setActiveLevel] =
    useState<(typeof levels)[number]['key']>('FUNC')

  const adjustedChartData = useMemo(() => {
    const multiplier = multipliers[activeLevel]
    return initialChartData.map((item) => ({
      ...item,
      cost: item.cost * multiplier[item.costType],
    }))
  }, [activeLevel])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost breakdown</CardTitle>
        <CardDescription>Stock X, {activeLevel}</CardDescription>
        <Select value={activeLevel} onValueChange={setActiveLevel}>
          <SelectTrigger
            className="h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {levels.map(({ key, label }) => {
              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">{label}</div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-[10/7.5] w-full">
          <BarChart accessibilityLayer data={adjustedChartData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="cost">
              <LabelList position="bottom" dataKey="costType" fillOpacity={1} />
              {adjustedChartData.map((item) => (
                <Cell key={item.costType} radius={8} fill={item.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
