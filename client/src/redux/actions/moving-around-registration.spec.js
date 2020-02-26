import {
  enterRegistrationPage,
  leaveRegistrationPage
} from './moving-around-registration'
import * as t from './actionTypes'

describe('moving-around-sign-up actions', () => {
  it('enterRegistrationPage()', () => {
    const expectedAction = {
      type: t.ENTER_REGISTRATION_PAGE,
      payload: true
    }
    expect(enterRegistrationPage()).toEqual(expectedAction)
  })

  it('leaveRegistrationPage()', () => {
    const expectedAction = {
      type: t.LEAVE_REGISTRATION_PAGE,
      payload: false
    }
    expect(leaveRegistrationPage()).toEqual(expectedAction)
  })
})