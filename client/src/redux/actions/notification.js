import {
  OPEN_NEW_NOTIFICATION,
  ClOSE_NOTIFICATION
} from './actionTypes'

export function newNotification (type, message, fading = 'true') {
  return {
    type: OPEN_NEW_NOTIFICATION,
    payload: {
      type,
      message,
      fading
    }
  }
}
export function closeNotification () {
  return {
    type: ClOSE_NOTIFICATION,
  }
}