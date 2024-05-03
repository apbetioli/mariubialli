import { Course, Lesson, Prisma } from '@prisma/client'

export type DraftUser = Partial<User> &
  Pick<User, 'completedLessonIds' | 'paidAssetIds'>

export type GetCourse = Prisma.CourseGetPayload<{
  include: {
    asset: true
    groups: {
      include: {
        lessons: true
      }
    }
  }
}>

export type CourseWithUserDetails = GetCourse & {
  progress: number
  nextLesson: Lesson
}
