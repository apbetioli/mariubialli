import { UICourse, UILesson } from '@/app/types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { useToggleLessonCompletedMutation } from '@/lib/features/api-slice'
import { useUser } from '@/lib/use-user'
import { cn, userCompletedLesson } from '@/lib/utils'
import Link from 'next/link'
import { useId } from 'react'

type SidebarLessonProps = {
  course: UICourse
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
  const [markAsCompleted] = useToggleLessonCompletedMutation()
  const isCompleted = userCompletedLesson(user)(lesson)

  return (
    <div className="gap-2 border-b w-full h-16 flex items-center">
      <Checkbox
        id={completedCheckboxId}
        checked={isCompleted}
        onCheckedChange={(checked) =>
          markAsCompleted({ id: lesson.id!, completed: Boolean(checked) })
        }
        className="h-5 w-5 ml-4"
      />
      <label htmlFor={completedCheckboxId} className="sr-only">
        Concluído
      </label>

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
