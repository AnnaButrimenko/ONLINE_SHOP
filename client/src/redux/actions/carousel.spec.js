import {
  topProductListRequested,
  topProductListLoaded,
  topProductsListError,
  topProductRequested,
  topProductLoaded,
  topProductsError
} from './carousel'
import * as t from './actionTypes'

describe('carousel actions', () => {
  it('topProductListRequested()', () => {
    expect(topProductListRequested()).toEqual({
      type: t.FETCH_TOP_PRODUCTS_LIST_REQUEST
    })
  })

  it('topProductListLoaded()', () => {
    const expectedAction = {
      type: t.FETCH_TOP_PRODUCTS_LIST_SUCCESS,
      payload: {
        productsList: [1, 2, 3]
      }
    }
    expect(topProductListLoaded([1, 2, 3])).toEqual(expectedAction)
  })

  it('topProductsListError()', () => {
    const errorMsg = 'Sorry, something going wrong'
    const expectedAction = {
      type: t.FETCH_TOP_PRODUCTS_LIST_FAILURE,
      payload: {
        error: errorMsg,
        products: [],
      }
    }
    expect(topProductsListError(errorMsg)).toEqual(expectedAction)
  })

  it('topProductRequested()', () => {
    expect(topProductRequested()).toEqual({
      type: t.FETCH_TOP_PRODUCTS_REQUEST
    })
  })

  it('topProductLoaded()', () => {
    const expectedAction = {
      type: t.FETCH_TOP_PRODUCTS_SUCCESS,
      payload: {
        topProducts: [1, 2, 3]
      }
    }
    expect(topProductLoaded([1, 2, 3])).toEqual(expectedAction)
  })

  it('topProductsError()', () => {
    const errorMsg = 'Sorry, something going wrong'
    const expectedAction = {
      type: t.FETCH_TOP_PRODUCTS_FAILURE,
      payload: {
        error: errorMsg,
        products: [],
      }
    }
    expect(topProductsError(errorMsg)).toEqual(expectedAction)
  })
})