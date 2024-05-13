import { UICourse } from '@/app/types'
import { Course, User } from '@prisma/client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toggleLessonCompleted } from '../utils'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Course', 'User'],
  endpoints: (builder) => ({
    getCourses: builder.query<UICourse[], void>({
      query: () => 'courses',
      providesTags: ['Course'],
    }),

    getCourseBySlug: builder.query<UICourse, string>({
      query: (slug) => `courses/${slug}`,
      providesTags: ['Course'],
    }),

    addCourse: builder.mutation<Course, Partial<UICourse>>({
      query: (course) => ({
        url: 'admin/courses',
        method: 'POST',
        body: course,
      }),
      invalidatesTags: ['Course'],
    }),

    updateCourse: builder.mutation<
      Course,
      Partial<UICourse> & Pick<UICourse, 'id'>
    >({
      query: (course) => ({
        url: `admin/courses/${course.id}`,
        method: 'PUT',
        body: course,
      }),
      invalidatesTags: ['Course'],
    }),

    getUser: builder.query<User, void>({
      query: () => 'user',
      providesTags: ['User'],
    }),

    toggleLessonCompleted: builder.mutation<
      User,
      { id: string; completed: boolean }
    >({
      query: ({ id, completed }) => ({
        url: `user/completed/${id}/`,
        method: 'PATCH',
        body: { completed },
      }),

      // Optimistic update
      async onQueryStarted({ id, completed }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getUser', undefined, (draftUser) => {
            draftUser.completedLessonIds = toggleLessonCompleted(
              draftUser.completedLessonIds,
              id,
              completed,
            )
          }),
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetCoursesQuery,
  useGetCourseBySlugQuery,
  useGetUserQuery,
  useToggleLessonCompletedMutation,
  useAddCourseMutation,
  useUpdateCourseMutation,
} = apiSlice
