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
}: {
  className?: string
  links: LinkProps[]
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
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}
