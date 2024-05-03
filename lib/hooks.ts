import { CourseWithUserDetails, DraftUser, GetCourse } from '@/app/types'
import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useGetCourseByIdQuery, useGetCoursesQuery } from './features/apiSlice'
import { toggleCompletedLesson } from './features/userSlice'
import type { AppDispatch, RootState } from './store'
import { findByIdOrSlug } from './utils'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useUser = () => useAppSelector((state) => state.user.user)

export const useCourses = () => {
  const user = useUser()
  const stateCourses = useAppSelector((state) => state.courses.entities)
  const query = useGetCoursesQuery()
  const { data = stateCourses } = query
  const courses = useMemo(
    () => data.map((course) => addUserDetails(course, user)),
    [data, user],
  )
  return { courses, ...query }
}

export const useCourse = (idOrSlug: string) => {
  const user = useUser()
  const stateCourses = useAppSelector((state) => state.courses.entities)
  const rawCourse = stateCourses.find(findByIdOrSlug(idOrSlug))
  const query = useGetCourseByIdQuery(idOrSlug)
  const { data = rawCourse } = query
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
