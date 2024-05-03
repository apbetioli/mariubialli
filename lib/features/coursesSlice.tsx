import { GetCourse } from '@/app/types'
import { createSlice } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'

type CoursesState = {
  entities: GetCourse[]
}

const initialState: CoursesState = {
  entities: [],
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getCourses.matchFulfilled,
      (state, action) => {
        state.entities = action.payload
      },
    )
    builder.addMatcher(
      apiSlice.endpoints.getCourseById.matchFulfilled,
      (state, action) => {
        const index = state.entities.findIndex(
          (course) => course.id === action.payload.id,
        )
        if (index < 0) state.entities.push(action.payload)
        else state.entities[index] = action.payload
      },
    )
  },
})

export const coursesReducer = coursesSlice.reducer

export default coursesSlice
