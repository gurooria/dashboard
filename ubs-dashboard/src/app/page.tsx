import { DataTable } from '@/components/breakdown/breakdown-table'
import { CostBreakdownBarChart } from '@/components/graphs/bar-chart'
import { CostTrendGraph } from '@/components/graphs/cost-graph'
import { PieChartComp } from '@/components/graphs/pie-chart'

export default function Home() {
  return (
    <main className="mx-auto max-w-[90rem]">
      <h1 className="scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight md:text-4xl">
        Data Dashboard for Stock Breakdown
      </h1>
      <div className="mt-4">
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <PieChartComp />
          <CostBreakdownBarChart />
          <div className="md:col-span-2">
            <CostTrendGraph />
          </div>
        </div>
        <DataTable />
      </div>
    </main>
  )
}
