import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
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

  return NextResponse.json(courses)
}
