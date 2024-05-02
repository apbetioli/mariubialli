'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CardMedia } from '@/components/ui/card-media'
import { useCourse, useLesson } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { DownloadIcon, PlayIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'

const AttachmentPage = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const course = useCourse(courseId)

  if (!course.attachment) {
    notFound()
  }

  //If user has paid or price === 0, redirect to direct download

  //Add a button to go back to course, maybe Sidebar ?

  return (
    <div className="flex min-h-[calc(100vh-6rem)] w-full">
      <div
        className={cn('grid grid-cols-1 gap-8 max-w-4xl m-auto', {
          'md:grid-cols-2': !!course.attachment,
        })}
      >
        <Card>
          <CardMedia src={course.attachment.image} alt="" />
          <CardHeader>
            <CardTitle>{course.attachment.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="mb-4">{course.attachment.description}</p>
              <Link href={`/download/${course.attachment.id}`}>
                <Button className="w-full" size="lg" variant="outline">
                  <DownloadIcon />
                  Baixar moldes
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AttachmentPage
