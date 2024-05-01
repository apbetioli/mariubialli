'use client'

import { Sidebar } from '@/components/Sidebar'
import Video from '@/components/Video'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useCourse, useLesson } from '@/lib/hooks'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useId } from 'react'

const LessonPage = () => {
  const { courseId } = useParams()
  const { lessonId } = useParams()

  const completedCheckboxId = useId()

  const { course, progress } = useCourse(String(courseId))
  const { lesson, nextLessonId, isCompleted, markAsCompleted } = useLesson(
    String(courseId),
    String(lessonId),
  )

  return (
    <div className="flex flex-col-reverse md:flex-row h-[calc(100vh-6rem)] w-full">
      <Sidebar
        course={course}
        activeLesson={lesson}
        progress={progress}
        className="md:w-96 border-r"
      />
      <div className="flex flex-col w-full items-center justify-center bg-black">
        <div className="w-full max-w-screen-lg">
          <Video src={lesson.video} />
          <p className="font-semibold py-4 px-4 bg-black text-white flex gap-4 items-center">
            <span className="grow">{lesson.name}</span>

            <span className="flex items-center gap-2">
              <Checkbox
                id={completedCheckboxId}
                checked={isCompleted}
                onCheckedChange={(checked) =>
                  markAsCompleted(lesson.id, Boolean(checked))
                }
                className="h-5 w-5"
              />
              <label htmlFor={completedCheckboxId}>
                {isCompleted ? 'Concluído' : 'Marcar como concluído'}
              </label>
            </span>

            {nextLessonId ? (
              <Link href={`/course/${course.id}/lesson/${nextLessonId}`}>
                <Button onClick={() => markAsCompleted(lesson.id, true)}>
                  Próxima aula <ArrowRightIcon />
                </Button>
              </Link>
            ) : (
              <Link href={`/`}>
                <Button variant="secondary">Fim! Ver outros cursos</Button>
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LessonPage
