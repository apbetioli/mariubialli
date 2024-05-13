import { UICourse } from '@/app/types'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { prisma } from '@/lib/server/db'
import { notFound } from 'next/navigation'
import { CourseForm } from './course-form'

export default async function AdminCoursePage({
  params,
}: {
  params: { id: string }
}) {
  const course =
    params.id === 'new'
      ? {
          id: '',
          name: '',
          slug: '',
          description: '',
          image: '',
          published: false,
          groups: [],
          assets: [],
          createdAt: null,
          updatedAt: null,
        }
      : await prisma.course.findUnique({
          where: {
            id: params.id,
          },
        })

  if (!course) {
    notFound()
  }

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/courses">
                  <CardTitle>Courses</CardTitle>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <CardTitle>{params.id === 'new' ? 'New' : 'Edit'}</CardTitle>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <CardDescription>
            Configure your course with modules and lessons.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Separator />
          <CourseForm course={course} />
        </CardContent>
      </Card>
    </div>
  )
}
