import {
  getFilterProducts,
  filterParamsLoaded,
  filterType,
  resetFilters
} from './filter'
import * as t from './actionTypes'

describe('filter actions', () => {
  it('getFilterProducts()', () => {
    const expectedAction = {
      type: t.GET_FILTER_PRODUCTS,
      payload: { a: 1, b: 2 }
    }
    expect(getFilterProducts({ a: 1, b: 2 })).toEqual(expectedAction)
  })

  it('filterParamsLoaded()', () => {
    const expectedAction = {
      type: t.FETCH_FILTER_PARAMS_SUCCESS,
      payload: {
        filterTitle: '123',
        params: [1, 2, 3]
      }
    }
    expect(filterParamsLoaded('123', [1, 2, 3])).toEqual(expectedAction)
  })

  it('filterType()', () => {
    const expectedAction = {
      type: t.FILTER_TYPE,
      payload: '123'
    }
    expect(filterType('123')).toEqual(expectedAction)
  })

  it('resetFilters()', () => {
    expect(resetFilters()).toEqual({
      type: t.RESET_FILTERS
    })
  })
})