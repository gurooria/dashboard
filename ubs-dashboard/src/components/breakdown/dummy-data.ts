import { DataItem } from '@/components/breakdown/breakdown-table'

function calculateLeftover(total: number, otherSubRows: DataItem[]): DataItem {
  const sumOthers = otherSubRows.reduce(
    (sum, row) => sum + row.positionValue,
    0
  )
  const leftoverValue = total - sumOthers
  const ratio = leftoverValue / total

  return {
    id: Date.now(), // Generate a unique ID
    name: 'LEFTOVER',
    positionValue: leftoverValue,
    leftoverValue:
      total *
      (otherSubRows[0].leftoverValue / otherSubRows[0].positionValue) *
      ratio,
    haircut:
      total * (otherSubRows[0].haircut / otherSubRows[0].positionValue) * ratio,
    cashCost:
      total *
      (otherSubRows[0].cashCost / otherSubRows[0].positionValue) *
      ratio,
    sblCost:
      total * (otherSubRows[0].sblCost / otherSubRows[0].positionValue) * ratio,
  }
}

export const data: DataItem[] = [
  {
    id: 1,
    name: 'XYZX.PA',
    positionValue: 1000000,
    leftoverValue: 0,
    haircut: 50000,
    cashCost: 10000,
    sblCost: 5000,
    get subRows() {
      const otherSubRows = [
        {
          id: 11,
          name: 'FUNC',
          positionValue: 200000,
          leftoverValue: 0,
          haircut: 10000,
          cashCost: 2000,
          sblCost: 1000,
        },
        {
          id: 12,
          name: 'SECTOR',
          positionValue: 300000,
          leftoverValue: 0,
          haircut: 15000,
          cashCost: 3000,
          sblCost: 1500,
        },
        {
          id: 13,
          name: 'IM',
          positionValue: 250000,
          leftoverValue: 0,
          haircut: 12500,
          cashCost: 2500,
          sblCost: 1250,
        },
        {
          id: 14,
          name: 'FUNDING',
          positionValue: 150000,
          leftoverValue: 0,
          haircut: 7500,
          cashCost: 1500,
          sblCost: 750,
        },
      ]
      return [
        ...otherSubRows,
        calculateLeftover(this.positionValue, otherSubRows),
      ]
    },
  },
  {
    id: 2,
    name: 'YZXB.OQ',
    positionValue: 1500000,
    leftoverValue: 50000,
    haircut: 75000,
    cashCost: 15000,
    sblCost: 7500,
    get subRows() {
      const otherSubRows = [
        {
          id: 21,
          name: 'FUNC',
          positionValue: 300000,
          leftoverValue: 10000,
          haircut: 15000,
          cashCost: 3000,
          sblCost: 1500,
        },
        {
          id: 22,
          name: 'SECTOR',
          positionValue: 450000,
          leftoverValue: 15000,
          haircut: 22500,
          cashCost: 4500,
          sblCost: 2250,
        },
        {
          id: 23,
          name: 'IM',
          positionValue: 375000,
          leftoverValue: 12500,
          haircut: 18750,
          cashCost: 3750,
          sblCost: 1875,
        },
        {
          id: 24,
          name: 'FUNDING',
          positionValue: 225000,
          leftoverValue: 7500,
          haircut: 11250,
          cashCost: 2250,
          sblCost: 1125,
        },
      ]
      return [
        ...otherSubRows,
        calculateLeftover(this.positionValue, otherSubRows),
      ]
    },
  },
  {
    id: 3,
    name: 'ZYYZ.PA',
    positionValue: 2000000,
    leftoverValue: 100000,
    haircut: 100000,
    cashCost: 20000,
    sblCost: 10000,
    get subRows() {
      const otherSubRows = [
        {
          id: 31,
          name: 'FUNC',
          positionValue: 400000,
          leftoverValue: 20000,
          haircut: 20000,
          cashCost: 4000,
          sblCost: 2000,
        },
        {
          id: 32,
          name: 'SECTOR',
          positionValue: 600000,
          leftoverValue: 30000,
          haircut: 30000,
          cashCost: 6000,
          sblCost: 3000,
        },
        {
          id: 33,
          name: 'IM',
          positionValue: 500000,
          leftoverValue: 25000,
          haircut: 25000,
          cashCost: 5000,
          sblCost: 2500,
        },
        {
          id: 34,
          name: 'FUNDING',
          positionValue: 300000,
          leftoverValue: 15000,
          haircut: 15000,
          cashCost: 3000,
          sblCost: 1500,
        },
      ]
      return [
        ...otherSubRows,
        calculateLeftover(this.positionValue, otherSubRows),
      ]
    },
  },
  {
    id: 4,
    name: 'RYXA.OQ',
    positionValue: 1800000,
    leftoverValue: 80000,
    haircut: 90000,
    cashCost: 18000,
    sblCost: 9000,
    get subRows() {
      const otherSubRows = [
        {
          id: 41,
          name: 'FUNC',
          positionValue: 360000,
          leftoverValue: 16000,
          haircut: 18000,
          cashCost: 3600,
          sblCost: 1800,
        },
        {
          id: 42,
          name: 'SECTOR',
          positionValue: 540000,
          leftoverValue: 24000,
          haircut: 27000,
          cashCost: 5400,
          sblCost: 2700,
        },
        {
          id: 43,
          name: 'IM',
          positionValue: 450000,
          leftoverValue: 20000,
          haircut: 22500,
          cashCost: 4500,
          sblCost: 2250,
        },
        {
          id: 44,
          name: 'FUNDING',
          positionValue: 270000,
          leftoverValue: 12000,
          haircut: 13500,
          cashCost: 2700,
          sblCost: 1350,
        },
      ]
      return [
        ...otherSubRows,
        calculateLeftover(this.positionValue, otherSubRows),
      ]
    },
  },
]
