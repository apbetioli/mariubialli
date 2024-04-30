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
    paidCourseIds: [],
  }),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleCompletedLesson: (state, action: PayloadAction<Lesson['id']>) => {
      const index = state.user.completedLessonIds.findIndex(
        (id) => id === action.payload,
      )
      if (index >= 0) {
        state.user.completedLessonIds.splice(index, 1)
      } else {
        state.user.completedLessonIds.push(action.payload)
      }
    },
  },
})

export const userReducer = userSlice.reducer
export const { toggleCompletedLesson } = userSlice.actions

export default userSlice
