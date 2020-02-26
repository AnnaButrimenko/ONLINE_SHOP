import {
  getCatalogFromDB,
  catalogRequested,
  catalogLoaded,
  catalogError,
} from './categories'
import * as t from './actionTypes'

describe('categories actions', () => {
  it('getCatalogFromDB()', () => {
    expect(getCatalogFromDB()).toEqual({
      type: t.SET_CATALOG_FROM_DB
    })
  })

  it('catalogRequested()', () => {
    expect(catalogRequested()).toEqual({
      type: t.FETCH_CATALOG_REQUEST
    })
  })

  it('catalogLoaded()', () => {
    const expectedAction = {
      type: t.FETCH_CATALOG_SUCCESS,
      payload: {
        catalog: {
          allCategories: [1, 2, 3],
          mainCategories: []
        },
        error: null
      }
    }
    expect(catalogLoaded([1, 2, 3])).toEqual(expectedAction)
  })

  it('catalogError()', () => {
    const errorMsg = 'Sorry, something going wrong'
    const expectedAction = {
      type: t.FETCH_CATALOG_FAILURE,
      payload: {
        error: errorMsg,
        catalog: {},
      }
    }
    expect(catalogError(errorMsg)).toEqual(expectedAction)
  })
})