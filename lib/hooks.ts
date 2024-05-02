import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { toggleCompletedLesson } from './features/userSlice'
import type { AppDispatch, RootState } from './store'
import { findByIdOrSlug } from './utils'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCourse = (idOrSlug: string) =>
  useAppSelector((state) => findByIdOrSlug(state.courses.courses, idOrSlug))

export const useCourseDetails = (id: string) => {
  const user = useAppSelector((state) => state.user.user)
  const course = useCourse(id)

  const completedLessonIds = course.lessonIds.filter((lessonId) =>
    user.completedLessonIds.includes(lessonId),
  )
  const progress = Math.round(
    (completedLessonIds.length / course.lessonIds.length) * 100,
  )

  const unwatchedLessonIds = course.lessonIds.filter(
    (lessonId) => !user.completedLessonIds.includes(lessonId),
  )

  const nextLessonId =
    unwatchedLessonIds.length === 0
      ? course.lessonIds[0]
      : unwatchedLessonIds[0]

  const nextLesson = useLesson(nextLessonId)

  return { course, progress, nextLesson }
}

export const useLesson = (idOrSlug: string) =>
  useAppSelector((state) => findByIdOrSlug(state.courses.lessons, idOrSlug))

export const useLessonDetails = (courseId: string, id: string) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
  const course = useCourse(courseId)
  const lesson = useLesson(id)

  const isCompleted = user.completedLessonIds.includes(lesson.id)

  const lessonIndex = course.lessonIds.findIndex(
    (lessonId) => lessonId === lesson.id,
  )

  const isLastLesson = lessonIndex + 1 == course.lessonIds.length

  const nextLessonId = isLastLesson
    ? course.lessonIds[0]
    : course.lessonIds[lessonIndex + 1]

  const nextLesson = useLesson(nextLessonId)

  const markAsCompleted = (lessonId: string, checked: boolean) => {
    dispatch(
      toggleCompletedLesson({
        id: lessonId,
        completed: checked,
      }),
    )
  }

  return {
    lesson,
    isCompleted,
    nextLesson,
    isLastLesson,
    markAsCompleted,
  }
}

export const useCourses = () => {
  const coursesMap = useAppSelector((state) => state.courses.courses)
  const courses = Object.values(coursesMap)
  return courses
}

export const useGroupsOfCourse = (courseId: string) => {
  const course = useCourse(courseId)

  const groupsMap = useAppSelector((state) => state.courses.groups)
  const groups = course.groupIds.map((id) => groupsMap[id])
  return groups
}

export const useLessonsOfCourse = (courseId: string) => {
  const course = useCourse(courseId)

  const lessonsMap = useAppSelector((state) => state.courses.lessons)
  const lessons = course.lessonIds.map((id) => lessonsMap[id])
  return lessons
}
