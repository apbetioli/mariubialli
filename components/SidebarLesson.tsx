import { useMarkAsCompleted, useUser } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useId } from 'react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'

type SidebarLessonProps = {
  course: Course
  lesson: Lesson
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

  return (
    <div className="gap-2 border-b w-full h-16 flex items-center">
      <Checkbox
        id={completedCheckboxId}
        checked={user.completedLessonIds.includes(lesson.id)}
        onCheckedChange={(checked) =>
          markAsCompleted(lesson.id, Boolean(checked))
        }
        className="h-5 w-5 ml-4"
      />
      <div className="w-full">
        <Link href={`/course/${course.slug}/lesson/${lesson.slug}`}>
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
