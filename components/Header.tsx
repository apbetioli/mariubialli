'use client'

import { cn } from '@/utils/cn'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const signedOutLinks = [
    { href: '/', label: 'Cursos', className: 'hidden sm:block' },
    {
      href: '/sign-in',
      label: 'Entrar',
      className:
        'text-white bg-purple-500 hover:bg-purple-600 py-1.5 px-2 rounded-lg',
    },
  ]

  const signedInLinks = [
    { href: '/', label: 'Cursos', className: 'hidden sm:block' },
  ]

  return (
    <header className="flex w-full items-center h-20 gap-6 px-8 border-b dark:border-white/20 font-semibold">
      <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
        <h1>MariUbialli</h1>
      </Link>

      <div className="grow" />

      <SignedOut>
        {signedOutLinks.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(link.className, {
                'text-purple-900': pathname === link.href,
              })}
            >
              {link.label}
            </Link>
          )
        })}
      </SignedOut>

      <SignedIn>
        {signedInLinks.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(link.className, {
                'text-purple-900': pathname === link.href,
              })}
            >
              {link.label}
            </Link>
          )
        })}

        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  )
}
