import * as React from 'react'

import { cn } from '@/lib/utils'
import { Label } from './label'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:border-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

const InputWithLabel = React.forwardRef<
  HTMLInputElement,
  InputProps & { label: string }
>(({ label, ...props }, ref) => {
  const id = React.useId()
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} ref={ref} {...props} />
    </>
  )
})
InputWithLabel.displayName = 'InputWithLabel'

export { Input, InputWithLabel }
