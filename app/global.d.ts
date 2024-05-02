type Draft<T> = Omit<T, 'id' | 'slug'> & { id?: string; slug?: string }

type Lesson = {
  id: string
  name: string
  slug: string
  video: string
  groupId: string
}

type Group = {
  id: string
  name: string
}

type Asset = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

type Course = {
  id: string
  slug: string
  name: string
  description: string
  image: string
  lessonIds: string[]
  groupIds: string[]
  asset?: Asset
}

type User = {
  id: string
  email: string
  name?: string
  completedLessonIds: string[]
  paidAssetIds: string[]
}
