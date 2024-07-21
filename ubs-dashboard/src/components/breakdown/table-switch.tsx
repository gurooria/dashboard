import { ComponentProps } from 'react'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupCard } from '@/components/ui/radio-group'

export interface TableSwitchProps extends ComponentProps<typeof RadioGroup> {
  switchValue: 'percent' | 'cash'
  switchChange: (value: 'percent' | 'cash') => void
}

export function TableSwitch({
  switchValue,
  switchChange,
  ...props
}: TableSwitchProps) {
  return (
    <RadioGroup
      value={switchValue}
      onValueChange={switchChange}
      defaultValue="percent"
      className="flex gap-x-1 rounded-lg border bg-muted p-1"
      {...props}
    >
      <RadioGroupCard value="percent" id="percent" className="grow">
        <Label htmlFor="percent">%</Label>
      </RadioGroupCard>

      <RadioGroupCard value="cash" id="cash" className="grow">
        <Label htmlFor="cash">$</Label>
      </RadioGroupCard>
    </RadioGroup>
  )
}
