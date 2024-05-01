'use client'

import { SidebarCourse } from '@/components/SidebarCourse'
import { SidebarGroup } from '@/components/SidebarGroup'
import { SidebarLesson } from '@/components/SidebarLesson'
import Video from '@/components/Video'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { useCourse, useGroups, useLesson, useLessons } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { ArrowRightIcon, DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useId } from 'react'

const LessonPage = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const { lessonId } = useParams<{ lessonId: string }>()

  const completedCheckboxId = useId()

  const { course, progress } = useCourse(courseId)
  const groups = useGroups(courseId)
  const lessons = useLessons(courseId)

  const {
    lesson: activeLesson,
    nextLessonId,
    isCompleted,
    markAsCompleted,
  } = useLesson(courseId, lessonId)

  const lessonsOfGroup = (group: Group) =>
    lessons.filter((lesson) => lesson.groupId === group.id)

  const CourseHeader = ({ className }: { className?: string }) => (
    <div className={cn('p-4 bg-slate-500 text-white', className)}>
      <h2 className="text-lg font-semibold tracking-tight mb-1">
        {course.name}
      </h2>

      <p className="mb-1">Progresso {progress}%</p>
      <Progress value={progress} />

      {course.attachment && (
        <Link href={`/course/${course.id}`}>
          <Button variant="secondary" className="my-3 w-full">
            <DownloadIcon />
            Baixar moldes
          </Button>
        </Link>
      )}
    </div>
  )

  return (
    <div className="flex flex-col-reverse justify-end md:flex-row h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] w-full">
      <aside className="flex flex-col md:w-96 border-r md:shrink-0 overflow-auto">
        <CourseHeader className="hidden md:block" />
        <SidebarCourse>
          <CourseHeader className="block md:hidden" />
          {groups.map((group) => (
            <SidebarGroup key={group.id} group={group}>
              {lessonsOfGroup(group).map((lesson) => (
                <SidebarLesson
                  key={lesson.id}
                  course={course}
                  lesson={lesson}
                  isActiveLesson={activeLesson.id === lesson.id}
                />
              ))}
            </SidebarGroup>
          ))}
        </SidebarCourse>
      </aside>

      <main className="flex flex-col w-full items-center justify-center bg-black">
        <div className="w-full max-w-screen-md">
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

            {nextLessonId ? (
              <Link
                href={`/course/${course.id}/lesson/${nextLessonId}`}
                className="w-full md:w-fit"
              >
                <Button
                  onClick={() => markAsCompleted(activeLesson.id, true)}
                  className="w-full md:w-fit"
                >
                  Próxima aula <ArrowRightIcon />
                </Button>
              </Link>
            ) : (
              <Link href={`/`} className="w-full md:w-fit">
                <Button
                  variant="secondary"
                  onClick={() => markAsCompleted(activeLesson.id, true)}
                  className="w-full md:w-fit"
                >
                  Ver outros cursos
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default LessonPage
