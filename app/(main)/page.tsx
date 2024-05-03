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
import { useAppDispatch, useCourses } from '@/lib/hooks'
import { DownloadIcon, PlayIcon } from 'lucide-react'
import Link from 'next/link'
import LoadingPage from '../loading'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { apiSlice } from '@/lib/features/apiSlice'

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
    <div className="w-full container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 h-fit">
        {courses.map((course) => (
          <Card key={course.id} className="bg-primary-foreground shadow-md">
            <CardMedia src={course.image} alt={course.name} />
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="grow">
              <CardDescription>{course.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/course/${course.slug}`}
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto">
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
                  href={`/course/${course.slug}/assets`}
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full sm:w-auto">
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
