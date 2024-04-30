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
import { modules } from '@/lib/features/coursesSlice'
import { useAppSelector } from '@/lib/hooks'
import { Play } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const courses = useAppSelector((state) => state.courses.courses)
  const modules = useAppSelector((state) => state.courses.modules)
  const user = useAppSelector((state) => state.user.user)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-8 h-fit">
      {courses.map((course) => {
        const lessonIds = course.moduleIds
          .map(
            (moduleId) =>
              modules.find((module) => module.id === moduleId)?.lessonIds,
          )
          .flat()

        const completed = user.completedLessonIds.filter((lessionId) =>
          lessonIds.includes(lessionId),
        )
        const completion = lessonIds.length
          ? Math.round((completed.length / lessonIds.length) * 100)
          : 0

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
                <Button>
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
