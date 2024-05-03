import { getUserByClerkId } from '@/lib/server/auth'
import { prisma } from '@/lib/server/db'
import { toggleLessonCompleted } from '@/lib/utils'
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

  const updated = await prisma.user.update({
    data: {
      completedLessonIds,
    },
    where: {
      id: user.id,
    },
  })

  return NextResponse.json(updated.completedLessonIds)
}
