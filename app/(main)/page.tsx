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
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-fit">
        {courses.map((course) => {
          return (
            <Link key={course.id} href={`/course/${course.id}`}>
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
                    {completion > 0 && <span>{completion}% completo</span>}
                  </p>
                  <Button variant="outline">
                    <Play />
                    {completion > 0 ? 'Continuar' : 'Ver curso'}
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
