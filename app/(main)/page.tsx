'use client'

import { useCourses } from '@/lib/hooks'
import Link from 'next/link'
import { CourseCard } from '../../components/CourseCard'

export default function HomePage() {
  const courses = useCourses()

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-fit">
        {courses.map((course) => {
          return (
            <Link key={course.id} href={`/course/${course.id}`}>
              <CourseCard id={course.id} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
