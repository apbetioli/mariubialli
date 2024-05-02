'use client'

import Video from '@/components/Video'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useCourse, useLessonDetails } from '@/lib/hooks'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useId } from 'react'

const LessonPage = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const { lessonId } = useParams<{ lessonId: string }>()

  const completedCheckboxId = useId()

  const course = useCourse(courseId)

  const {
    lesson: activeLesson,
    nextLesson,
    isLastLesson,
    isCompleted,
    markAsCompleted,
  } = useLessonDetails(courseId, lessonId)

  return (
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
              href={`/course/${course.slug}/lesson/${nextLesson.slug}`}
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
  )
}

export default LessonPage
