import { getUserByClerkId } from '@/lib/server/auth'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const user = await getUserByClerkId()
  return NextResponse.json(user)
}
