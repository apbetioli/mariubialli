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
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {links.map((link) => (
          <Tooltip key={link.href}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                  {
                    'bg-primary text-primary-foreground hover:text-white':
                      path.startsWith(link.href),
                  },
                )}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.name}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </TooltipProvider>
  )
}
