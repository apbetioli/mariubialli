import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { toggleCompletedLesson } from './features/userSlice'
import { notFound } from 'next/navigation'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCourse = (id: string) => {
  const user = useAppSelector((state) => state.user.user)
  const coursesMap = useAppSelector((state) => state.courses.courses)
  const course = coursesMap[id]

  const completedLessonIds = course.lessonIds.filter((id) =>
    user.completedLessonIds.includes(id),
  )
  const progress = Math.round(
    (completedLessonIds.length / course.lessonIds.length) * 100,
  )

  const unwatchedLessonIds = course.lessonIds.filter(
    (id) => !user.completedLessonIds.includes(id),
  )

  const nextLessonId =
    unwatchedLessonIds.length === 0
      ? course.lessonIds[0]
      : unwatchedLessonIds[0]

  return { course, progress, nextLessonId }
}

export const useLesson = (courseId: string, id: string) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
  const coursesMap = useAppSelector((state) => state.courses.courses)
  const lessonsMap = useAppSelector((state) => state.courses.lessons)

  const course = coursesMap[courseId]
  const lesson = lessonsMap[id]

  const isCompleted = user.completedLessonIds.includes(lesson.id)

  const lessonIndex = course.lessonIds.findIndex((id) => id === lesson.id)
  const nextLessonId =
    lessonIndex < course.lessonIds.length - 1
      ? course.lessonIds[lessonIndex + 1]
      : null

  const markAsCompleted = (lessonId: string, checked: boolean) => {
    dispatch(
      toggleCompletedLesson({
        id: lessonId,
        completed: checked,
      }),
    )
  }

  return { lesson, isCompleted, nextLessonId, markAsCompleted }
}

export const useCourses = () => {
  const coursesMap = useAppSelector((state) => state.courses.courses)
  const courses = Object.values(coursesMap)
  return courses
}

export const useGroups = (courseId: string) => {
  const coursesMap = useAppSelector((state) => state.courses.courses)
  const course = coursesMap[courseId]
  const groupsMap = useAppSelector((state) => state.courses.groups)
  const groups = course.groupIds.map((id) => groupsMap[id])
  return groups
}

export const useLessons = (courseId: string) => {
  const coursesMap = useAppSelector((state) => state.courses.courses)
  const lessonsMap = useAppSelector((state) => state.courses.lessons)
  const course = coursesMap[courseId]
  const lessons = course.lessonIds.map((id) => lessonsMap[id])
  return lessons
}
