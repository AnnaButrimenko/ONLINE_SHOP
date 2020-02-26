import cart, { initialState } from './cart'
import * as t from '../actions/actionTypes'

describe('cart reducer', () => {
  it('ADD_PRODUCT_SUCCESS', () => {
    const action = {
      type: t.ADD_PRODUCT_SUCCESS,
      payload: { test: [1, 2, 3] }
    }
    expect(cart(initialState, action)).toEqual({
      ...initialState,
      newCart: action.payload.newCart
    })
  });

  it('REMOVE_PRODUCT_SUCCESS', () => {
    const action = {
      type: t.REMOVE_PRODUCT_SUCCESS,
      payload: { a: 1 }
    }
    expect(cart(initialState, action)).toEqual({
      ...initialState,
      newCart: action.payload.newCart
    })
  });

  it('UPDATE_CART_SUCCESS', () => {
    const action = {
      type: t.UPDATE_CART_SUCCESS,
      payload: {}
    }
    expect(cart(initialState, action)).toEqual({
      ...initialState,
      newCart: action.payload.newCart
    })
  });

  it('CLEAR_CART', () => {
    const action = {
      type: t.CLEAR_CART,
      products: [],
      totalCartQuantity: 5,
      totalCartPrice: 5
    }
    expect(cart(initialState, action)).toEqual({
      ...initialState,
      products: [],
      totalCartQuantity: 0,
      totalCartPrice: 0
    })
  })
})