import { Section } from '@/components/section'
import Image from 'next/image'

export function Authority() {
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
