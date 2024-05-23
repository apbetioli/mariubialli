import { cn } from '@/lib/utils'
import React from 'react'

export function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:container px-8 py-20 lg:px-20 items-center',
        className,
      )}
    >
      {children}
    </section>
  )
}
