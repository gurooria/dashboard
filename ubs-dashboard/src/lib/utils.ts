import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatUSD = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    value
  )

export const calculatePercentage = (
  value: number,
  total: number,
  bp: boolean = false,
  index?: number
) => {
  if (index === 4 && total === 0) return bp ? '10000.00' : '100.00'
  if (total === 0 || value === 0) return '0.00'
  return ((value / total) * (bp ? 10000 : 100)).toFixed(2) + ''
}
