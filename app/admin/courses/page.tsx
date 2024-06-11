import { PlusIcon } from 'lucide-react'

import { ListCardSkeleton } from '@/components/list-card-skeleton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Suspense } from 'react'
import CoursesList from './courses-list'

export default async function AdminCourses() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-8">
      <Card>
        <CardHeader>
          <div className="flex items-center">
            <CardTitle>Courses</CardTitle>
            <div className="ml-auto flex items-center gap-2">
              <Link href="/admin/courses/new">
                <Button className="h-8 gap-1">
                  <PlusIcon className="h-5 w-5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Course
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<ListCardSkeleton />}>
            <CoursesList />
          </Suspense>
        </CardContent>
      </Card>
    </main>
  )
}
