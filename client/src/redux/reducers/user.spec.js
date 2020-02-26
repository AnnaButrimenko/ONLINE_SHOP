import user, { initialState } from './user'
import * as t from '../actions/actionTypes'

describe('user reducer', () => {
  it('FETCH_LOGIN_SUCCESS', () => {
    const action = {
      type: t.FETCH_LOGIN_SUCCESS,
      payload: {
        token: 'asd'
      }
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
      ...action.payload
    })
  })

  it('FETCH_LOGIN_ERROR', () => {
    const action = {
      type: t.FETCH_LOGIN_ERROR
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
    })
  })

  it('FETCH_ORDERS_SUCCESS', () => {
    const action = {
      type: t.FETCH_ORDERS_SUCCESS,
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
      ...action.payload
    })
  })

  it('FETCH_CUSTOMER_DATA_SUCCESS', () => {
    const action = {
      type: t.FETCH_CUSTOMER_DATA_SUCCESS,
      payload: { test: '123' }
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
      customer: action.payload
    })
  })

  it('ENTER_REGISTRATION_PAGE', () => {
    const action = {
      type: t.ENTER_REGISTRATION_PAGE,
      payload: true
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
      registration: action.payload
    })
  })

  it('LEAVE_REGISTRATION_PAGE', () => {
    const action = {
      type: t.LEAVE_REGISTRATION_PAGE,
      payload: false
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
      registration: action.payload
    })
  })

  it('FETCH_CUSTOMER_DATA_FAILURE', () => {
    const action = {
      type: t.FETCH_CUSTOMER_DATA_FAILURE,
    }
    expect(user(initialState, action)).toEqual({
      ...initialState,
    })
  })
})