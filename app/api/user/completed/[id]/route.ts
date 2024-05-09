import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { toggleLessonCompleted } from '@/lib/utils'
import { EventType } from '@prisma/client'
import { NextResponse } from 'next/server'

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const user = await getUserByClerkId()
  const { completed } = await request.json()

  const completedLessonIds = toggleLessonCompleted(
    user.completedLessonIds,
    params.id,
    completed,
  )

  await Promise.all([
    prisma.user.update({
      data: {
        completedLessonIds,
      },
      where: {
        id: user.id,
      },
    }),
    prisma.event.create({
      data: {
        userId: user.id,
        type: EventType.WATCH,
        lessonId: params.id,
      },
    }),
  ])

  return NextResponse.json(completedLessonIds)
}
