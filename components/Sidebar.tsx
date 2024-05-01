import { useAppSelector } from '@/lib/hooks'
import Link from 'next/link'
import { SidebarGroup } from './SidebarGroup'
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
