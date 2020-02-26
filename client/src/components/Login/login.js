import React from 'react';
import PropTypes from 'prop-types'
import HomePage from '../../pages/home/home';
import LoginModal from '../Login-modal-window/login-modal-window';

const Login = ({ close, visible }) => (
  <>
    <HomePage />
    <LoginModal onModalClose={close} open={visible} />
  </>
);

export default Login;

Login.propTypes = {
  close: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
