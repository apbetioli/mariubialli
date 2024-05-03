import { CourseWithUserDetails } from '@/app/types'
import { cn } from '@/lib/utils'
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Progress } from './ui/progress'

export const SidebarCourseHeader = ({
  course,
  className,
}: {
  course: CourseWithUserDetails
  className?: string
}) => (
  <div className={cn('p-4 bg-slate-500 text-white', className)}>
    <h2 className="text-lg font-semibold tracking-tight mb-1">{course.name}</h2>

    <p className="mb-1">Progresso {course.progress}%</p>
    <Progress className="mb-2" value={course.progress} />

    {course.assets.length > 0 && (
      <Link href={`/course/${course.slug}/assets`}>
        <Button variant="secondary" className="my-1 w-full">
          <DownloadIcon />
          Moldes
        </Button>
      </Link>
    )}
  </div>
)
