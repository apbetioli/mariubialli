type Draft<T> = Omit<T, 'id'> & { id?: string }

type Attachment = {
  id: string
  name: string
  url: string
  price: number
}

type Lesson = {
  id: string
  name: string
  video: string
}

type Group = {
  id: string
  name: string
  lessonIds: string[]
}

type Course = {
  id: string
  name: string
  description: string
  image: string
  groupIds: string[]
  attachments?: Attachment[]
}

type User = {
  id: string
  email: string
  name?: string
  completedLessonIds: string[]
  paidCourseIds: string[]
}
