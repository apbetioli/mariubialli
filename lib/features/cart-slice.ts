import { UIAsset } from '@/app/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  assets: UIAsset[]
}

const initialState = (): State => {
  const saved = localStorage.getItem('cart')
  if (saved) {
    return JSON.parse(saved)
  }
  return {
    assets: [],
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<UIAsset>) => {
      if (!state.assets.find((asset) => asset.id === action.payload.id)) {
        state.assets.push(action.payload)
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },
    removeFromCart: (state, action: PayloadAction<String>) => {
      state.assets = state.assets.filter((asset) => asset.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice
