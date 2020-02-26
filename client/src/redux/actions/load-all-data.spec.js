import { fetchRequest, fetchResponse } from './load-all-data'
import * as t from './actionTypes'

describe('load-all-data actions', () => {
  it('fetchRequest()', () => {
    expect(fetchRequest()).toEqual({
      type: t.FETCH_LOAD_REQUEST
    })
  })

  it('fetchResponse()', () => {
    expect(fetchResponse()).toEqual({
      type: t.FETCH_LOAD_RESPONSE
    })
  })
})