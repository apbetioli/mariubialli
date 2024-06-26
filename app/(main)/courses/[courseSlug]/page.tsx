import { getCurrentUser } from '@/lib/server/auth'
import { findCourseBySlug } from '@/lib/server/queries'
import { getNextLesson } from '@/lib/utils'
import { notFound, redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const CoursePage = async ({ params }: { params: { courseSlug: string } }) => {
  const course = await findCourseBySlug(params.courseSlug)

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
