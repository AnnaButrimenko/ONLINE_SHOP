import productsReducer, { initialState } from './products'
import * as t from '../actions/actionTypes'

describe('products reducer', () => {
  it('FETCH_PRODUCTS_REQUEST', () => {
    const action = {
      type: t.FETCH_PRODUCTS_REQUEST,
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      products: [],
      error: null,
      productsLoading: true,
    })
  })

  it('FETCH_PRODUCTS_SUCCESS', () => {
    const action = {
      type: t.FETCH_PRODUCTS_SUCCESS,
      payload: [1, 2, 3]
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      products: action.payload.products,
      productsLoading: false
    })
  })

  it('FETCH_PRODUCTS_FAILURE', () => {
    const action = {
      type: t.FETCH_PRODUCTS_FAILURE,
      payload: {
        error: 'ERROR'
      }
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      products: [],
      error: action.payload.error,
      productsLoading: false
    })
  })

  it('SORTING_PRODUCTS', () => {
    const action = {
      type: t.SORTING_PRODUCTS,
      payload: {
        sorting: [1, 2, 3],
        products: [5, 6, 3]
      }
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      sorting: action.payload.sorting,
      products: action.payload.products
    })
  })

  it('RESET_SORTING', () => {
    const action = {
      type: t.RESET_SORTING,
    }
    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      sorting: ''
    })
  })
})
