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
import { useCourseDetails } from '@/lib/hooks'
import { Download, Play } from 'lucide-react'
import Link from 'next/link'
import { Progress } from './ui/progress'

export function CourseCard({ id }: Pick<Course, 'id'>) {
  const { course, progress, nextLesson } = useCourseDetails(id)

  return (
    <Card>
      <CardMedia src={course.image} alt={course.name} />
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <CardDescription>{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4">
        <Link
          href={`/course/${course.slug}/lesson/${nextLesson.slug}`}
          className="w-full sm:w-auto"
        >
          <Button className="w-full sm:w-auto">
            <Play />
            {progress > 0 && progress < 100
              ? 'Continuar assistindo'
              : 'Assistir'}
          </Button>
        </Link>
        {course.attachment && (
          <Link
            href={`/course/${course.slug}/attachment`}
            className="w-full sm:w-auto"
          >
            <Button variant="outline" className="w-full sm:w-auto">
              <Download />
              Moldes
            </Button>
          </Link>
        )}
      </CardFooter>
      <Progress value={progress} className="h-1" />
    </Card>
  )
}
