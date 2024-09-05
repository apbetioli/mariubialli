import { getCurrentUser } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { NextResponse } from 'next/server'

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getCurrentUser()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  const userToUpdate = await request.json()

  const updated = await prisma.user.update({
    data: {
      isAdmin: userToUpdate.isAdmin,
    },
    where: {
      id: params.id,
    },
  })

  return NextResponse.json(updated)
}

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getCurrentUser()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  const course = await prisma.user.delete({
    where: {
      id: params.id,
    },
  })
  return NextResponse.json(course)
}
