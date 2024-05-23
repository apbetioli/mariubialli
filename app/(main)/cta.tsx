import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <Section className="lg:flex lg:flex-col text-center">
      <h2 className="text-2xl font-bold">Pronta para começar?</h2>
      <Link href="/courses">
        <Button size="lg" className="my-4">
          Ver cursos gratuitamente
        </Button>
      </Link>
    </Section>
  )
}
