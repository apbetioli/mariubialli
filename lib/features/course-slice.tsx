import { Draft, UICourse, UIGroup, UILesson } from '@/app/types'
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { kebabCase } from 'lodash'
import { apiSlice } from './api-slice'

type CourseSliceState = {
  value: Draft<UICourse>
}

type FormFieldAction = {
  name: string
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

export const createGroup = (group: UIGroup): UIGroup => {
  return {
    uiId: nanoid(),
    ...group,
  }
}

export const createLesson = (lesson: UILesson): UILesson => {
  return {
    uiId: nanoid(),
    ...lesson,
  }
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    initializeCourse: (state, action: PayloadAction<UICourse | undefined>) => {
      state.value = action.payload || initialState.value
    },
    updateCourseField: (state, action: PayloadAction<FormFieldAction>) => {
      state.value = {
        ...state.value,
        [action.payload.name]: action.payload.value,
      }

      if (action.payload.name === 'name' && !state.value.id) {
        state.value.slug = kebabCase(state.value.name)
      }
    },
    addGroup: (state, action: PayloadAction<string>) => {
      const exists = state.value.groups.find(
        (group) => group.name === action.payload,
      )
      if (exists) {
        throw new Error('Group with the same name already exists')
      }

      state.value.groups.push(
        createGroup({ name: action.payload, lessons: [] }),
      )
    },
    changeGroup: (state, action: PayloadAction<UIGroup>) => {
      const index = state.value.groups.findIndex(
        (group) => group.uiId === action.payload.uiId,
      )
      state.value.groups.splice(index, 1, action.payload)
    },
    addLessonToGroup: (
      state,
      action: PayloadAction<{ group: UIGroup; lesson: UILesson }>,
    ) => {
      const groupToAdd = state.value.groups.find(
        (group) => group.name === action.payload.group.name,
      )
      if (!groupToAdd) {
        throw new Error(`Group not found ${action.payload.group.name}`)
      }
      groupToAdd.lessons.push(createLesson(action.payload.lesson))
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
export const {
  initializeCourse,
  updateCourseField,
  addGroup,
  changeGroup,
  addLessonToGroup,
} = courseSlice.actions

export default courseSlice
