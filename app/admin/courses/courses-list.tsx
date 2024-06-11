import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { prisma } from '@/lib/server/db'
import CourseRow from './course-row'

export default async function CoursesList() {
  const courses = await prisma.course.findMany({
    include: {
      assets: true,
      groups: {
        include: {
          lessons: {
            orderBy: {
              order: 'asc',
            },
          },
        },
        orderBy: {
          order: 'asc',
        },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })

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
            <CourseRow key={course.id} course={course} />
          ))}
        </TableBody>
      </Table>
      <div className="mt-2 text-xs text-muted-foreground">
        Showing <strong>{courses.length}</strong> courses
      </div>
    </div>
  )
}
