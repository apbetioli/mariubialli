'use client'

import LoadingPage from '@/app/loading'
import { useGetAdminCourseByIdQuery } from '@/lib/features/api-slice'
import { initializeCourse } from '@/lib/features/course-slice'
import { useAppDispatch } from '@/lib/hooks'
import { useEffect } from 'react'
import { CourseForm } from './course-form'

export default function AdminCoursePage({
  params,
}: {
  params: { id: string }
}) {
  const { data, isLoading } = useGetAdminCourseByIdQuery(params.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeCourse(data))
  }, [data, dispatch])

  if (isLoading) return <LoadingPage className="h-screen" />

  return (
    <div className="p-4 md:p-8">
      <CourseForm />
    </div>
  )
}
