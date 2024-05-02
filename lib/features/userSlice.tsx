import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

export const createUser = (draft: Draft<User>): User => {
  return { ...draft, id: draft.id || nanoid() }
}

type UserState = {
  user: User
}

const initialState: UserState = {
  user: createUser({
    name: 'Alexandre',
    email: 'apbetioli@gmail.com',
    completedLessonIds: [],
    paidAttachmentIds: [],
  }),
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
    buyAttachment: (state, action: PayloadAction<Attachment>) => {
      state.user.paidAttachmentIds.push(action.payload.id)
    },
  },
})

export const userReducer = userSlice.reducer
export const { toggleCompletedLesson, buyAttachment } = userSlice.actions

export default userSlice
