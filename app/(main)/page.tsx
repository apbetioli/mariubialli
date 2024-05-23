import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Authority />
      <CTA />
    </main>
  )
}

function CTA() {
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

function Authority() {
  return (
    <Section className="bg-primary">
      <div className="prose max-w-full text-primary-foreground">
        <h2 className="text-primary-foreground">Com quem você vai aprender?</h2>
        <p>
          Eu sou <b>Mari Ubialli</b>, e sou apaixonada por artesanato em feltro
          e por ensinar. Com mais de 1500 alunas, meu objetivo é ensinar o
          artesanato em feltro de uma forma simples que mesmo que você nunca
          tenha pego em uma agulha você vai conseguir confeccionar uma linda
          boneca feita por suas próprias mãos.
        </p>
      </div>

      <Image
        src="/mari.webp"
        width={512}
        height={512}
        alt="Foto de Mari Ubialli com bonecas Joias RarasF"
      />
    </Section>
  )
}

function Problem() {
  return (
    <Section>
      <Image
        src="/esmeralda.webp"
        width={512}
        height={339}
        alt="Bonecas de feltro Esmeralda"
      />

      <div className="prose max-w-full">
        <h2>Sim, você que é iniciante também consegue</h2>
        <p>
          Para fazer bonecas perfeitas você só precisa de uma coisa: vontade!
        </p>
        <p>
          O segredo é ter o direcionamento certo! Para quem está iniciando, é
          muito importante aprender as técnicas da forma correta. E não tem nada
          melhor que um passo a passo em vídeo que te mostra em detalhes tudo
          que você precisa fazer. São os detalhes que fazem toda a diferença no
          resultado final. Com os vídeos você vê exatamente a forma que eu estou
          fazendo para ter segurança de que está fazendo da forma correta, tem
          uma explicação muito mais aprofundada, e se perder alguma coisa, é só
          voltar e assistir novamente.
        </p>
      </div>
    </Section>
  )
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:container px-8 py-20 lg:px-20 items-center',
        className,
      )}
    >
      {children}
    </section>
  )
}

function Hero() {
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
