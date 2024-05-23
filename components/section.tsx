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
    <section className={cn('px-8 py-20 lg:px-20', className)}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:container items-center">
        {children}
      </div>
    </section>
  )
}
