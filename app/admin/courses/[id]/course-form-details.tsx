'use client'
import { Input } from '@/components/ui/input'
import { handleFieldChange } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Image from 'next/image'

export function CourseFormDetails() {
  const course = useAppSelector((state) => state.course.value)
  const dispatch = useAppDispatch()

  const handleInputChange = (field: string, value: any) => {
    dispatch(handleFieldChange({ field, value }))
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <label>Name</label>
        <Input
          value={course.name}
          required
          onChange={(event) => handleInputChange('name', event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Slug</label>
        <Input
          value={course.slug}
          required
          onChange={(event) => handleInputChange('slug', event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Description</label>
        <Input
          value={course.description}
          required
          onChange={(event) =>
            handleInputChange('description', event.target.value)
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Image URL</label>
        <Input
          value={course.image}
          required
          onChange={(event) => handleInputChange('image', event.target.value)}
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
