import { GetCourse } from '@/app/types'
import { Course, Lesson } from '@prisma/client'
import { notFound } from 'next/navigation'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { toggleCompletedLesson } from './features/userSlice'
import type { AppDispatch, RootState } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useUser = () => useAppSelector((state) => state.user.user)

const findByIdOrSlug = (idOrSlug: string) => (entity: Course | Lesson) =>
  entity.id === idOrSlug || entity.slug === idOrSlug

export const useCourse = (idOrSlug: string) =>
  useAppSelector((state) =>
    state.courses.entities.find(findByIdOrSlug(idOrSlug)),
  )

export const useCourseDetails = (id: string) => {
  const user = useUser()
  const course = useCourse(id)

  const lessons = course?.groups.map((group) => group.lessons).flat() || []
  const completedLessons = lessons.filter((lesson) =>
    user.completedLessonIds.includes(lesson.id),
  )

  const progress =
    lessons.length === 0
      ? 0
      : Math.round((completedLessons.length / lessons.length) * 100)

  const nextLesson =
    lessons.length === 0
      ? null
      : lessons.find(
          (lesson) => !user.completedLessonIds.includes(lesson.id),
        ) || lessons[0]

  return { course, progress, nextLesson }
}

export const useLessonDetails = (course: GetCourse, idOrSlug: string) => {
  const user = useUser()
  const lessons = course.groups.map((group) => group.lessons).flat()
  const lessonIndex = lessons.findIndex(findByIdOrSlug(idOrSlug))
  const lesson = lessons[lessonIndex]

  const isCompleted = user.completedLessonIds.includes(lesson?.id)
  const isLastLesson = lessonIndex + 1 == lessons.length
  const nextLesson = isLastLesson ? lessons[0] : lessons[lessonIndex + 1]

  return {
    lesson,
    isCompleted,
    nextLesson,
    isLastLesson,
  }
}

export const useMarkAsCompleted = () => {
  const dispatch = useAppDispatch()
  return (lessonId: string, checked: boolean) => {
    dispatch(
      toggleCompletedLesson({
        id: lessonId,
        completed: checked,
      }),
    )
  }
}

export const useCourses = () =>
  useAppSelector((state) => state.courses.entities)
