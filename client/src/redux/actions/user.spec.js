import {
  loginLoaded,
  fetchCustomerData,
  orders
} from './user'
import * as t from './actionTypes'

describe('user actions', () => {
  it('loginLoaded()', () => {
    expect(loginLoaded()).toEqual({
      type: t.FETCH_LOGIN_ERROR
    })
  })

  it('fetchCustomerData()', () => {
    expect(fetchCustomerData()).toEqual({
      type: t.SET_CUSTOMER_DATA_FROM_DB
    })
  })

  it('orders()', () => {
    const expectedAction = {
      type: t.FETCH_ORDERS_SUCCESS,
      payload: {
        orders: [1, 2, 3]
      }
    }
    expect(orders([1, 2, 3])).toEqual(expectedAction)
  })
})