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
