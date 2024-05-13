import { Course, Group, Lesson, Prisma } from '@prisma/client'

export type DraftUser = Partial<User> &
  Pick<User, 'completedLessonIds' | 'paidAssetIds'>

export type UIAsset = Omit<Asset, 'url'>

export type UILesson = Omit<Lesson, 'groupId'>

export type UIGroup = Omit<Group, 'courseId'> & {
  lessons: UILesson[]
}

export type UICourse = Omit<Course, 'createdAt' | 'updatedAt'> & {
  assets: UIAsset[]
  groups: UIGroup[]
}

export type CourseWithUserDetails = UICourse & {
  progress: number
  nextLesson: UILesson
}

export type CheckoutRequest = {
  assetId: string
  redirect: string
}
