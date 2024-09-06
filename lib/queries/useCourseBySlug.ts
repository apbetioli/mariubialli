import { prisma } from '../server/db'

export const useCourseBySlug = async (slug: string) => {
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
