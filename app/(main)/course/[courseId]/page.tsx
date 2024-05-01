'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCourse, useGroups, useLessons } from '@/lib/hooks'
import { DownloadIcon, PlayIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>()

  const { course } = useCourse(courseId)

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-6rem)] w-full">
      <div className="flex flex-col w-full items-center justify-center bg-slate-50">
        <div className="w-full max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-8">
            <Image src={course.image} alt="" width={300} height={500} />
            <Card>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="mb-4">{course.description}</p>
                  <Link
                    href={`/course/${course.id}/lesson/${course.lessonIds[0]}`}
                  >
                    <Button className="w-full" size="lg">
                      <PlayIcon />
                      Assistir aulas gratuitamente
                    </Button>
                  </Link>
                  {course.attachment && (
                    <div>
                      <p>{course.attachment.description}</p>
                      <Button className="w-full" size="lg" variant="outline">
                        <DownloadIcon />
                        Baixar moldes
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
