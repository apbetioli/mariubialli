import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } },
) => {
  const courses = await prisma.course.findFirstOrThrow({
    where: {
      slug: params.slug,
    },
    include: {
      asset: true,
      groups: {
        include: {
          lessons: true,
        },
      },
    },
  })
  return NextResponse.json(courses)
}
