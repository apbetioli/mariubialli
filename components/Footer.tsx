'use client'

import Link from 'next/link'
import { GithubIcon } from './ui/icons'

export default function Footer() {
  const footerLinks = [
    { href: '/soon?p=terms', label: 'Termos de serviço' },
    { href: '/soon?p=privacy', label: 'Política de privacidade' },
    { href: 'https://github.com/apbetioli/mariubialli', label: <GithubIcon /> },
  ]
  return (
    <footer className="flex flex-col sm:flex-row items-center sm:h-20 gap-6 p-8 font-medium border-t dark:border-white/20 text-sm bg-primary-foreground text-primary">
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
