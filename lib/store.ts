import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './features/coursesSlice'
import { userReducer } from './features/userSlice'
import { apiSlice } from './features/apiSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      courses: coursesReducer,
      user: userReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
