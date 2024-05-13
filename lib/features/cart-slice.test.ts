import { UIAsset } from '@/app/types'
import { describe, expect, it } from 'vitest'
import { addToCart, cartReducer } from './cart-slice'

describe('cartSlice', () => {
  const initialState = {
    list: [],
  }

  it(`should add an asset to the cart when ${addToCart.toString()} is dispatched`, () => {
    const asset = {
      name: 'Moldes - Enfeite de porta e Árvore de parede',
      description:
        'Nessa apostila eu vou te ensinar a confeccionar um lindo enfeite de porta e uma árvore de parede para o natal.',
      image:
        'https://mariubialli.s3.amazonaws.com/Imagens/asset-enfeite-porta-arvore-parede.jpg',
      price: 1.99,
    }
    const action = addToCart(asset)
    const newState = cartReducer(initialState, action)
    expect(newState.list).toEqual([
      {
        name: 'Moldes - Enfeite de porta e Árvore de parede',
        description:
          'Nessa apostila eu vou te ensinar a confeccionar um lindo enfeite de porta e uma árvore de parede para o natal.',
        image:
          'https://mariubialli.s3.amazonaws.com/Imagens/asset-enfeite-porta-arvore-parede.jpg',
        price: 1.99,
      },
    ])
  })
})
