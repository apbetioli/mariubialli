'use client'

import { CourseCard } from '@/components/CourseCard'
import { useCourses } from '@/lib/hooks'

export default function HomePage() {
  const courses = useCourses()

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-fit">
        {courses.map((course) => (
          <CourseCard key={course.id} id={course.id} />
        ))}
      </div>
    </div>
  )
}
