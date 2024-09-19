import { findPublishedCourses } from '@/lib/server/queries'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const courses = await findPublishedCourses()
  return NextResponse.json(courses)
}
