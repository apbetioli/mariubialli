import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './features/coursesSlice'
import { playerReducer } from './features/playerSlice'
import { userReducer } from './features/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      courses: coursesReducer,
      player: playerReducer,
      user: userReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
