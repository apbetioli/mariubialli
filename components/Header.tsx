import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { HeaderLinks } from './HeaderLinks'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { GithubIcon } from './ui/icons'

export default function Header() {
  const links = [
    {
      href: '/',
      label: 'Cursos',
    },
  ]
  const mobileLinks = [
    { href: 'mailto:contato@mariubialli.com.br', label: 'Contato' },
    { href: '/terms', label: 'Termos de serviço' },
    { href: '/privacy', label: 'Política de privacidade' },
    { href: 'https://github.com/apbetioli/mariubialli', label: <GithubIcon /> },
  ]

  return (
    <div>
      <nav className="fixed flex h-12 w-full items-center border-b border-gray-200 shrink-0 px-4 z-10 text-primary shadow-md bg-primary-foreground">
        <MobileMenu>
          <Logo />
          <hr className="mt-6" />
          <HeaderLinks links={links} className="flex flex-col gap-8 py-8" />
          <hr />
          <HeaderLinks
            links={mobileLinks}
            className="flex flex-col gap-8 py-8"
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
