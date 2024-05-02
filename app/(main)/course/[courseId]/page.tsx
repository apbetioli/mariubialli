'use client'

import { useCourseDetails } from '@/lib/hooks'
import { notFound, useParams, useRouter } from 'next/navigation'

const CoursePage = () => {
  const router = useRouter()
  const { courseId } = useParams<{ courseId: string }>()
  const { course, nextLesson } = useCourseDetails(courseId)

  if (!course) {
    notFound()
  }

  // Will redirect to the first lesson
  router.replace(`/course/${course.slug}/lesson/${nextLesson.slug}`)
}

export default CoursePage
