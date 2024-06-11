'use client'

import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

import { UICourse } from '@/app/types'
import { ConfirmationDialog } from '@/components/confirmation-dialog'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { useDeleteCourseMutation } from '@/lib/features/api-slice'
import { EditIcon, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function CourseRow({ course }: { course: UICourse }) {
  const [deleteCourse] = useDeleteCourseMutation()

  const remove = async (course: UICourse) => {
    await deleteCourse(course.id!)
    toast.success('Course deleted')
  }

  return (
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
        {course.groups.reduce((acc, group) => acc + group.lessons.length, 0)}
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
  )
}
