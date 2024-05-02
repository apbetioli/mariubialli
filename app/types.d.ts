import { Course, Prisma } from '@prisma/client'

export type GetCourse = Prisma.CourseGetPayload<{
  include: {
    asset: true
    groups: {
      include: {
        lessons: true
      }
    }
  }
}>
