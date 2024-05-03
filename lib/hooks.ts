import { CourseWithUserDetails, DraftUser, GetCourse } from '@/app/types'
import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  useGetCourseBySlugQuery,
  useGetCoursesQuery,
  useGetUserQuery,
  useToggleLessonCompletedMutation,
} from './features/apiSlice'
import type { AppDispatch, RootState } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useUser = () => {
  const {
    data = {
      completedLessonIds: [],
      paidAssetIds: [],
    } as DraftUser,
  } = useGetUserQuery()
  return data
}

export const useCourses = () => {
  const user = useUser()
  const { data = [], ...query } = useGetCoursesQuery()
  const courses = useMemo(
    () => data.map((course) => addUserDetails(course, user)),
    [data, user],
  )
  return { courses, ...query }
}

export const useCourse = (slug: string) => {
  const user = useUser()
  const { data, ...query } = useGetCourseBySlugQuery(slug)
  const course = useMemo(() => data && addUserDetails(data, user), [data, user])
  return { course, ...query }
}

function addUserDetails(
  course: GetCourse,
  user: DraftUser,
): CourseWithUserDetails {
  const lessons = course.groups.map((group) => group.lessons).flat() || []

  const completedLessons = lessons.filter((lesson) =>
    user.completedLessonIds.includes(lesson.id),
  )

  const progress = Math.round((completedLessons.length / lessons.length) * 100)

  const nextLesson =
    lessons.find((lesson) => !user.completedLessonIds.includes(lesson.id)) ||
    lessons[0]

  return {
    ...course,
    progress,
    nextLesson,
  }
}

export const useMarkAsCompleted = () => {
  const [toggleCompleted] = useToggleLessonCompletedMutation()

  return (id: string, completed: boolean) => {
    return toggleCompleted({ id, completed })
  }
}
