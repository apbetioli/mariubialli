'use client'

import LoadingPage from '@/app/loading'
import { useGetAdminCourseByIdQuery } from '@/lib/features/api-slice'
import { CourseForm } from './course-form'

export default function AdminCoursePage({
  params,
}: {
  params: { id: string }
}) {
  const { isLoading } = useGetAdminCourseByIdQuery(params.id)

  if (isLoading) {
    return (
      <div className="h-screen">
        <LoadingPage />
      </div>
    )
  }

  return (
    <div className="p-4 md:p-8">
      <CourseForm />
    </div>
  )
}
