import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getUserByClerkId()

  if (!user.isAdmin) {
    return NextResponse.json(
      { message: 'Only admins can update courses' },
      { status: 403 },
    )
  }

  // TODO temporary fix
  const { id, assets, groups, ...data } = await request.json()

  const course = await prisma.course.update({
    data,
    where: {
      id: params.id,
    },
  })
  return NextResponse.json(course)
}
