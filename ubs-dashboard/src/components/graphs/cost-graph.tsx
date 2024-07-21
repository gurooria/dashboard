'use client'

import * as React from 'react'
import { useMemo, useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
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

// Function to generate random data
const generateRandomData = (months: number, seed: string) => {
  const data = []
  const seedValue = seed
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  let lastSBL = 50 + (seedValue % 30)
  let lastCash = 70 + (seedValue % 40)
  let lastUnsecured = 30 + (seedValue % 20)

  const currentDate = new Date()

  for (let i = 0; i < months; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    )
    lastSBL += Math.sin(i * 0.1 + seedValue) * 5 + (Math.random() - 0.5) * 2
    lastCash += Math.cos(i * 0.1 + seedValue) * 7 + (Math.random() - 0.5) * 3
    lastUnsecured +=
      Math.sin(i * 0.2 + seedValue) * 3 + (Math.random() - 0.5) * 1.5

    lastSBL = Math.max(20, Math.min(100, lastSBL))
    lastCash = Math.max(30, Math.min(150, lastCash))
    lastUnsecured = Math.max(10, Math.min(80, lastUnsecured))

    const totalCost = lastSBL + lastCash + lastUnsecured

    data.unshift({
      date: date.toISOString().split('T')[0],
      sblCost: Number(lastSBL.toFixed(2)),
      cashCost: Number(lastCash.toFixed(2)),
      unsecuredFundingCost: Number(lastUnsecured.toFixed(2)),
      totalCost: Number(totalCost.toFixed(2)),
    })
  }
  return data
}

const costTypes = {
  sblCost: { label: 'SBL Cost', color: 'hsl(var(--chart-1))' },
  cashCost: { label: 'Cash Cost', color: 'hsl(var(--chart-1))' },
  unsecuredFundingCost: {
    label: 'Unsecured Funding Cost',
    color: 'hsl(var(--chart-1))',
  },
  totalCost: { label: 'Total Cost', color: 'hsl(var(--chart-1))' },
}

const chartConfig = costTypes as ChartConfig

const timeRanges = {
  '3mo': { months: 3, label: '3 Months' },
  '6mo': { months: 6, label: '6 Months' },
  '1y': { months: 12, label: '1 Year' },
}

export function CostTrendGraph() {
  const [activeRange, setActiveRange] = useState<keyof typeof timeRanges>('3mo')
  const [activeCostType, setActiveCostType] =
    useState<keyof typeof costTypes>('totalCost')
  const seed = 'myseed123' // Change this to get different but consistent random data

  const chartData = useMemo(
    () => generateRandomData(timeRanges[activeRange].months, seed),
    [activeRange]
  )

  return (
    <Card>
      <CardHeader className="flex items-start justify-between gap-2 pb-2 md:flex-row">
        <div className="space-y-1.5">
          <CardTitle>Time evolution of total daily cost</CardTitle>
          <CardDescription>
            Stock X
            {/* Showing {costTypes[activeCostType].label} for the last{' '}
            {timeRanges[activeRange].label} */}
          </CardDescription>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Select
            value={activeCostType}
            onValueChange={(value: keyof typeof costTypes) =>
              setActiveCostType(value)
            }
          >
            <SelectTrigger
              className="h-7 w-[130px] rounded-lg pl-2.5"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Select cost type" />
            </SelectTrigger>
            <SelectContent align="end" className="rounded-xl">
              {Object.entries(costTypes).map(([key, { label }]) => {
                return (
                  <SelectItem
                    key={key}
                    value={key}
                    className="rounded-lg [&_span]:flex"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      {label}
                    </div>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>

          <Select
            value={activeRange}
            onValueChange={(value: keyof typeof timeRanges) =>
              setActiveRange(value)
            }
          >
            <SelectTrigger
              className="h-7 w-[130px] rounded-lg pl-2.5"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent align="end" className="rounded-xl">
              {Object.entries(timeRanges).map(([key, { label }]) => {
                return (
                  <SelectItem
                    key={key}
                    value={key}
                    className="rounded-lg [&_span]:flex"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      {label}
                    </div>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-[5/2] w-full">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="date"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                })
              }
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tickFormatter={(value) => `$${value}`}
              domain={['auto', 'auto']}
              tick={{ fontSize: 12 }}
              width={40}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="avgCost"
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })
                  }
                  //formatter={(value) => `$${value.toFixed(2)}`}
                />
              }
            />
            <Line
              type="monotone"
              dataKey={activeCostType}
              stroke={costTypes[activeCostType].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
