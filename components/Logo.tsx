'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function Logo({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      className={cn('font-bold flex items-center gap-2', className)}
      href="/"
      onClick={onClick}
    >
      <Image src="/logo.webp" width={30} height={30} alt="Logo" />
      MariFLIX
    </Link>
  )
}
