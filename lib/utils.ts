import { CourseWithUserDetails, DraftUser, UICourse } from '@/app/types'
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

export function enhanceCourseWithUserDetails(
  course: UICourse,
  user: DraftUser,
): CourseWithUserDetails {
  const lessons = course.groups.map((group) => group.lessons).flat() || []

  const completedLessons = lessons.filter((lesson) =>
    user.completedLessonIds.includes(lesson.id),
  )

  const progress = Math.round((completedLessons.length / lessons.length) * 100)

  const nextLesson =
    lessons.find((lesson) => !user.completedLessonIds.includes(lesson.id)) ||
    lessons[0]

  return {
    ...course,
    progress,
    nextLesson,
  }
}
