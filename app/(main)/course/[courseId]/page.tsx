'use client'

import NotFound from '@/app/not-found'
import { useAppSelector } from '@/lib/hooks'
import { useParams, useRouter } from 'next/navigation'

const CoursePage = () => {
  const { courseId } = useParams()
  const router = useRouter()
  const coursesMap = useAppSelector((state) => state.courses.courses)

  const course = coursesMap[String(courseId)]

  if (!course) {
    return (
      <div className="flex min-h-full w-full">
        <NotFound />
      </div>
    )
  }

  // Will redirect to the first lesson
  router.replace(`/course/${courseId}/lesson/${course.lessonIds[0]}`)
}

export default CoursePage
