import { Button } from '@/components/ui/button'
import Empty from '@/components/Empty'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-full">
      <Empty title="Oops!" text="Acho que esse link não existe mais.">
        <Link href="/">
          <Button>Ir para Cursos</Button>
        </Link>
      </Empty>
    </div>
  )
}
