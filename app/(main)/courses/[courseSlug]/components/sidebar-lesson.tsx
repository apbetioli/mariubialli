import { CourseWithUserDetails, UILesson } from '@/app/types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useMarkAsCompleted, useUser } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useId } from 'react'

type SidebarLessonProps = {
  course: CourseWithUserDetails
  lesson: UILesson
  isActiveLesson: boolean
}

export const SidebarLesson = ({
  course,
  lesson,
  isActiveLesson,
}: SidebarLessonProps) => {
  const user = useUser()
  const completedCheckboxId = useId()
  const markAsCompleted = useMarkAsCompleted()
  const isCompleted = user.completedLessonIds.includes(lesson.id)

  return (
    <div className="gap-2 border-b w-full h-16 flex items-center">
      <Checkbox
        id={completedCheckboxId}
        checked={isCompleted}
        onCheckedChange={(checked) =>
          markAsCompleted(lesson.id!, Boolean(checked))
        }
        className="h-5 w-5 ml-4"
      />
      <div className="w-full">
        <Link href={`/courses/${course.slug}/lessons/${lesson.slug}`}>
          <Button
            className={cn('w-full justify-start truncate py-8', {
              'text-primary': isActiveLesson,
              'hover:text-primary': isActiveLesson,
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
