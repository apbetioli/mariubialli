'use client'

import { AttachmentMedia } from '@/components/AttachmentMedia'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { buyAttachment } from '@/lib/features/userSlice'
import { useCourse, useUser } from '@/lib/hooks'

import toast, { Toaster } from 'react-hot-toast'
import { DownloadIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useDispatch } from 'react-redux'

const AttachmentPage = () => {
  const dispatch = useDispatch()
  const user = useUser()
  const { courseId } = useParams<{ courseId: string }>()
  const course = useCourse(courseId)
  const attachment = course.attachment

  if (!attachment) {
    notFound()
  }

  const isPaid = user.paidAttachmentIds.includes(attachment.id)

  const buy = () => {
    dispatch(buyAttachment(attachment))
    toast.success('Compra realizada com sucesso!')
  }

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-4xl m-auto">
        <Card className="md:flex-row">
          <AttachmentMedia
            src={attachment.image}
            alt={attachment.name}
            className="hidden md:inline-flex"
          />

          <CardContent className="flex flex-col gap-3 p-8">
            <CardTitle>{attachment.name}</CardTitle>
            <CardDescription className="mb-6">
              {attachment.description}
            </CardDescription>

            {attachment.price > 0 && !isPaid ? (
              <>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-3xl">
                  R$ {new Intl.NumberFormat('pt-BR').format(attachment.price)}
                </span>

                <Button className="w-full" size="lg" onClick={() => buy()}>
                  <ShoppingCartIcon />
                  Comprar
                </Button>
              </>
            ) : (
              <Link href={`/api/attachment/${attachment.id}`} target="_blank">
                <Button className="w-full" size="lg">
                  <DownloadIcon />
                  Baixar moldes
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AttachmentPage
