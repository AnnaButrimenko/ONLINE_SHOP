import notification, { initialState } from './notification'
import * as t from '../actions/actionTypes'

describe('notification reducer', () => {
  it('OPEN_NEW_NOTIFICATION', () => {
    const action = {
      type: t.OPEN_NEW_NOTIFICATION,
      payload: {
        message: 'text',
      }
    }
    expect(notification(initialState, action)).toEqual({
      ...initialState,
      type: action.payload.type,
      message: action.payload.message,
      fading: action.payload.fading ?? true,
      open: true
    })
  })

  it('ClOSE_NOTIFICATION', () => {
    const action = {
      type: t.ClOSE_NOTIFICATION
    };
    expect(notification(initialState, action)).toEqual({
      ...initialState,
      open: false
    })
  })
})