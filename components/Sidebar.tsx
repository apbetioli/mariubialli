import { useAppSelector } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { PlayCircleIcon } from 'lucide-react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import Link from 'next/link'

type SidebarProps = {
  className?: string
  course: Course
  activeLesson: Lesson
}

export function Sidebar({ className, course, activeLesson }: SidebarProps) {
  const groupsMap = useAppSelector((state) => state.courses.groups)
  const groups = course.groupIds.map((id) => groupsMap[id])

  return (
    <ScrollArea className={className}>
      <aside className="pb-12">
        <Link href={`/course/${course.id}`}>
          <h2 className="p-4 text-lg font-semibold tracking-tight bg-slate-500 text-white">
            {course.name}
          </h2>
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
        <Link
          key={lesson.id}
          href={`/course/${course.id}/lesson/${lesson.id}`}
          className="gap-2 border-b w-full"
        >
          <Button
            className={cn('w-full justify-start truncate py-8', {
              'text-primary': activeLesson.id === lesson.id,
            })}
            variant="secondary"
          >
            <PlayCircleIcon size={20} />
            {lesson.name}
          </Button>
        </Link>
      ))}
    </div>
  )
}
