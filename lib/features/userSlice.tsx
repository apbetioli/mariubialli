import { Asset, Lesson, User } from '@prisma/client'
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

type UserState = {
  user: Partial<User> & Pick<User, 'completedLessonIds' | 'paidAssetIds'>
}

const initialState: UserState = {
  user: {
    completedLessonIds: [],
    paidAssetIds: [],
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleCompletedLesson: (
      state,
      action: PayloadAction<{ id: Lesson['id']; completed: boolean }>,
    ) => {
      const index = state.user.completedLessonIds.findIndex(
        (id) => id === action.payload.id,
      )
      if (index >= 0 && !action.payload.completed) {
        state.user.completedLessonIds.splice(index, 1)
      }
      if (index < 0 && action.payload.completed) {
        state.user.completedLessonIds.push(action.payload.id)
      }
    },
    buyAsset: (state, action: PayloadAction<Asset>) => {
      state.user.paidAssetIds.push(action.payload.id)
    },
  },
})

export const userReducer = userSlice.reducer
export const { toggleCompletedLesson, buyAsset } = userSlice.actions

export default userSlice
