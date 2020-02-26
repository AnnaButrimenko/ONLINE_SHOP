import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Container, CssBaseline, Divider, Grid, Typography } from '@material-ui/core';

import SignUpInfo from './Sign-up-info/signUp-info';
import SignUpForm from './Sign-up-form/sign-up-form';
import SignUpFooter from './Sign-up-footer/sign-up-footer';
import ModalResponse from './Modal-response/modal-response';
import validate from './validate';
import postNewUser from '../../services/post-new-user';
import useStyles from './_sign-up';
import { leaveRegistrationPage } from '../../redux/actions/moving-around-registration';
import RoutesName from '../../routes-list'

let SignUp = (props) => {
  const { handleSubmit } = props;
  const classes = useStyles();
  const [signUpModal, setSignUpModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [errorText, setErrorText] = useState('Something go wrong. Try again');

  const dispatch = useDispatch();

  useEffect(() => () => dispatch(leaveRegistrationPage()), [dispatch]);

  const initialState = {
    gender: 'Male',
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
  };

  const handleOpenSignUpModal = () => {
    setSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setSignUpModal(false);
    setRedirect(true);
  };

  const handleOpenSetErrorModal = (errorAnswer) => {
    setErrorModal(true);
    setErrorText(errorAnswer);
  };

  const handleCloseSetErrorModal = () => {
    setErrorModal(false);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/" />
    }
    return null
  };

  const submitNewUser = (values) => {
    const newUser = {
      ...initialState,
      ...values
    };

    postNewUser(newUser, handleOpenSignUpModal, handleOpenSetErrorModal);
  };
  const { loggedIn } = useSelector((state) => state.user);

  if (loggedIn) {
    return <Redirect to={RoutesName.home} />
  }

  return (
    <Container maxWidth="xl" component="div" >
      <CssBaseline />
      {redirect && renderRedirect()}
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          className={classes.title}
        >
          Your registration for the myWMF Customer Club
        </Typography>

        <form
          className={classes.passwordForm}
          noValidate={false}
          onSubmit={handleSubmit(submitNewUser)}
        >
          <Grid
            container
            spacing={3}
            direction="row-reverse"
            alignItems="center"
            alignContent="flex-end"
            justify="space-evenly"
          >
            <SignUpInfo />
            <Divider light orientation="vertical" className={classes.dividerSignUp} />
            <SignUpForm />
            <SignUpFooter />
          </Grid>
        </form>

        {signUpModal && (
          <ModalResponse
            openModal={signUpModal}
            handleClose={handleCloseSignUpModal}
            inModal={signUpModal}
            classModal={classes.paperInfoIcon}
            value="Your account was successfully registered"
            submitClass={classes.submit}
          />
        )}
        {errorModal && (
          <ModalResponse
            openModal={errorModal}
            handleClose={handleCloseSetErrorModal}
            inModal={errorModal}
            classModal={classes.paperInfoError}
            value={errorText}
            submitClass={classes.submit}
          />
        )}
      </div>
    </Container>
  );
};

SignUp = reduxForm({
  form: 'registration',
  validate,
})(SignUp);

SignUp.propTypes = {
  handleSubmit: PropTypes.func
};

export default SignUp;
