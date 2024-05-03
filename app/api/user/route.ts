import { getUserByClerkId } from '@/lib/server/auth'
import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const authUser = await currentUser()
  if (!authUser) {
    return NextResponse.json({
      completedLessonIds: [],
      paidAssetIds: [],
    })
  }

  const user = await getUserByClerkId()
  return NextResponse.json(user)
}
