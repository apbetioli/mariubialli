import { Section } from '@/components/section'
import Image from 'next/image'

export function Problem() {
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
