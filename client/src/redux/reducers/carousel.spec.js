import carouselReducer, { initialState } from './carousel'
import * as t from '../actions/actionTypes'

describe('carousel reducer', () => {
  it('FETCH_TOP_PRODUCTS_LIST_REQUEST', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_LIST_REQUEST
    }
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      productsListLoading: true,
    })
  })

  it('FETCH_TOP_PRODUCTS_LIST_SUCCESS', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_LIST_SUCCESS,
      payload: {
        productsList: {
          topSellers: [1, 2, 3]
        }
      }
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsListLoading: false,
      productsList: action.payload.productsList.topSellers,
    })
  })

  it('FETCH_TOP_PRODUCTS_LIST_FAILURE', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_LIST_FAILURE,
      payload: {
        error: 'Text'
      }
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      error: action.payload.error,
      productsListLoading: false
    })
  })

  it('FETCH_TOP_PRODUCTS_REQUEST', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_REQUEST,
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      productsListLoading: true,
    })
  })

  it('FETCH_TOP_PRODUCTS_SUCCESS', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_SUCCESS,
      payload: {
        products: [1, 2, 3]
      }
    }
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: action.payload.products,
      productsListLoading: false
    })
  })

  it('FETCH_TOP_PRODUCTS_FAILURE', () => {
    const action = {
      type: t.FETCH_TOP_PRODUCTS_FAILURE,
      payload: {
        errorTop: 'some text'
      }
    };
    expect(carouselReducer(initialState, action)).toEqual({
      ...initialState,
      productsList: [],
      errorTop: action.payload.error,
      productsListLoading: false
    })
  })
})