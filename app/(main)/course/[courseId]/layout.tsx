'use client'

import { SidebarCourse } from '@/components/SidebarCourse'
import { SidebarGroup } from '@/components/SidebarGroup'
import { SidebarLesson } from '@/components/SidebarLesson'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  useCourseDetails,
  useGroupsOfCourse,
  useLessonsOfCourse,
} from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ReactNode } from 'react'

const CourseLayout = ({ children }: { children: ReactNode }) => {
  const { courseId } = useParams<{ courseId: string }>()
  const { lessonId } = useParams<{ lessonId: string }>()

  const { course, progress } = useCourseDetails(courseId)
  const groups = useGroupsOfCourse(courseId)
  const lessons = useLessonsOfCourse(courseId)

  const lessonsOfGroup = (group: Group) =>
    lessons.filter((lesson) => lesson.groupId === group.id)

  const CourseHeader = ({ className }: { className?: string }) => (
    <div className={cn('p-4 bg-slate-500 text-white', className)}>
      <h2 className="text-lg font-semibold tracking-tight mb-1">
        {course.name}
      </h2>

      <p className="mb-1">Progresso {progress}%</p>
      <Progress value={progress} />

      {course.asset && lessonId && (
        <Link href={`/course/${course.slug}/asset`}>
          <Button variant="secondary" className="my-3 w-full">
            <DownloadIcon />
            Moldes
          </Button>
        </Link>
      )}
    </div>
  )

  return (
    <div className="flex flex-col-reverse justify-end md:flex-row h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] w-full ">
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
                  isActiveLesson={lessonId === lesson.slug}
                />
              ))}
            </SidebarGroup>
          ))}
        </SidebarCourse>
      </aside>

      {children}
    </div>
  )
}

export default CourseLayout
