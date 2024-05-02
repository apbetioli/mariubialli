import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const courses = await prisma.course.findMany({
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
