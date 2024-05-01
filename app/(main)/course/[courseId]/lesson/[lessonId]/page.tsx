'use client'

import NotFound from '@/app/not-found'
import { Sidebar } from '@/components/Sidebar'
import Video from '@/components/Video'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { toggleCompletedLesson } from '@/lib/features/userSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useId } from 'react'

const LessonPage = () => {
  const dispatch = useAppDispatch()

  const { courseId } = useParams()
  const { lessonId } = useParams()

  const completedId = useId()

  const coursesMap = useAppSelector((state) => state.courses.courses)
  const lessonsMap = useAppSelector((state) => state.courses.lessons)
  const user = useAppSelector((state) => state.user.user)

  const course = coursesMap[String(courseId)]
  const lesson = lessonsMap[String(lessonId)]

  const markAsComplete = (lessonId: string, checked: boolean) => {
    dispatch(
      toggleCompletedLesson({
        id: lessonId,
        completed: checked,
      }),
    )
  }

  if (!course || !lesson) {
    return (
      <div className="flex min-h-full w-full">
        <NotFound />
      </div>
    )
  }

  const isCompleted = user.completedLessonIds.includes(lesson.id)
  const progress = Math.round(
    (course.lessonIds.filter((id) => user.completedLessonIds.includes(id))
      .length /
      course.lessonIds.length) *
      100,
  )

  const lessonIndex = course.lessonIds.findIndex((id) => id === lesson.id)
  const nextLessonId =
    lessonIndex < course.lessonIds.length - 1
      ? course.lessonIds[lessonIndex + 1]
      : null

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
                id={completedId}
                checked={isCompleted}
                onCheckedChange={(checked) =>
                  markAsComplete(lesson.id, Boolean(checked))
                }
                className="h-5 w-5"
              />
              <label htmlFor={completedId}>
                {isCompleted ? 'Concluído' : 'Marcar como concluído'}
              </label>
            </span>

            {nextLessonId ? (
              <Link href={`/course/${course.id}/lesson/${nextLessonId}`}>
                <Button onClick={() => markAsComplete(lesson.id, true)}>
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
