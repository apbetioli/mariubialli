'use client'

import NotFound from '@/app/not-found'
import { useCourse } from '@/lib/hooks'
import { useParams, useRouter } from 'next/navigation'

const CoursePage = () => {
  const router = useRouter()
  const { courseId } = useParams<{ courseId: string }>()

  const { course } = useCourse(courseId)

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
