'use client'

import LoadingPage from '@/app/loading'
import { useCourseDetails } from '@/lib/hooks'
import { useParams, useRouter } from 'next/navigation'

const CoursePage = () => {
  const router = useRouter()
  const { courseId } = useParams<{ courseId: string }>()
  const { course, nextLesson } = useCourseDetails(courseId)

  if (!course || !nextLesson) {
    return <LoadingPage />
  }

  // Will redirect to the first lesson
  router.replace(`/course/${course.slug}/lesson/${nextLesson.slug}`)

  return <LoadingPage />
}

export default CoursePage
