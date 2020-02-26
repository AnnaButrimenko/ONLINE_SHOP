import {
  newNotification,
  closeNotification,
} from './notification'
import * as t from './actionTypes'

describe('notification actions', () => {
  it('newNotification()', () => {
    const expectedAction = {
      type: t.OPEN_NEW_NOTIFICATION,
      payload: {
        type: '123',
        message: 'text',
        fading: 'true'
      }
    }
    expect(newNotification('123', 'text')).toEqual(expectedAction)
  })

  it('closeNotification()', () => {
    expect(closeNotification()).toEqual({
      type: t.ClOSE_NOTIFICATION
    })
  })
})