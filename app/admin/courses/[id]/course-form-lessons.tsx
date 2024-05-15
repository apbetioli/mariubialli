'use client'

import { UIGroup, UILesson } from '@/app/types'
import { Separator } from '@/components/ui/separator'
import { addLessonToGroup } from '@/lib/features/course-slice'
import { useAppDispatch } from '@/lib/hooks'
import toast from 'react-hot-toast'
import { CourseFormLesson } from './course-form-lesson'

export function GroupFormLessons({ group }: { group: UIGroup }) {
  const dispatch = useAppDispatch()

  const onAddLesson = (group: UIGroup, lesson: UILesson) => {
    try {
      dispatch(addLessonToGroup({ group, lesson }))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onRemoveLesson = (group: UIGroup, lesson: UILesson) => {
    try {
      throw new Error('NotImplemented')
      // TODO dispatch(removeLessonFromGroup(group, lesson))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div className="space-y-2">
      {group.lessons.map((lesson) => (
        <CourseFormLesson
          key={lesson.name}
          lesson={lesson}
          onRemove={() => onRemoveLesson(group, lesson)}
        />
      ))}
      {group.lessons.length > 0 && <Separator />}
      <CourseFormLesson onAdd={(lesson) => onAddLesson(group, lesson)} />
    </div>
  )
}
