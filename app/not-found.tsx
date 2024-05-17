import { Empty } from '@/components/empty'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-full">
      <Empty title="Oops!">
        <p>Acho que esse link não existe</p>
        <Link href="/">
          <Button>Ir para Cursos</Button>
        </Link>
      </Empty>
    </div>
  )
}
