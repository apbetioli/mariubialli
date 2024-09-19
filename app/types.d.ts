import { Asset, Course, Group, Lesson, User } from '@prisma/client'

export type DraftUser = Partial<User> &
  Pick<User, 'completedLessonIds' | 'paidAssetIds'>

export type Draft<T> = Omit<T, 'id'> & {
  id?: string
  uiId?: string
  deleted?: boolean
  changed?: boolean
}

export type UIAsset = Omit<Draft<Asset>, 'url'> & {
  url?: string
}

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
