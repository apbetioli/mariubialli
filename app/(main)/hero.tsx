import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <Section className="bg-primary-foreground">
      <div className="prose max-w-full">
        <h1>
          Crie bonecas lindas com técnica e acabamento perfeitos, mesmo que você
          nunca tenha costurado
        </h1>
        <p className="text-xl">
          Todas as aulas são gratuitas para assistir, faça seu login e comece
          agora mesmo.
        </p>
        <div className="w-full text-center lg:text-left">
          <Link href="/courses">
            <Button size="lg" className="my-4">
              Ver cursos gratuitamente
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src="/bonecas.webp"
        width={965}
        height={442}
        alt="7 bonecas de feltro tema Joias Raras"
        priority={true}
      />
    </Section>
  )
}
