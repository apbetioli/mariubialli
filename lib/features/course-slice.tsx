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

const findGroup = (state: CourseSliceState, group: UIGroup) => {
  const found = state.value.groups.find((_group) => _group.uiId === group.uiId)
  if (!found) {
    throw new Error(`Group not found ${group.name}`)
  }
  return found
}

const findLessonIndex = (groupToUpdate: UIGroup, lesson: UILesson) => {
  const index = groupToUpdate.lessons.findIndex(
    (_lesson) => _lesson.uiId === lesson.uiId,
  )
  if (index < 0) {
    throw new Error(`Lesson not found ${lesson.name}`)
  }
  return index
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
        createGroup({
          name: action.payload,
          lessons: [],
          order: state.value.groups.length,
        }),
      )
    },
    updateGroup: (state, action: PayloadAction<UIGroup>) => {
      const index = state.value.groups.findIndex(
        (group) => group.uiId === action.payload.uiId,
      )
      state.value.groups.splice(index, 1, action.payload)
    },
    deleteGroup: (state, action: PayloadAction<UIGroup>) => {
      const index = state.value.groups.findIndex(
        (group) => group.uiId === action.payload.uiId,
      )
      if (action.payload.id) {
        state.value.groups.splice(index, 1, {
          ...action.payload,
          deleted: true,
        })
      } else {
        state.value.groups.splice(index, 1)
      }
    },
    addLesson: (
      state,
      action: PayloadAction<{ group: UIGroup; lesson: UILesson }>,
    ) => {
      const groupToAdd = findGroup(state, action.payload.group)

      groupToAdd.lessons.push(
        createLesson({
          ...action.payload.lesson,
          order: groupToAdd.lessons.length,
        }),
      )
    },
    updateLesson: (
      state,
      action: PayloadAction<{ group: UIGroup; lesson: UILesson }>,
    ) => {
      const groupToUpdate = findGroup(state, action.payload.group)

      const index = findLessonIndex(groupToUpdate, action.payload.lesson)

      groupToUpdate.lessons.splice(index, 1, action.payload.lesson)
    },
    deleteLesson: (
      state,
      action: PayloadAction<{ group: UIGroup; lesson: UILesson }>,
    ) => {
      const groupToUpdate = findGroup(state, action.payload.group)

      const index = findLessonIndex(groupToUpdate, action.payload.lesson)

      if (action.payload.lesson.id) {
        groupToUpdate.lessons.splice(index, 1, {
          ...action.payload.lesson,
          deleted: true,
        })
      } else {
        groupToUpdate.lessons.splice(index, 1)
      }
    },
    moveLessonUp: (
      state,
      action: PayloadAction<{
        group: UIGroup
        lesson: UILesson
      }>,
    ) => {
      const groupToUpdate = findGroup(state, action.payload.group)

      const index = findLessonIndex(groupToUpdate, action.payload.lesson)

      if (index === 0) return

      const aux = groupToUpdate.lessons[index]
      groupToUpdate.lessons[index] = groupToUpdate.lessons[index - 1]
      groupToUpdate.lessons[index - 1] = aux

      groupToUpdate.lessons[index].order = index
      groupToUpdate.lessons[index - 1].order = index - 1
    },
    moveLessonDown: (
      state,
      action: PayloadAction<{
        group: UIGroup
        lesson: UILesson
      }>,
    ) => {
      const groupToUpdate = findGroup(state, action.payload.group)

      const index = findLessonIndex(groupToUpdate, action.payload.lesson)

      if (index + 1 === groupToUpdate.lessons.length) return

      const aux = groupToUpdate.lessons[index]
      groupToUpdate.lessons[index] = groupToUpdate.lessons[index + 1]
      groupToUpdate.lessons[index + 1] = aux

      groupToUpdate.lessons[index].order = index
      groupToUpdate.lessons[index + 1].order = index + 1
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getAdminCourseById.matchFulfilled,
      (state, { payload }) => {
        state.value = payload
        state.value.groups.forEach((group) => {
          group.uiId = group.id
          group.lessons.forEach((lesson, index) => {
            lesson.uiId = lesson.id
            lesson.order |= index
          })
        })
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
  updateGroup,
  deleteGroup,
  addLesson,
  updateLesson,
  deleteLesson,
  moveLessonUp,
  moveLessonDown,
} = courseSlice.actions

export default courseSlice
