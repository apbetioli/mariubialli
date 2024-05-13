'use client'

import LoadingPage from '@/app/loading'
import { useCourse } from '@/lib/hooks'
import { notFound, useParams, useRouter } from 'next/navigation'

const CoursePage = () => {
  const router = useRouter()
  const { courseSlug } = useParams<{ courseSlug: string }>()
  const { course, isLoading, isError, error } = useCourse(courseSlug)

  if (isLoading) return <LoadingPage />
  if (isError) throw error
  if (!course) notFound()

  // Will redirect to the first lesson
  router.replace(`/courses/${course.slug}/lessons/${course.nextLesson.slug}`)

  return <LoadingPage />
}

export default CoursePage
