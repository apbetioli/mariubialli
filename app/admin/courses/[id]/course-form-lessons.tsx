'use client'

import { UIGroup } from '@/app/types'
import { Separator } from '@/components/ui/separator'
import { CourseFormLesson } from './course-form-lesson'

const initialState = {
  name: '',
  slug: '',
  video: '',
  delete: false,
  order: 0,
}

export function CourseFormLessons({ group }: { group: UIGroup }) {
  return (
    <div className="space-y-2">
      {group.lessons.map((lesson) => (
        <CourseFormLesson key={lesson.name} group={group} lesson={lesson} />
      ))}
      {group.lessons.length > 0 && <Separator />}
      <CourseFormLesson group={group} lesson={initialState} />
    </div>
  )
}
