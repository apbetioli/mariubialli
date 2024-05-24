'use client'

import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

import { UICourse } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { ListCardSkeleton } from '@/components/list-card-skeleton'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  useDeleteCourseMutation,
  useGetAdminCoursesQuery,
} from '@/lib/features/api-slice'
import { EditIcon, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function CoursesList() {
  const { data: courses = [], isLoading } = useGetAdminCoursesQuery()
  const [deleteCourse] = useDeleteCourseMutation()

  if (isLoading) return <ListCardSkeleton />

  const remove = async (course: UICourse) => {
    await deleteCourse(course.id!)
    toast.success('Course deleted')
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Modules</TableHead>
            <TableHead className="hidden md:table-cell">Lessons</TableHead>
            <TableHead className="hidden md:table-cell">Assets</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Course image preview"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={course.image}
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">{course.name}</TableCell>
              <TableCell>
                <Badge variant={course.published ? 'default' : 'outline'}>
                  {course.published ? 'Published' : 'Draft'}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {course.groups.length}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {course.groups.reduce(
                  (acc, group) => acc + group.lessons.length,
                  0,
                )}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {course.assets.length}
              </TableCell>
              <TableCell className="text-right space-x-1">
                <Link href={`/admin/courses/${course.id}`}>
                  <Button size="sm" type="button" variant="secondary">
                    <EditIcon className="h-4 w-4" />
                  </Button>
                </Link>
                <ConfirmationDialog onConfirm={() => remove(course)}>
                  <Button size="sm" type="button" variant="secondary">
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </ConfirmationDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-2 text-xs text-muted-foreground">
        Showing <strong>{courses.length}</strong> courses
      </div>
    </div>
  )
}
