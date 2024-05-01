type Draft<T> = Omit<T, 'id'> & { id?: string }

type Lesson = {
  id: string
  name: string
  video: string
  groupId: string
}

type Group = {
  id: string
  name: string
}

type Attachment = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

type Course = {
  id: string
  name: string
  description: string
  image: string
  lessonIds: string[]
  groupIds: string[]
  attachment?: Attachment
}

type User = {
  id: string
  email: string
  name?: string
  completedLessonIds: string[]
  paidCourseIds: string[]
}
