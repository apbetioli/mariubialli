import { UICourse } from '@/app/types'
import { prisma } from '../server/db'

export const usePublishedCourses = async (): Promise<UICourse[]> => {
  const courses = await prisma.course.findMany({
    include: {
      assets: {
        omit: {
          url: true,
        },
      },
      groups: {
        include: {
          lessons: {
            orderBy: {
              order: 'asc',
            },
          },
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
    where: {
      published: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })

  return courses
}
