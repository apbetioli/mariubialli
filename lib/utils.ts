import { DraftUser, UICourse, UILesson } from '@/app/types'
import { ClassValue, clsx } from 'clsx'

import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toggleLessonCompleted(
  completedLessonIds: string[],
  lessonId: string,
  completed: boolean,
) {
  const index = completedLessonIds.findIndex((id: string) => id === lessonId)
  if (index >= 0 && !completed) {
    completedLessonIds.splice(index, 1)
  }
  if (index < 0 && completed) {
    completedLessonIds.push(lessonId)
  }
  return completedLessonIds
}

export const hasUserCompletedLesson =
  (user: DraftUser) =>
  (lesson: UILesson): boolean =>
    user.completedLessonIds.includes(lesson.id)

export function calculateCourseProgress(user: DraftUser, course: UICourse) {
  const lessons = course.groups.map((group) => group.lessons).flat() || []

  const completedLessons = lessons.filter(hasUserCompletedLesson(user))

  return Math.round((completedLessons.length / lessons.length) * 100)
}

export function getNextLesson(user: DraftUser, course: UICourse) {
  const lessons = course.groups.map((group) => group.lessons).flat() || []

  return (
    lessons.find((lesson) => !hasUserCompletedLesson(user)(lesson)) ||
    lessons[0]
  )
}

export function getDate30DaysAgo(today = new Date()) {
  const pastDate = new Date(today)
  pastDate.setDate(today.getDate() - 30)
  return pastDate
}

export function getDate12MonthsAgo() {
  const today = new Date()
  const pastDate = new Date(today)
  pastDate.setDate(1)
  pastDate.setFullYear(today.getFullYear() - 1)
  return pastDate
}
