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
import { Progress } from '@/components/ui/progress'
import { useUser } from '@/lib/hooks'
import { calculateProgress } from '@/lib/utils'
import { DownloadIcon, PlayIcon } from 'lucide-react'
import Link from 'next/link'
import { UICourse } from '../types'

export default function CourseCard({ course }: { course: UICourse }) {
  const user = useUser()
  const progress = calculateProgress(user, course)

  return (
    <Card key={course.id} className="shadow-md">
      <CardMedia src={course.image} alt={course.name} />
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <CardDescription>{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col lg:flex-row gap-4">
        <Link href={`/courses/${course.slug}`} className="w-full lg:w-auto">
          <Button
            className="w-full lg:w-auto"
            variant={progress < 100 ? 'default' : 'outline'}
          >
            <PlayIcon />
            {progress === 0 && 'Assistir'}
            {progress > 0 && progress < 100 && 'Continuar assistindo'}
            {progress === 100 && 'Assistir novamente'}
          </Button>
        </Link>
        {course.assets.length > 0 && (
          <Link
            href={`/courses/${course.slug}/assets`}
            className="w-full lg:w-auto"
          >
            <Button variant="outline" className="w-full lg:w-auto">
              <DownloadIcon />
              Moldes
            </Button>
          </Link>
        )}
      </CardFooter>
      <Progress value={progress} className="h-2" />
    </Card>
  )
}
