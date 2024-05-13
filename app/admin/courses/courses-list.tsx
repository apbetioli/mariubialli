'use client'

import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

import { UICourse } from '@/app/types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useRouter } from 'next/navigation'

export default function CoursesList({ courses }: { courses: UICourse[] }) {
  const router = useRouter()

  return (
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow
            key={course.id}
            onClick={() => router.push(`/admin/courses/${course.id}`)}
            className="hover:cursor-pointer"
          >
            <TableCell className="hidden sm:table-cell">
              <Image
                alt="Product image"
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
