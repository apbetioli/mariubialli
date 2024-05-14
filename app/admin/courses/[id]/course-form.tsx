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
  useAddCourseMutation,
  useUpdateCourseMutation,
} from '@/lib/features/api-slice'
import { handleFieldChange } from '@/lib/features/course-slice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

import { Checkbox } from '@/components/ui/checkbox'
import { Loader2Icon, SaveIcon } from 'lucide-react'
import Link from 'next/link'
import { FormEvent, useId } from 'react'
import toast from 'react-hot-toast'
import { CourseFormDetails } from './course-form-details'
import { CourseFormGroup } from './course-form-group'

export function CourseForm() {
  const [addCourse, resultAdd] = useAddCourseMutation()
  const [updateCourse, resultUpdate] = useUpdateCourseMutation()

  const course = useAppSelector((state) => state.course.value)
  const dispatch = useAppDispatch()

  const publishedId = useId()

  const save = async () => {
    if (course.id) {
      await updateCourse({ ...course, id: course.id })
    } else {
      await addCourse(course)
    }
    toast.success('Saved!')
  }

  const isSaving = resultAdd.isLoading || resultUpdate.isLoading

  const onSubmit = (event: FormEvent) => {
    console.log('onSubmit')

    event.preventDefault()
    event.stopPropagation()
    save()
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

        <form onSubmit={onSubmit} className="space-y-8">
          <Tabs defaultValue="details">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="lessons" disabled={!course?.id}>
                  Lessons
                </TabsTrigger>
                <TabsTrigger value="assets" disabled={!course?.id}>
                  Assets
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-3 justify-end w-full">
                <div className="flex items-center gap-1">
                  <Checkbox
                    id={publishedId}
                    checked={course.published}
                    onCheckedChange={(value) =>
                      dispatch(handleFieldChange({ field: 'published', value }))
                    }
                  />
                  <label htmlFor={publishedId}>Published</label>
                </div>

                <Button type="submit" size="sm" disabled={isSaving}>
                  {isSaving ? (
                    <Loader2Icon className="animate-spin" />
                  ) : (
                    <SaveIcon className="h-4 w-4" />
                  )}
                  Save
                </Button>
              </div>
            </div>
            <TabsContent value="details">
              <CourseFormDetails />
            </TabsContent>
            <TabsContent value="lessons">
              {course && <CourseFormGroup />}
            </TabsContent>
            <TabsContent value="assets">TODO</TabsContent>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  )
}
