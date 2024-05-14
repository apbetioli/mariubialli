import { UICourse } from '@/app/types'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
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
import Link from 'next/link'
import { CourseForm } from './course-form'

export default async function AdminCoursePage({
  params,
}: {
  params: { id: string }
}) {
  const course = await getCourse(params.id)

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/admin/courses">
                  <CardTitle>Courses</CardTitle>
                </Link>
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

async function getCourse(id: string) {
  if (id === 'new') return undefined

  return (await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      assets: true,
      groups: {
        include: {
          lessons: true,
        },
      },
    },
  })) as UICourse
}
