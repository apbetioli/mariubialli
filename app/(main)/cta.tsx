import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CTA() {
  return (
    <Section>
      <div className="text-center col-span-2">
        <h2 className="text-2xl font-bold mb-4">Pronta para começar?</h2>
        <Link href="/courses">
          <Button size="lg" className="my-4">
            Assistir gratuitamente
          </Button>
        </Link>
      </div>
    </Section>
  )
}
