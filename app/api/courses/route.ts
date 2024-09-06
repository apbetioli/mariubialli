import { usePublishedCourses } from '@/lib/queries/usePublishedCourses'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const courses = await usePublishedCourses()
  return NextResponse.json(courses)
}
