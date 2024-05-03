import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } },
) => {
  const courses = await prisma.course.findUniqueOrThrow({
    where: {
      slug: params.slug,
    },
    include: {
      assets: {
        omit: {
          url: true,
        },
      },
      groups: {
        include: {
          lessons: true,
        },
      },
    },
  })
  return NextResponse.json(courses)
}
