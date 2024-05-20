import { UICourse } from '@/app/types'
import { prisma } from './db'

export const findPublishedCourses = async (): Promise<UICourse[]> => {
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

export const findCourseBySlug = async (slug: string) => {
  return await prisma.course.findUnique({
    where: {
      slug,
    },
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
  })
}
