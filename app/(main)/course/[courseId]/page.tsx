'use client'

import LoadingPage from '@/app/loading'
import { useCourse } from '@/lib/hooks'
import { notFound, useParams, useRouter } from 'next/navigation'

const CoursePage = () => {
  const router = useRouter()
  const { courseId } = useParams<{ courseId: string }>()
  const { course, isLoading, isError, error } = useCourse(courseId)

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  // Will redirect to the first lesson
  router.replace(`/course/${course.slug}/lesson/${course.nextLesson.slug}`)

  return <LoadingPage />
}

export default CoursePage
