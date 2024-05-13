import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const user = await getUserByClerkId()

  // TODO protect with middleware?
  if (!user.isAdmin) {
    return NextResponse.json(
      { message: 'Only admins can create courses' },
      { status: 403 },
    )
  }

  const data = await request.json()
  const course = await prisma.course.create({
    data,
  })
  return NextResponse.json(course)
}
