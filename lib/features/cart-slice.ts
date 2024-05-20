import { UIAsset } from '@/app/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type State = {
  list: UIAsset[]
}

const initialState: State = {
  list: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<UIAsset>) => {
      state.list.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<UIAsset>) => {
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
