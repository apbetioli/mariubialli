import { configureStore } from '@reduxjs/toolkit'
import { adminReducer } from './features/admin-slice'
import { apiSlice } from './features/api-slice'
import { cartReducer } from './features/cart-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      admin: adminReducer,
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
