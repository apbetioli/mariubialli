'use client'

import LoadingPage from '@/app/loading'
import { Sidebar } from '@/components/Sidebar'
import Video from '@/components/Video'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useCourse, useMarkAsCompleted, useUser } from '@/lib/hooks'
import { findByIdOrSlug } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useId } from 'react'

const LessonPage = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const { lessonId } = useParams<{ lessonId: string }>()

  const user = useUser()
  const completedCheckboxId = useId()
  const markAsCompleted = useMarkAsCompleted()

  const { course, isLoading, isError, error } = useCourse(courseId)

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  const lessons = course.groups.map((group) => group.lessons).flat()
  const lessonIndex = lessons.findIndex(findByIdOrSlug(lessonId))

  if (lessonIndex < 0) notFound()

  const activeLesson = lessons[lessonIndex]
  const isCompleted = user.completedLessonIds.includes(activeLesson.id)
  const isLastLesson = lessonIndex + 1 == lessons.length
  const nextLesson = isLastLesson ? lessons[0] : lessons[lessonIndex + 1]

  return (
    <>
      <Sidebar course={course} lessonSlug={lessonId} />

      <main className="flex flex-col w-full items-center justify-center bg-black">
        <div className="w-full">
          <Video src={activeLesson.video} />
          <div className="flex flex-col md:flex-row font-semibold py-4 px-2 bg-black text-white gap-4 items-center">
            <span className="grow">{activeLesson.name}</span>

            <div className="items-center gap-2 hidden md:flex">
              <Checkbox
                id={completedCheckboxId}
                checked={isCompleted}
                onCheckedChange={(checked) =>
                  markAsCompleted(activeLesson.id, Boolean(checked))
                }
                className="h-5 w-5"
              />
              <label htmlFor={completedCheckboxId}>Concluído</label>
            </div>

            {isLastLesson ? (
              <Link href={`/`} className="w-full md:w-fit">
                <Button
                  variant="secondary"
                  onClick={() => markAsCompleted(activeLesson.id, true)}
                  className="w-full md:w-fit"
                >
                  Ver outros cursos
                </Button>
              </Link>
            ) : (
              <Link
                href={`/course/${courseId}/lesson/${nextLesson.slug}`}
                className="w-full md:w-fit"
              >
                <Button
                  onClick={() => markAsCompleted(activeLesson.id, true)}
                  className="w-full md:w-fit"
                >
                  Próxima aula <ArrowRightIcon />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default LessonPage
