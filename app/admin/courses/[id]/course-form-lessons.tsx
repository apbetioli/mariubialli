'use client'

import { UIGroup, UILesson } from '@/app/types'
import { Separator } from '@/components/ui/separator'
import {
  addLesson,
  deleteLesson,
  updateLesson,
} from '@/lib/features/course-slice'
import { useAppDispatch } from '@/lib/hooks'
import toast from 'react-hot-toast'
import { CourseFormLesson } from './course-form-lesson'

export function CourseFormLessons({ group }: { group: UIGroup }) {
  const dispatch = useAppDispatch()

  const onAddLesson = (group: UIGroup, lesson: UILesson) => {
    try {
      dispatch(addLesson({ group, lesson }))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onDeleteLesson = (group: UIGroup, lesson: UILesson) => {
    try {
      dispatch(deleteLesson({ group, lesson }))
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const onUpdateLesson = (group: UIGroup, lesson: UILesson) => {
    try {
      dispatch(updateLesson({ group, lesson }))
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
          onDelete={() => onDeleteLesson(group, lesson)}
          onSave={(updated) => onUpdateLesson(group, updated)}
        />
      ))}
      {group.lessons.length > 0 && <Separator />}
      <CourseFormLesson onAdd={(lesson) => onAddLesson(group, lesson)} />
    </div>
  )
}
