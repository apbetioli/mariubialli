'use client'

import Link from 'next/link'
import { GithubIcon } from './ui/icons'

export default function Footer() {
  const footerLinks = [
    { href: '/terms', label: 'Termos de serviço' },
    { href: '/privacy', label: 'Política de privacidade' },
    { href: 'https://github.com/apbetioli/mariubialli', label: <GithubIcon /> },
  ]
  return (
    <footer className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:py-2 font-medium border-t dark:border-white/20 text-xs text-primary bg-primary-foreground">
      <span>MariUbialli © 2024</span>
      <nav className="flex justify-end grow items-center gap-6 flex-col sm:flex-row ">
        {footerLinks.map((link) => {
          return (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          )
        })}
      </nav>
    </footer>
  )
}
