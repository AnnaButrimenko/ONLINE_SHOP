import slides, { initialState } from './slides'
import * as t from '../actions/actionTypes'

describe('slides reducer', () => {
  it('GET_MAIN_SLIDES', () => {
    const action = {
      type: t.GET_MAIN_SLIDES,
      payload: [1, 2, 3]
    }
    expect(slides(initialState, action)).toEqual({
      ...initialState,
      mainSlides: action.payload
    })
  })
})
