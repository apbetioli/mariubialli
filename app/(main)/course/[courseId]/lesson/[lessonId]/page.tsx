'use client'

import { SidebarCourse } from '@/components/SidebarCourse'
import { SidebarGroup } from '@/components/SidebarGroup'
import { SidebarLesson } from '@/components/SidebarLesson'
import Video from '@/components/Video'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useCourse, useGroups, useLesson, useLessons } from '@/lib/hooks'
import { ArrowRightIcon } from 'lucide-react'
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

  return (
    <div className="flex flex-col-reverse md:flex-row h-[calc(100vh-6rem)] w-full">
      <SidebarCourse
        course={course}
        progress={progress}
        className="md:w-96 border-r"
      >
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

      <div className="flex flex-col w-full items-center justify-center bg-black">
        <div className="w-full max-w-screen-lg">
          <Video src={activeLesson.video} />
          <p className="font-semibold py-4 px-2 bg-black text-white flex gap-4 items-center">
            <span className="grow">{activeLesson.name}</span>

            <span className="flex items-center gap-2">
              <Checkbox
                id={completedCheckboxId}
                checked={isCompleted}
                onCheckedChange={(checked) =>
                  markAsCompleted(activeLesson.id, Boolean(checked))
                }
                className="h-5 w-5"
              />
              <label htmlFor={completedCheckboxId}>
                {isCompleted ? 'Concluído' : 'Marcar como concluído'}
              </label>
            </span>

            {nextLessonId ? (
              <Link href={`/course/${course.id}/lesson/${nextLessonId}`}>
                <Button onClick={() => markAsCompleted(activeLesson.id, true)}>
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
