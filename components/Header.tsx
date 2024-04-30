'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default function Header() {
  return (
    <div>
      <nav className="fixed flex h-16 w-full items-center border-b border-gray-200 shrink-0 px-4 md:px-6 z-10 text-primary shadow-md bg-primary-foreground">
        <MobileMenu>
          <Logo />
          <hr className="mt-6" />
          <Links className="flex flex-col gap-8 py-8" />
        </MobileMenu>

        <Logo />
        <div className="grow"></div>
        <Links className="shrink-0 items-center gap-8 hidden md:flex" />

        <div className="ml-8">
          <SignedOut>
            <Link href="/sign-in">
              <Button>Login</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
      <div className="mb-8">&nbsp;</div>
    </div>
  )
}

function MobileMenu({ children }: PropsWithChildren) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden mr-6" size="icon" variant="link">
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

function Logo({ className }: { className?: string }) {
  return (
    <Link className={cn('font-bold', className)} href="/">
      MariUbialli
    </Link>
  )
}

type LinkProps = {
  href: string
  label: string
  className?: string
}

function Links(props: { className: string }) {
  const pathname = usePathname()

  const links: LinkProps[] = [
    { href: '/', label: 'Cursos' },
    { href: 'mailto:contato@mariubialli.com.br', label: 'Contato' },
  ]

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
