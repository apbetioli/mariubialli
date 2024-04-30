'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Logo({ className }: { className?: string }) {
  return (
    <Link className={cn('font-bold', className)} href="/">
      MariUbialli
    </Link>
  )
}
