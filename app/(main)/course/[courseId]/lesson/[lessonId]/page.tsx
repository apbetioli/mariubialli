'use client'

import NotFound from '@/app/not-found'
import { Sidebar } from '@/components/Sidebar'
import Video from '@/components/Video'
import { useAppSelector } from '@/lib/hooks'
import { useParams } from 'next/navigation'

const LessonPage = () => {
  const { courseId } = useParams()
  const { lessonId } = useParams()

  const coursesMap = useAppSelector((state) => state.courses.courses)
  const lessonsMap = useAppSelector((state) => state.courses.lessons)

  const course = coursesMap[String(courseId)]
  const lesson = lessonsMap[String(lessonId)]

  if (!course || !lesson) {
    return (
      <div className="flex min-h-full w-full">
        <NotFound />
      </div>
    )
  }

  return (
    <div className="flex h-[calc(100vh-6rem)] w-full">
      <Sidebar
        course={course}
        activeLesson={lesson}
        className="hidden sm:flex flex-col w-96 border-r"
      />
      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-screen-lg">
          <Video src={lesson.video} />
          <p className="text-sm font-semibold py-2 px-4 bg-black text-white">
            {lesson.name}
          </p>
        </div>
        <Sidebar
          course={course}
          activeLesson={lesson}
          className="flex sm:hidden flex-col w-full"
        />
      </div>
    </div>
  )
}

export default LessonPage
