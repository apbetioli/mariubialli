import { toggleCompletedLesson } from '@/lib/features/userSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useId } from 'react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'

type SidebarLessonProps = {
  course: Course
  lesson: Lesson
  activeLesson: Lesson
}

export const SidebarLesson = ({
  course,
  lesson,
  activeLesson,
}: SidebarLessonProps) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
  const completedId = useId()

  const markAsComplete = (lessonId: string, checked: boolean) => {
    dispatch(
      toggleCompletedLesson({
        id: lessonId,
        completed: checked,
      }),
    )
  }

  return (
    <div className="gap-2 border-b w-full h-16 flex items-center">
      <Checkbox
        id={completedId}
        checked={user.completedLessonIds.includes(lesson.id)}
        onCheckedChange={(checked) =>
          markAsComplete(lesson.id, Boolean(checked))
        }
        className="h-5 w-5 ml-4"
      />
      <div className="w-full">
        <Link href={`/course/${course.id}/lesson/${lesson.id}`}>
          <Button
            className={cn('w-full justify-start truncate py-8', {
              'text-primary': activeLesson.id === lesson.id,
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
