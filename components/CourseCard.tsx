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
import { useCourse } from '@/lib/hooks'
import { Play } from 'lucide-react'

export function CourseCard({ id }: Pick<Course, 'id'>) {
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
