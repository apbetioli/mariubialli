'use client'

import Link from 'next/link'
import { GithubIcon } from './ui/icons'

export function Footer() {
  const footerLinks = [
    { href: 'mailto:contato@mariubialli.com.br', label: 'Contato' },
    { href: '/termos-de-uso', label: 'Termos de serviço' },
    { href: '/politica-de-privacidade', label: 'Política de privacidade' },
    { href: 'https://github.com/apbetioli/mariubialli', label: <GithubIcon /> },
  ]
  return (
    <footer className="hidden md:flex flex-col sm:flex-row items-center gap-6 px-3 py-6 sm:py-2 font-medium border-t dark:border-white/20 text-xs text-primary bg-primary-foreground">
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
