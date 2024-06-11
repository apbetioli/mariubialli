import { getCurrentUser } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getCurrentUser()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  if (params.id === 'new') {
    return NextResponse.json({
      name: '',
      slug: '',
      description: '',
      image: '',
      published: false,
      groups: [],
      assets: [],
    })
  }

  const course = await prisma.course.findUnique({
    where: {
      id: params.id,
    },
    include: {
      assets: true,
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
  if (!course) notFound()
  return NextResponse.json(course)
}

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getCurrentUser()
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  const course = await prisma.course.delete({
    where: {
      id: params.id,
    },
  })
  return NextResponse.json(course)
}
