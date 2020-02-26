import {
  INVALID_PASSWORD_TRUE,
  INVALID_PASSWORD_FALSE
} from './actionTypes'

const invalidPassword = () => ({
  type: INVALID_PASSWORD_TRUE,
  payload: {
    invalid: true,
  }
});

const validPassword = () => ({
  type: INVALID_PASSWORD_FALSE,
  payload: {
    invalid: false,
  }
});

export {
  invalidPassword,
  validPassword
};
