import { createSlice, nanoid } from '@reduxjs/toolkit'

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
    completedCourseIds: [],
    paidCourseIds: [],
  }),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const userReducer = userSlice.reducer

export default userSlice
