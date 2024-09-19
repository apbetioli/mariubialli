import { getCurrentUser } from '@/lib/server/auth'
import { findCourseById, findCourseBySlug } from '@/lib/server/queries'
import { getNextLesson } from '@/lib/utils'
import { notFound, redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const CoursePage = async ({ params }: { params: { courseSlug: string } }) => {
  let course = await findCourseBySlug(params.courseSlug)
  if (!course) {
    course = await findCourseById(params.courseSlug)
  }

  if (!course) {
    notFound()
  }

  const user = await getCurrentUser()

  const nextLesson = getNextLesson(user, course)

  if (!nextLesson) {
    throw new Error(`Course doesn't have lessons yet`)
  }

  redirect(`/courses/${course.slug}/lessons/${nextLesson.slug}`)
}

export default CoursePage
