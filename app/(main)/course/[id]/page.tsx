'use client'

import Video from '@/components/Video'
import { useAppSelector } from '@/lib/hooks'
import { useParams } from 'next/navigation'

const CoursePage = () => {
  const { id } = useParams()

  const course = useAppSelector((state) =>
    state.courses.courses.find((course) => id === course.id),
  )

  return (
    <div className="flex min-h-full w-full">
      <aside className="hidden sm:flex flex-col w-60 border-r">
        {course?.name}
      </aside>
      <main className="flex w-full justify-center">
        <div className="w-full max-w-screen-md">
          <Video src="https://www.youtube.com/embed/0edsaUPs-OE" />
        </div>
      </main>
    </div>
  )
}

export default CoursePage
