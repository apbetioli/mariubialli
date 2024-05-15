'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { updateCourseField } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Image from 'next/image'
import { ChangeEvent } from 'react'

export function CourseFormDetails() {
  const course = useAppSelector((state) => state.course.value)
  const dispatch = useAppDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCourseField(event.target))
  }

  return (
    <div className="space-y-8 mt-6">
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <Input
          name="name"
          value={course.name}
          required
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Slug</Label>
        <Input
          name="slug"
          disabled={course.published}
          value={course.slug}
          required
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Description</Label>
        <Input
          name="description"
          value={course.description}
          required
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Image URL</Label>
        <Input
          name="image"
          value={course.image}
          required
          onChange={(event) => handleInputChange(event)}
        />
        {course.image && (
          <Image
            src={course.image}
            width={64}
            height={64}
            alt="Course cover image"
          />
        )}
      </div>
    </div>
  )
}
