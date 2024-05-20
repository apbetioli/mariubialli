import { UIAsset, UICourse, UIGroup, UILesson } from '@/app/types'
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { kebabCase } from 'lodash'
import { apiSlice } from './api-slice'

type State = {
  course: UICourse
}

type FormFieldAction = {
  name: string
  value: string | number | boolean
}

const initialState: State = {
  course: {
    name: '',
    slug: '',
    description: '',
    image: '',
    published: false,
    groups: [],
    assets: [],
  },
}

export const createAsset = (asset: UIAsset): UIAsset => {
  return {
    uiId: nanoid(),
    ...asset,
  }
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

const findGroup = (state: State, group: UIGroup) => {
  const found = state.course.groups.find((_group) => _group.uiId === group.uiId)
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

const adminSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    initializeCourse: (state, action: PayloadAction<UICourse | undefined>) => {
      state.course = action.payload || initialState.course
    },

    updateCourseField: (state, action: PayloadAction<FormFieldAction>) => {
      state.course = {
        ...state.course,
        [action.payload.name]: action.payload.value,
      }

      if (action.payload.name === 'name' && !state.course.id) {
        state.course.slug = kebabCase(state.course.name)
      }
    },

    addGroup: (state, action: PayloadAction<string>) => {
      const exists = state.course.groups.find(
        (group) => group.name === action.payload,
      )
      if (exists) {
        throw new Error('Group with the same name already exists')
      }

      state.course.groups.push(
        createGroup({
          name: action.payload,
          lessons: [],
          order: state.course.groups.length,
        }),
      )
    },

    updateGroup: (state, action: PayloadAction<UIGroup>) => {
      const index = state.course.groups.findIndex(
        (group) => group.uiId === action.payload.uiId,
      )
      state.course.groups.splice(index, 1, action.payload)
    },

    deleteGroup: (state, action: PayloadAction<UIGroup>) => {
      const index = state.course.groups.findIndex(
        (group) => group.uiId === action.payload.uiId,
      )
      if (action.payload.id) {
        state.course.groups.splice(index, 1, {
          ...action.payload,
          deleted: true,
        })
      } else {
        state.course.groups.splice(index, 1)
      }
    },

    addAsset: (state, action: PayloadAction<UIAsset>) => {
      state.course.assets.push(createAsset(action.payload))
    },

    updateAsset: (state, action: PayloadAction<UIAsset>) => {
      const index = state.course.assets.findIndex(
        (asset) => asset.uiId === action.payload.uiId,
      )
      state.course.assets.splice(index, 1, action.payload)
    },

    deleteAsset: (state, action: PayloadAction<UIAsset>) => {
      const index = state.course.assets.findIndex(
        (asset) => asset.uiId === action.payload.uiId,
      )
      if (action.payload.id) {
        state.course.assets.splice(index, 1, {
          ...action.payload,
          deleted: true,
        })
      } else {
        state.course.assets.splice(index, 1)
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
        state.course = payload
        state.course.groups.forEach((group) => {
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
        state.course = initialState.course
      },
    )
  },
})

export const adminReducer = adminSlice.reducer
export const {
  initializeCourse,
  updateCourseField,
  addGroup,
  updateGroup,
  deleteGroup,
  addAsset,
  updateAsset,
  deleteAsset,
  addLesson,
  updateLesson,
  deleteLesson,
  moveLessonUp,
  moveLessonDown,
} = adminSlice.actions

export default adminSlice
