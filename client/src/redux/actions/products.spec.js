import {
  productsRequested,
  productsLoaded,
  productsError,
  sortingProducts,
  sortingReset
} from './products'
import * as t from './actionTypes'

describe('products actions', () => {
  it('productsRequested()', () => {
    expect(productsRequested()).toEqual({
      type: t.FETCH_PRODUCTS_REQUEST
    })
  })

  it('productsLoaded()', () => {
    const expectedAction = {
      type: t.FETCH_PRODUCTS_SUCCESS,
      payload: [1, 2, 3]
    }
    expect(productsLoaded([1, 2, 3])).toEqual(expectedAction)
  })

  it('productsError()', () => {
    const expectedAction = {
      type: t.FETCH_PRODUCTS_FAILURE,
      payload: {
        products: [],
        error: 'text'
      }
    }
    expect(productsError('text')).toEqual(expectedAction)
  })

  it('sortingProducts()', () => {
    const expectedAction = {
      type: t.SORTING_PRODUCTS,
      payload: {
        products: [],
        sorting: 'text'
      }
    }
    expect(sortingProducts([], 'text')).toEqual(expectedAction)
  })

  it('sortingReset()', () => {
    expect(sortingReset()).toEqual({
      type: t.RESET_SORTING
    })
  })
})