import { UIAsset, UICourse } from '@/app/types'
import { prisma } from './db'

export const findAssets = async (): Promise<UIAsset[]> => {
  const assets = await prisma.asset.findMany({
    omit: {
      url: true,
    },
    where: {
      Course: {
        published: true,
      },
    },
    orderBy: {
      name: 'asc',
    },
  })

  return assets
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

export const findCourseById = async (id: string) => {
  return await prisma.course.findUnique({
    where: {
      id,
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
