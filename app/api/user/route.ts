import { getCurrentUser } from '@/lib/server/auth'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const clerkUser = await currentUser()
  if (!clerkUser) {
    return NextResponse.json({
      completedLessonIds: [],
      paidAssetIds: [],
    })
  }

  const user = await getCurrentUser()
  return NextResponse.json(user)
}
