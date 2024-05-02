import { ClassValue, clsx } from 'clsx'

import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function findByIdOrSlug<T extends { id: string; slug: string }>(
  map: Record<string, T>,
  idOrSlug: string,
): T {
  let value = map[idOrSlug]
  if (value) return value
  const valueBySlug = Object.values<T>(map).find((v) => v.slug === idOrSlug)
  if (valueBySlug) return valueBySlug
  throw new Error('Not found!')
}
