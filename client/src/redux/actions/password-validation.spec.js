import {
  invalidPassword,
  validPassword
} from './password-validation'
import * as t from './actionTypes'

describe('password-validation actions', () => {
  it('invalidPassword()', () => {
    const expectedAction = {
      type: t.INVALID_PASSWORD_TRUE,
      payload: {
        invalid: true
      }
    }
    expect(invalidPassword()).toEqual(expectedAction)
  })

  it('validPassword()', () => {
    const expectedAction = {
      type: t.INVALID_PASSWORD_FALSE,
      payload: {
        invalid: false
      }
    }
    expect(validPassword()).toEqual(expectedAction)
  })
})