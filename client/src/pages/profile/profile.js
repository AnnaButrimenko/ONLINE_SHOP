import React, { useState, useCallback } from 'react';
import { Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import PutPersonalData from '../../components/My-account/Profile/Put-personal-data/put-personal-data';
import useStyles from '../../components/Sign-up/Sign-up-form/_sign-up-form';
import usePersonalDataStyles from './_profile';
import RoutesName from '../../routes-list';
import ChangePasswordForm from '../../components/My-account/Profile/Put-personal-data/put-password';
import validate from '../../components/My-account/Profile/validate';
import putUserData from '../../services/put-user-data';
import { invalidPassword, validPassword } from '../../redux/actions/password-validation';
import { newNotification } from '../../redux/actions/notification';
import { loadAllDataAfterLogin } from '../../redux/actions/load-all-data';
import putPassword from '../../services/put-password';
import CancelSaveButtons from '../../components/My-account/Profile/Put-personal-data/cancel-save-buttons';
import MainCustomerPage from '../../components/My-account/Profile/Main-customer-page/main-customer-page';

export default function Profile ({ handleSubmit }) {
  const pdClasses = usePersonalDataStyles();
  const classes = useStyles();

  const [personalDataForm, setEditForm] = useState(false);
  const [passwordForm, setChangePasswordForm] = useState(false);

  const handleEditForm = () => setEditForm(true);
  const handleChangePassword = () => setChangePasswordForm(true);
  const cancelEditForm = () => setEditForm(false);
  const cancelPasswordForm = () => setChangePasswordForm(false);

  const dispatch = useDispatch();

  const handlerInvalidPassword = useCallback(() => {
    dispatch(invalidPassword());
  }, [dispatch]);

  const handlerValidPassword = useCallback(() => {
    dispatch(validPassword());
  }, [dispatch]);

  const handlerCustomerData = useCallback(() => {
    dispatch(loadAllDataAfterLogin());
  }, [dispatch]);

  const handlerNotification = useCallback((type, message) => {
    dispatch(newNotification(type, message));
  }, [dispatch]);

  const {
    gender,
    firstName,
    lastName,
    telephone,
    email,
    login,
  } = useSelector((state) => state.user.customer);
  const { logout } = useSelector((state) => state.logout);

  const submitEditedUser = (values) => {
    putUserData({
      ...values
    })
      .then(() => {
        handlerNotification('success', 'Personal data was successfully changed');
        setTimeout(handlerCustomerData, 0);
        cancelEditForm();
      })
      .catch(() => {
        handlerNotification('error', 'Something went wrong, please try again later');
      });
  };

  const submitEditedUserPassword = (values) => {
    putPassword({ password: values.password, newPassword: values.newPassword })
      .then((response) => {
        if (response.data.message) {
          handlerNotification('success', 'Password was successfully changed');
          setChangePasswordForm(false);
          handlerValidPassword()
        } else {
          handlerInvalidPassword()
        }
      })
      .catch(() => {
        handlerNotification('error', 'Something went wrong, please try again later');
      });
  };

  if (passwordForm) {
    return (
      <form
        className={`${classes.passwordForm} ${pdClasses.container}`}
        noValidate={false}
        onSubmit={handleSubmit(submitEditedUserPassword)}
      >
        <ChangePasswordForm cancel={cancelPasswordForm} />
      </form>
    )
  }

  if (personalDataForm) {
    return (
      <form
        className={`${classes.passwordForm} ${pdClasses.container}`}
        noValidate={false}
        onSubmit={handleSubmit(submitEditedUser)}
      >
        <PutPersonalData
          gender={gender}
          firstName={firstName}
          lastName={lastName}
          telephone={telephone}
          email={email}
          login={login}
        />
        <CancelSaveButtons cancel={cancelEditForm} />
      </form>
    )
  }

  return (
    <Container maxWidth="xl" className={pdClasses.container}>
      <MainCustomerPage
        handleChangePassword={handleChangePassword}
        handleEditForm={handleEditForm}
      />
      {logout && <Redirect to={RoutesName.home} />}
    </Container>
  );
}

Profile = reduxForm({
  form: 'put',
  validate,
})(Profile);

Profile.propTypes = {
  handleSubmit: PropTypes.func
};