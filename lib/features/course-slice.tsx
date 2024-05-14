import { Draft, UICourse } from '@/app/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { kebabCase } from 'lodash'
import { apiSlice } from './api-slice'

type CourseSliceState = {
  value: Draft<UICourse>
}

type FormFieldAction = {
  field: string
  value: string | number | boolean
}

const initialState: CourseSliceState = {
  value: {
    id: undefined,
    name: '',
    slug: '',
    description: '',
    image: '',
    published: false,
    groups: [],
    assets: [],
  },
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    initializeCourse: (state, action: PayloadAction<UICourse | undefined>) => {
      state.value = action.payload || initialState.value
    },
    handleFieldChange: (state, action: PayloadAction<FormFieldAction>) => {
      state.value = {
        ...state.value,
        [action.payload.field]: action.payload.value,
      }

      if (action.payload.field === 'name' && !state.value.id) {
        state.value.slug = kebabCase(state.value.name)
      }
    },
    addGroup: (state, action: PayloadAction<string>) => {
      state.value.groups.push({
        name: action.payload,
        lessons: [],
      })
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getAdminCourseById.matchFulfilled,
      (state, { payload }) => {
        state.value = payload
      },
    )
    builder.addMatcher(
      apiSlice.endpoints.getAdminCourseById.matchRejected,
      (state) => {
        state.value = initialState.value
      },
    )
  },
})

export const courseReducer = courseSlice.reducer
export const { initializeCourse, handleFieldChange, addGroup } =
  courseSlice.actions

export default courseSlice
