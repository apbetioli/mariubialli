import { Course, Lesson } from '@prisma/client'
import { ClassValue, clsx } from 'clsx'

import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const findByIdOrSlug = (idOrSlug: string) => (entity: Course | Lesson) =>
  entity.id === idOrSlug || entity.slug === idOrSlug
