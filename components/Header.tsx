import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Links } from './Links'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export default function Header() {
  return (
    <div>
      <nav className="fixed flex h-12 w-full items-center border-b border-gray-200 shrink-0 px-4 z-10 text-primary shadow-md bg-primary-foreground">
        <MobileMenu>
          <Logo />
          <hr className="mt-6" />
          <Links className="items-center gap-8 py-8" />
        </MobileMenu>

        <Logo />
        <div className="grow"></div>
        <Links className="items-center gap-8 hidden sm:flex" />

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
      <div className="mb-6">&nbsp;</div>
    </div>
  )
}
