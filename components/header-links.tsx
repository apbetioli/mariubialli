'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type LinkProps = {
  href: string
  label: string | ReactNode
  className?: string
}

export function HeaderLinks({
  className,
  links,
  onClick,
}: {
  className?: string
  links: LinkProps[]
  onClick?: () => void
}) {
  const pathname = usePathname()

  return (
    <div className={className}>
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'font-semibold hover:underline transition-colors',
              link.className,
              {
                underline: pathname === link.href,
              },
            )}
            onClick={onClick}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}
