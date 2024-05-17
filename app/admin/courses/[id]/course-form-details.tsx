'use client'

import { InputWithLabel } from '@/components/ui/input'
import { updateCourseField } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Image from 'next/image'
import { ChangeEvent } from 'react'

export function CourseFormDetails() {
  const course = useAppSelector((state) => state.course.value)
  const dispatch = useAppDispatch()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    dispatch(updateCourseField({ name, value }))
  }

  return (
    <div className="space-y-8 mt-6">
      <div className="flex flex-col gap-2">
        <InputWithLabel
          name="name"
          label="Name"
          value={course.name}
          required
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <InputWithLabel
          name="description"
          label="Description"
          value={course.description}
          required
          onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <InputWithLabel
          name="image"
          label="Image URL"
          value={course.image}
          required
          onChange={(event) => handleInputChange(event)}
        />
        {course.image && (
          <Image
            className="aspect-auto rounded-md object-cover"
            src={course.image}
            width={100}
            height={100}
            alt="Course cover image"
          />
        )}
      </div>
    </div>
  )
}
