import sendSortingProducts from './sorting'
import * as t from './actionTypes'

describe('sorting actions', () => {
  it('sendSortingProducts()', () => {
    const expectedAction = {
      type: t.SORT_CARDS,
      payload: {
        sortedProducts: '123',
        type: 'text'
      }
    }
    expect(sendSortingProducts('123', 'text')).toEqual(expectedAction)
  })
})