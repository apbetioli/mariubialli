import { CourseWithUserDetails } from '@/app/types'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { DownloadIcon } from 'lucide-react'
import Link from 'next/link'

export const SidebarCourseHeader = ({
  course,
  className,
}: {
  course: CourseWithUserDetails
  className?: string
}) => (
  <div className={cn('p-4 bg-gray-500 text-white', className)}>
    <h2 className="text-lg font-semibold tracking-tight mb-1">{course.name}</h2>

    <p className="mb-1 hidden md:inline-flex">Progresso {course.progress}%</p>
    <Progress className="mb-2 hidden md:inline-flex" value={course.progress} />

    {course.assets.length > 0 && (
      <Link href={`/courses/${course.slug}/assets`}>
        <Button variant="secondary" className="my-1 w-full">
          <DownloadIcon />
          Moldes
        </Button>
      </Link>
    )}
  </div>
)
