'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { LineChartIcon, PackageIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminMenu() {
  const path = usePathname()
  const isActive = (href: string) => path.startsWith(href)

  const links = [
    {
      href: '/admin/dashboard',
      icon: <LineChartIcon className="h-5 w-5" />,
      name: 'Dashboard',
    },
    {
      href: '/admin/courses',
      icon: <PackageIcon className="h-5 w-5" />,
      name: 'Courses',
    },
  ]

  return (
    <TooltipProvider>
      <nav className="flex md:flex-col justify-evenly w-full gap-1 sm:py-5">
        {links.map((link) => (
          <Tooltip key={link.href}>
            <TooltipTrigger asChild>
              <Link href={link.href}>
                <div className="flex items-center gap-4 hover:bg-primary-foreground px-4 py-2">
                  <span
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                      {
                        'bg-primary text-primary-foreground hover:text-white':
                          isActive(link.href),
                      },
                    )}
                  >
                    {link.icon}
                  </span>
                  <span className="sr-only md:not-sr-only">{link.name}</span>
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.name}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  )
}
