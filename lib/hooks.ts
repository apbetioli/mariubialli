import { DraftUser } from '@/app/types'
import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  useGetCourseBySlugQuery,
  useGetCoursesQuery,
  useGetUserQuery,
  useToggleLessonCompletedMutation,
} from './features/apiSlice'
import type { AppDispatch, RootState } from './store'
import { enhanceCourseWithUserDetails } from './utils'

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
    () => data.map((course) => enhanceCourseWithUserDetails(course, user)),
    [data, user],
  )
  return { courses, ...query }
}

export const useCourse = (slug: string) => {
  const user = useUser()
  const { data, ...query } = useGetCourseBySlugQuery(slug)
  const course = useMemo(
    () => data && enhanceCourseWithUserDetails(data, user),
    [data, user],
  )
  return { course, ...query }
}

export const useMarkAsCompleted = () => {
  const [toggleCompleted] = useToggleLessonCompletedMutation()

  return (id: string, completed: boolean) => {
    return toggleCompleted({ id, completed })
  }
}
