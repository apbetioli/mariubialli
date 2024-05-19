import { Course, Group, Lesson } from '@prisma/client'

export type DraftUser = Partial<User> &
  Pick<User, 'completedLessonIds' | 'paidAssetIds'>

export type Draft<T> = Omit<T, 'id'> & { id?: string; uiId?: string }

export type UIAsset = Omit<Draft<Asset>, 'url'>

export type UILesson = Omit<Draft<Lesson>, 'groupId'>

export type UIGroup = Omit<Draft<Group>, 'courseId'> & {
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
