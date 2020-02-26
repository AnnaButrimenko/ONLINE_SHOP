import loadDataReducer, { initialState } from './load-data'
import * as t from '../actions/actionTypes'

describe('load-data reducer', () => {
  it('FETCH_LOAD_REQUEST', () => {
    const action = {
      type: t.FETCH_LOAD_REQUEST,
    }
    expect(loadDataReducer(initialState, action)).toEqual({
      isFetching: true
    })
  })

  it('FETCH_LOAD_RESPONSE', () => {
    const action = {
      type: t.FETCH_LOAD_RESPONSE,
    }
    expect(loadDataReducer(initialState, action)).toEqual({
      isFetching: false
    })
  })
})