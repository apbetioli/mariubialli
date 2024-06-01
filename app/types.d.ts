import { Course, Group, Lesson } from '@prisma/client'

export type DraftUser = Partial<User> &
  Pick<User, 'completedLessonIds' | 'paidAssetIds'>

export type Draft<T> = Omit<T, 'id'> & {
  id?: string
  uiId?: string
  deleted?: boolean
  changed?: boolean
}

export type UIAsset = Omit<Draft<Asset>, 'courseId'>

export type UILesson = Omit<Draft<Lesson>, 'groupId'>

export type UIGroup = Omit<Draft<Group>, 'courseId'> & {
  lessons: UILesson[]
}

export type UICourse = Omit<Draft<Course>, 'createdAt' | 'updatedAt'> & {
  assets: UIAsset[]
  groups: UIGroup[]
}

export type CheckoutRequest = {
  assetId: string
  redirect: string
}
