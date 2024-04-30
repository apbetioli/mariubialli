'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LinkProps = {
  href: string
  label: string
  className?: string
}
export function Links(props: { className: string }) {
  const pathname = usePathname()

  const links: LinkProps[] = [{ href: '/', label: 'Cursos' }]

  return (
    <div {...props}>
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
