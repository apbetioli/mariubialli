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
import { Play } from 'lucide-react'
import Link from 'next/link'
import { Progress } from './ui/progress'

export function CourseCard({ id }: Pick<Course, 'id'>) {
  const { course, progress, nextLesson } = useCourseDetails(id)

  return (
    <Card className="flex flex-col overflow-hidden hover:shadow-md">
      <CardMedia src={course.image} alt={course.name} />
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <CardDescription>{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Link key={course.id} href={`/course/${course.slug}`}>
          <Button variant={'outline'}>Ver curso</Button>
        </Link>
        {progress > 0 && progress < 100 && (
          <Link
            key={course.id}
            href={`/course/${course.slug}/lesson/${nextLesson.slug}`}
          >
            <Button variant={progress > 0 ? 'default' : 'outline'}>
              <Play />
              Continuar assistindo
            </Button>
          </Link>
        )}
      </CardFooter>
      <Progress value={progress} className="h-1" />
    </Card>
  )
}
