import { Authority } from './authority'
import { CTA } from './cta'
import { Hero } from './hero'
import { Problem } from './problem'

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
