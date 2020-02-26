import getCurrentProduct from './current-product'
import * as t from './actionTypes'

describe('current product actions', () => {
  it('getCurrentProduct()', () => {
    const expectedAction = {
      type: t.CURRENT_PRODUCT,
      payload: {
        currentProduct: '123'
      }
    }
    expect(getCurrentProduct('123')).toEqual(expectedAction)
  })
})