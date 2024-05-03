'use client'

import LoadingPage from '@/app/loading'
import { SidebarCourse } from '@/components/SidebarCourse'
import { SidebarGroup } from '@/components/SidebarGroup'
import { SidebarLesson } from '@/components/SidebarLesson'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useCourse } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { ReactNode } from 'react'

const CourseLayout = ({ children }: { children: ReactNode }) => {
  const { courseId } = useParams<{ courseId: string }>()
  const { lessonId } = useParams<{ lessonId: string }>()

  const { course, isLoading, isError, error } = useCourse(courseId)

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  const CourseHeader = ({ className }: { className?: string }) => (
    <div className={cn('p-4 bg-slate-500 text-white', className)}>
      <h2 className="text-lg font-semibold tracking-tight mb-1">
        {course.name}
      </h2>

      <p className="mb-1">Progresso {course.progress}%</p>
      <Progress value={course.progress} />

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
          {course.groups.map((group) => (
            <SidebarGroup key={group.id} group={group}>
              {group.lessons.map((lesson) => (
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
