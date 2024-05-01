'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CardMedia } from '@/components/ui/card-media'
import { useAppSelector, useCourse, useCourses } from '@/lib/hooks'
import { Play } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const courses = useCourses()

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-fit">
        {courses.map((course) => {
          return (
            <Link key={course.id} href={`/course/${course.id}`}>
              <CourseCard id={course.id} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function CourseCard({ id }: Pick<Course, 'id'>) {
  const { course, progress } = useCourse(id)

  return (
    <Card className="flex flex-col overflow-hidden hover:scale-[1.02] transition duration-100 h-full">
      <CardMedia src={course.image} alt={course.name} />
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <CardDescription>{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <p className="text-primary font-semibold">
          {progress > 0 && <span>{progress}% completo</span>}
        </p>
        <Button variant="outline">
          <Play />
          {progress === 0 && 'Ver curso'}
          {progress > 0 && progress < 100 && 'Continuar'}
          {progress === 100 && 'Assistir novamente'}
        </Button>
      </CardFooter>
    </Card>
  )
}
