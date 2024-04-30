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
import { useAppSelector } from '@/lib/hooks'
import { Play } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const coursesMap = useAppSelector((state) => state.courses.courses)
  const courses = Object.values(coursesMap)

  //TODO calculate for each course
  const completion = 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-8 h-fit">
      {courses.map((course) => {
        return (
          <Card key={course.id} className="flex flex-col overflow-hidden">
            <CardMedia src={course.image} alt={course.name} />
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="grow"></CardContent>
            <CardFooter className="flex justify-between gap-4">
              <p className="text-primary font-semibold">
                {completion > 0 && <span>{completion}% completo</span>}
              </p>

              <Link href={`/course/${course.id}`}>
                <Button variant="outline">
                  <Play />
                  {completion > 0 ? 'Continuar' : 'Ver curso'}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
