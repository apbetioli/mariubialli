'use client'

import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { href: '/soon?p=terms', label: 'Termos de serviço' },
    { href: '/soon?p=privacy', label: 'Política de privacidade' },
  ]
  return (
    <footer className="flex flex-col sm:flex-row items-center sm:h-20 gap-6 p-8 font-medium border-t border-white/20 text-sm">
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
