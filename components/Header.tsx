'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@/lib/hooks'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderLinks } from './header-links'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'
import { GithubIcon } from './ui/icons'

export function Header() {
  const user = useUser()

  const links = [
    {
      href: '/',
      label: 'Cursos',
    },
  ]

  if (user.isAdmin) {
    links.push({ label: 'Dashboard', href: '/admin' })
  }

  const mobileLinks = [
    { href: 'mailto:contato@mariubialli.com.br', label: 'Contato' },
    { href: '/termos-de-uso', label: 'Termos de serviço' },
    { href: '/politica-de-privacidade', label: 'Política de privacidade' },
    { href: 'https://github.com/apbetioli/mariubialli', label: <GithubIcon /> },
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="fixed flex h-12 w-full items-center border-b border-gray-200 shrink-0 px-3 z-10 text-primary shadow-md bg-primary-foreground">
        <MobileMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <Logo onClick={() => setMenuOpen(false)} />
          <hr className="mt-6" />
          <HeaderLinks
            links={links}
            className="flex flex-col gap-8 py-8"
            onClick={() => setMenuOpen(false)}
          />
          <hr />
          <HeaderLinks
            links={mobileLinks}
            className="flex flex-col gap-8 py-8"
            onClick={() => setMenuOpen(false)}
          />
        </MobileMenu>

        <Logo />
        <div className="grow"></div>
        <HeaderLinks
          links={links}
          className="items-center gap-8 hidden sm:flex"
        />

        <div className="ml-8">
          <SignedOut>
            <Link href="/sign-in">
              <Button>Entrar</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
      <div className="mb-6">&nbsp;</div>
    </div>
  )
}
