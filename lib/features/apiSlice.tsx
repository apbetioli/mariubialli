import { GetCourse } from '@/app/types'
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
  }),
})

export const { useGetCoursesQuery, useGetCourseByIdQuery } = apiSlice
