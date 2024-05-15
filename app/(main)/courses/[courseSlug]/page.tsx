import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { enhanceCourseWithUserDetails } from '@/lib/utils'
import { notFound, redirect } from 'next/navigation'

const CoursePage = async ({ params }: { params: { courseSlug: string } }) => {
  const course = await prisma.course.findUnique({
    where: {
      slug: params.courseSlug,
    },
    include: {
      assets: true,
      groups: {
        include: {
          lessons: true,
        },
      },
    },
  })

  if (!course) {
    notFound()
  }

  const user = await getUserByClerkId()

  const courseDetailed = enhanceCourseWithUserDetails(course, user)

  if (!courseDetailed.nextLesson) {
    throw new Error(`Course doesn't have lessons yet`)
  }

  redirect(
    `/courses/${courseDetailed.slug}/lessons/${courseDetailed.nextLesson.slug}`,
  )
}

export default CoursePage
