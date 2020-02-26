import filterReducer, { initialState } from './filter'
import * as t from '../actions/actionTypes'

describe('filter reducer', () => {
  it('GET_FILTER_PRODUCTS', () => {
    const action = {
      type: t.GET_FILTER_PRODUCTS,
      payload: {
        filterResults: {}
      }
    }
    expect(filterReducer(initialState, action)).toEqual({
      ...initialState,
      filterResults: action.payload
    })
  })

  it('FETCH_FILTER_PARAMS_SUCCESS', () => {
    const action = {
      type: t.FETCH_FILTER_PARAMS_SUCCESS,
      payload: {
        filterParams: {
          filterTitle: ['text']
        }
      }
    };
    expect(filterReducer(initialState, action)).toEqual({
      ...initialState,
      filterParams: {
        ...initialState.filterParams,
        [action.payload.filterTitle]: action.payload.params
      }
    })
  })

  it('FILTER_TYPE', () => {
    const action = {
      type: t.FILTER_TYPE,
      payload: {
        filterType: {}
      }
    }
    expect(filterReducer(initialState, action)).toEqual({
      ...initialState,
      filterType: action.payload
    })
  })

  it('RESET_FILTERS', () => {
    const action = {
      type: t.RESET_FILTERS,
    };
    expect(filterReducer(initialState, action)).toEqual({
      ...initialState,
    })
  })
})