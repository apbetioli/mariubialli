import { createSlice } from '@reduxjs/toolkit'

type CartSlice = {}

const initialState: CartSlice = {}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export const cartReducer = cartSlice.reducer
export const {} = cartSlice.actions

export default cartSlice
