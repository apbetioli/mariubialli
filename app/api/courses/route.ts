import { courses } from '@/lib/features/coursesSlice'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  return NextResponse.json(courses)
}
