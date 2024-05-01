import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './features/coursesSlice'
import { userReducer } from './features/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      courses: coursesReducer,
      user: userReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
