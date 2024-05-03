import { Course, Lesson, Prisma } from '@prisma/client'

export type DraftUser = Partial<User> &
  Pick<User, 'completedLessonIds' | 'paidAssetIds'>

export type UICourse = Prisma.CourseGetPayload<{
  include: {
    assets: {
      omit: {
        url: true
      }
    }
    groups: {
      include: {
        lessons: true
      }
    }
  }
}>

export type CourseWithUserDetails = UICourse & {
  progress: number
  nextLesson: Lesson
}

export type UIAsset = Omit<Asset, 'url'>
