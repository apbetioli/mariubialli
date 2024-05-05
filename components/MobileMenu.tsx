'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { PropsWithChildren } from 'react'

type MobileMenuState = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileMenu(props: PropsWithChildren<MobileMenuState>) {
  const { children, ...sheetProps } = props
  return (
    <Sheet {...sheetProps}>
      <SheetTrigger asChild>
        <Button className="sm:hidden mr-4" size="icon" variant="link">
          <Menu />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-primary-foreground text-primary">
        {children}
      </SheetContent>
    </Sheet>
  )
}
