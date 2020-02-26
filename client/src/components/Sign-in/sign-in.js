import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Avatar, Typography, Container, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CloseIcon from '@material-ui/icons/Close';
import useStylesSingIn from './_sign-in';
import postLoginData from '../../services/post-login-data';
import { loadAllDataAfterLogin } from '../../redux/actions/load-all-data';
import { enterRegistrationPage } from '../../redux/actions/moving-around-registration';
import SignInForm from './Sign-in-form/sign-in-form';

function SignIn ({ onClose }) {
  const classes = useStylesSingIn();

  const [loginOrEmail, setLoginOrEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [eyeToggle, setEyeToggle] = useState(true);

  const dispatch = useDispatch();

  const handleRegistrationRoute = useCallback(() => {
    onClose();
    dispatch(enterRegistrationPage())
  }, [dispatch, onClose]);

  const handleOnChangeLogin = (event) => {
    setLoginOrEmail(event.target.value)
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
  };

  const togglePasswordMask = () => {
    setEyeToggle((prev) => (setEyeToggle(!prev)));
  };

  const handleClick = (event) => {
    event.preventDefault();
    postLoginData({ loginOrEmail, password })
      .then((loginResult) => {
        localStorage.setItem('token', `${loginResult.data.token}`);
        dispatch(loadAllDataAfterLogin());
      })
      .catch(() => setErrorMessage('Incorrect password or login'));
  };

  return (
    <Container maxWidth="xs" className={classes.paper}>
      <IconButton onClick={onClose} className={classes.closeBtn}>
        <CloseIcon />
      </IconButton>
      <Avatar className={classes.avatar} component="div"><LockOutlinedIcon /></Avatar>
      <Typography component="h1" variant="h5">Sign In</Typography>
      <Typography className={classes.errorText} component="h3" variant="inherit">{errorMessage}</Typography>
      <SignInForm
        handleClick={handleClick}
        classes={classes}
        eyeToggle={eyeToggle}
        handleOnChangeLogin={handleOnChangeLogin}
        handleOnChangePassword={handleOnChangePassword}
        handleRegistrationRoute={handleRegistrationRoute}
        togglePasswordMask={togglePasswordMask}
      />
    </Container>
  );
}

export default SignIn;

SignIn.propTypes = { onClose: PropTypes.func };

SignIn.defaultProps = { onClose: () => {} };
