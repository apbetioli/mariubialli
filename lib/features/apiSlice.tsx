import { GetCourse } from '@/app/types'
import { User } from '@prisma/client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCourses: builder.query<GetCourse[], void>({
      query: () => 'courses',
    }),
    getCourseById: builder.query<GetCourse, string>({
      query: (id) => `course/${id}`,
    }),
    getUser: builder.query<User, void>({
      query: () => 'user',
    }),
  }),
})

export const { useGetCoursesQuery, useGetCourseByIdQuery } = apiSlice
