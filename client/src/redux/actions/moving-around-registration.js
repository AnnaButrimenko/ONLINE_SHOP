import {
  ENTER_REGISTRATION_PAGE,
  LEAVE_REGISTRATION_PAGE
} from './actionTypes'

const enterRegistrationPage = () => ({
  type: ENTER_REGISTRATION_PAGE,
  payload: true
});

const leaveRegistrationPage = () => ({
  type: LEAVE_REGISTRATION_PAGE,
  payload: false
});

export {
  enterRegistrationPage,
  leaveRegistrationPage
};
