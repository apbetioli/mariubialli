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
import {
  useGetAdminCourseByIdQuery,
  useSaveCourseMutation,
} from '@/lib/features/api-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

import LoadingPage from '@/app/loading'
import { UICourse } from '@/app/types'
import { updateCourseField } from '@/lib/features/admin-slice'
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

export default function CourseFormPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const course = useAppSelector((state) => state.admin.course)
  const { isLoading } = useGetAdminCourseByIdQuery(params.id)
  const [saveCourse, { isLoading: isSaving }] = useSaveCourseMutation()

  if (isLoading) return <LoadingPage className="h-screen" />

  const save = async (draft: UICourse) => {
    try {
      const result = await toast.promise(saveCourse(draft).unwrap(), {
        loading: 'Saving...',
        success: 'Saved!',
        error: 'Failed to save.',
      })

      if (!course.id) {
        // is new
        dispatch(updateCourseField({ name: 'id', value: result.id }))
        router.replace(`/admin/courses/${result.id}`)
      }
    } catch (error) {
      console.error(error)
      toast.error('Could not save!')
    }
  }

  const onSave = async () => {
    // TODO validate
    save(course)
  }

  const onPublish = async () => {
    save({
      ...course,
      published: true,
    })
  }

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
                  <TabsTrigger value="lessons">Lessons</TabsTrigger>
                  <TabsTrigger value="assets">Assets</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-3 justify-center sm:justify-end w-full">
                  <Button
                    size="sm"
                    variant={course.published ? 'outline' : 'default'}
                    onClick={onPublish}
                    disabled={isSaving}
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

                  <Button size="sm" disabled={isSaving} onClick={onSave}>
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
    </div>
  )
}
