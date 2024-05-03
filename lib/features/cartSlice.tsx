import { Asset } from '@prisma/client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartSlice = {
  list: Asset[]
}

const initialState: CartSlice = {
  list: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Asset>) => {
      state.list.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<Asset>) => {
      state.list = state.list.filter((asset) => asset.id !== action.payload.id)
    },
    clearCart: (state, action) => {
      state.list = []
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice
