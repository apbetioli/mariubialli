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
import { apiSlice } from '@/lib/features/api-slice'
import { useAppDispatch, useCourses } from '@/lib/hooks'
import { useAuth } from '@clerk/nextjs'
import { DownloadIcon, PlayIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import LoadingPage from '../loading'

export default function HomePage() {
  const { courses, isLoading, isError, error } = useCourses()

  const dispatch = useAppDispatch()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (!isSignedIn) {
      // On logout clear the user data
      dispatch(
        apiSlice.util.updateQueryData('getUser', undefined, (draft) => {
          Object.assign(draft, {
            completedLessonIds: [],
            paidAssetIds: [],
          })
        }),
      )
    }
  }, [isSignedIn, dispatch])

  if (isLoading) return <LoadingPage />
  if (isError) throw error

  return (
    <div className="w-full md:container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 h-fit">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-md">
            <CardMedia src={course.image} alt={course.name} />
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              <CardDescription>{course.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col lg:flex-row gap-4">
              <Link
                href={`/courses/${course.slug}`}
                className="w-full lg:w-auto"
              >
                <Button
                  className="w-full lg:w-auto"
                  variant={course.progress < 100 ? 'default' : 'outline'}
                >
                  <PlayIcon />
                  {course.progress === 0 && 'Assistir'}
                  {course.progress > 0 &&
                    course.progress < 100 &&
                    'Continuar assistindo'}
                  {course.progress === 100 && 'Assistir novamente'}
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
            <Progress value={course.progress} className="h-2" />
          </Card>
        ))}
      </div>
    </div>
  )
}
