import { toggleCompletedLesson } from '@/lib/features/userSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useId } from 'react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Progress } from './ui/progress'
import { ScrollArea } from './ui/scroll-area'

type SidebarProps = {
  className?: string
  course: Course
  activeLesson: Lesson
  progress: number
}

export function Sidebar({
  className,
  course,
  activeLesson,
  progress,
}: SidebarProps) {
  const groupsMap = useAppSelector((state) => state.courses.groups)
  const groups = course.groupIds.map((id) => groupsMap[id])

  return (
    <ScrollArea className={className}>
      <aside className="pb-12">
        <Link href={`/course/${course.id}`}>
          <div className="p-4 bg-slate-500 text-white">
            <h2 className="text-lg font-semibold tracking-tight mb-1">
              {course.name}
            </h2>
            <p className="mb-1">Progresso {progress}%</p>
            <Progress value={progress} />
          </div>
        </Link>
        {groups.map((group) => (
          <SidebarGroup
            key={group.id}
            course={course}
            group={group}
            activeLesson={activeLesson}
          />
        ))}
      </aside>
    </ScrollArea>
  )
}

type SidebarGroupProps = {
  course: Course
  group: Group
  activeLesson: Lesson
}

export const SidebarGroup = ({
  course,
  group,
  activeLesson,
}: SidebarGroupProps) => {
  const lessonsMap = useAppSelector((state) => state.courses.lessons)

  const lessons = course.lessonIds
    .map((id) => lessonsMap[id])
    .filter((lesson) => lesson.groupId === group.id)

  return (
    <div key={group.id}>
      <h2 className="px-4 text-lg font-semibold tracking-tight bg-primary text-primary-foreground">
        {group.name}
      </h2>
      {lessons.map((lesson) => (
        <SidebarLesson
          key={lesson.id}
          course={course}
          lesson={lesson}
          activeLesson={activeLesson}
        />
      ))}
    </div>
  )
}

type SidebarLessonProps = {
  course: Course
  lesson: Lesson
  activeLesson: Lesson
}

export const SidebarLesson = ({
  course,
  lesson,
  activeLesson,
}: SidebarLessonProps) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
  const completedId = useId()

  const markAsComplete = (lessonId: string, checked: boolean) => {
    dispatch(
      toggleCompletedLesson({
        id: lessonId,
        completed: checked,
      }),
    )
  }

  return (
    <div className="gap-2 border-b w-full h-16 flex items-center">
      <Checkbox
        id={completedId}
        checked={user.completedLessonIds.includes(lesson.id)}
        onCheckedChange={(checked) =>
          markAsComplete(lesson.id, Boolean(checked))
        }
        className="h-5 w-5 ml-4 mr-2"
      />
      <div className="w-full">
        <Link href={`/course/${course.id}/lesson/${lesson.id}`}>
          <Button
            className={cn('w-full justify-start truncate py-8', {
              'text-primary': activeLesson.id === lesson.id,
            })}
            variant="ghost"
          >
            {lesson.name}
          </Button>
        </Link>
      </div>
    </div>
  )
}
