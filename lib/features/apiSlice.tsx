import { GetCourse } from '@/app/types'
import { User } from '@prisma/client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toggleLessonCompleted } from '../utils'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Course', 'User'],
  endpoints: (builder) => ({
    getCourses: builder.query<GetCourse[], void>({
      query: () => 'courses',
      providesTags: ['Course'],
    }),

    getCourseById: builder.query<GetCourse, string>({
      query: (id) => `course/${id}`,
      providesTags: ['Course'],
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
        url: `lesson/${id}/completed`,
        method: 'PATCH',
        body: { completed },
      }),
      invalidatesTags: ['User'],

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
        } catch (e) {
          console.error(e)
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetUserQuery,
  useToggleLessonCompletedMutation,
} = apiSlice
