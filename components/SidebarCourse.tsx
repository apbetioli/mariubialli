import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Progress } from './ui/progress'
import { ScrollArea } from './ui/scroll-area'

type SidebarCourseProps = {
  className?: string
  course: Course
  progress: number
}

export function SidebarCourse({
  className,
  course,
  progress,
  children,
}: PropsWithChildren<SidebarCourseProps>) {
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
        {children}
      </aside>
    </ScrollArea>
  )
}
