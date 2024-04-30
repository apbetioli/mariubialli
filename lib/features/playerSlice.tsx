import { createSlice } from '@reduxjs/toolkit'

type PlayerState = {
  currentCourseId?: string
}

const initialState: PlayerState = {}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
})

export const playerReducer = playerSlice.reducer

export default playerSlice
