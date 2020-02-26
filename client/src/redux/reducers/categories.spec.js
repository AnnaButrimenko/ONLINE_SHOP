import categoriesReducer, { initialState } from './categories'
import * as t from '../actions/actionTypes'

describe('categories reducer', () => {
  it('FETCH_CATALOG_REQUEST', () => {
    const action = {
      type: t.FETCH_CATALOG_REQUEST,
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      catalog: {},
      catalogLoading: true
    })
  })

  it('FETCH_CATALOG_SUCCESS', () => {
    const action = {
      type: t.FETCH_CATALOG_SUCCESS,
      payload: {
        catalog: {
          allCategories: [1, 2, 3],
          mainCategories: []
        }
      }
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      catalogLoading: false,
      catalog: action.payload.catalog
    })
  })

  it('FETCH_CATALOG_FAILURE', () => {
    const action = {
      type: t.FETCH_CATALOG_FAILURE,
      catalog: {},
      payload: {
        error: '500 server error'
      },
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload.error,
      catalog: {},
      catalogLoading: false
    })
  })

  it('CATALOG_LOCATION', () => {
    const action = {
      type: t.CATALOG_LOCATION,
      payload: {
        catalogLocation: '123',
      }
    }
    expect(categoriesReducer(initialState, action)).toEqual({
      ...initialState,
      catalogLocation: action.payload
    })
  })
})