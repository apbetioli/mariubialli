import { Course, Lesson, User } from '@prisma/client'
import { ClassValue, clsx } from 'clsx'

import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const findByIdOrSlug = (idOrSlug: string) => (entity: Course | Lesson) =>
  entity.id === idOrSlug || entity.slug === idOrSlug

export function toggleLessonCompleted(
  completedLessonIds: string[],
  lessonId: string,
  completed: boolean,
) {
  const filtered = completedLessonIds.filter((id: string) => id !== lessonId)
  if (completed) filtered.push(lessonId)
  return filtered
  /*
  const index = completedLessonIds.findIndex((id: string) => id === lessonId)
  if (index >= 0 && !completed) {
    completedLessonIds.splice(index, 1)
  }
  if (index < 0 && completed) {
    completedLessonIds.push(lessonId)
  }

  return completedLessonIds
  */
}
