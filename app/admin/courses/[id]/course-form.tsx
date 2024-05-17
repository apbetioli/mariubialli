'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useSaveCourseMutation } from '@/lib/features/api-slice'
import { updateCourseField } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

import {
  EyeIcon,
  Loader2Icon,
  LockIcon,
  RocketIcon,
  SaveIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { CourseFormAssets } from './course-form-assets'
import { CourseFormDetails } from './course-form-details'
import { CourseFormGroups } from './course-form-groups'

export function CourseForm() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const course = useAppSelector((state) => state.course.value)
  const [saveCourse, { isLoading }] = useSaveCourseMutation()

  const save = async () => {
    // TODO validate

    try {
      const result = await saveCourse(course).unwrap()

      if (!course.id) {
        router.push(`/admin/courses/${result.id}`)
      }
      toast.success('Saved!')
    } catch (error) {
      console.error(error)
      toast.error('Could not save!')
    }
  }

  const remove = () => {
    router.push('/admin/courses')
    toast.success('Course removed')
  }

  return (
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
                <CardTitle>{course.id ? 'Edit' : 'New'}</CardTitle>
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

        <div className="space-y-8">
          <Tabs defaultValue="details">
            <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="lessons" disabled={!course?.id}>
                  Lessons
                </TabsTrigger>
                <TabsTrigger value="assets" disabled={!course?.id}>
                  Assets
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-3 justify-center sm:justify-end w-full">
                <Button
                  size="sm"
                  variant={course.published ? 'outline' : 'default'}
                  onClick={() =>
                    dispatch(
                      updateCourseField({
                        name: 'published',
                        value: !course.published,
                      }),
                    )
                  }
                >
                  {course.published ? (
                    <LockIcon className="h-4 w-4" />
                  ) : (
                    <RocketIcon className="h-4 w-4" />
                  )}
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    {course.published ? 'Unpublish' : 'Publish'}
                  </span>
                </Button>

                {course.id && (
                  <Link href={`/courses/${course.slug}`} target="_blank">
                    <Button size="sm" variant="outline">
                      <EyeIcon className="h-4 w-4" />

                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Preview
                      </span>
                    </Button>
                  </Link>
                )}

                <Button size="sm" disabled={isLoading} onClick={() => save()}>
                  {isLoading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <SaveIcon className="h-4 w-4" />
                  )}
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Save
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="details">
              <CourseFormDetails />
            </TabsContent>
            <TabsContent value="lessons">
              <CourseFormGroups />
            </TabsContent>
            <TabsContent value="assets">
              <CourseFormAssets />
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
