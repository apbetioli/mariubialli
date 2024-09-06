import { useCourseBySlug } from '@/lib/queries/useCourseBySlug'
import { notFound } from 'next/navigation'
import { NextResponse } from 'next/server'

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } },
) => {
  const course = await useCourseBySlug(params.slug)
  if (!course) notFound()
  return NextResponse.json(course)
}
