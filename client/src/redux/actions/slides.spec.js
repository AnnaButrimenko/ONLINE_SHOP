import slidesToFetch from './slides'
import * as t from './actionTypes'

describe('slides actions', () => {
  it('slidesToFetch()', () => {
    const expectedAction = {
      type: t.GET_MAIN_SLIDES,
      payload: [1, 2, 3]
    }
    expect(slidesToFetch([1, 2, 3])).toEqual(expectedAction)
  })
})