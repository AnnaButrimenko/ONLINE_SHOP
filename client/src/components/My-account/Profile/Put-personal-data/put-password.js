import React, { useState } from 'react';
import { Field } from 'redux-form';
import { useSelector } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from '../../../Sign-up/Sign-up-form/_sign-up-form';
import renderPasswordField from '../../../Render-password-field/render-password-field';
import CancelSaveButtons from './cancel-save-buttons';

function ChangePasswordForm ({ cancel }) {
  const { invalid } = useSelector((state) => state.passwordForm);
  const classes = useStyles();

  const [eyeToggleOld, setEyeToggleOld] = useState(true);
  const toggleOldPasswordMask = () => {
    setEyeToggleOld((prev) => (setEyeToggleOld(!prev)));
  };

  const [eyeToggleNew, setEyeToggleNew] = useState(true);
  const toggleNewPasswordMask = () => {
    setEyeToggleNew((prev) => (setEyeToggleNew(!prev)));
  };

  const [eyeToggleConfirm, setEyeToggleConfirm] = useState(true);
  const toggleConfirmPasswordMask = () => {
    setEyeToggleConfirm((prev) => (setEyeToggleConfirm(!prev)));
  };

  const mainContent = () => (
    <Grid component="div" item spacing={2} container xs={12} direction="column" alignContent="center">
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="password"
          component={renderPasswordField}
          invalid={invalid}
          classes={classes}
          label={invalid ? 'Invalid Password' : 'Password'}
          type="password"
          eyeToggle={eyeToggleOld}
          togglePasswordMask={toggleOldPasswordMask}
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="newPassword"
          component={renderPasswordField}
          classes={classes}
          label="New Password"
          type="password"
          eyeToggle={eyeToggleNew}
          togglePasswordMask={toggleNewPasswordMask}
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="confirmNewPassword"
          component={renderPasswordField}
          classes={classes}
          label="Confirm New Password"
          type="password"
          eyeToggle={eyeToggleConfirm}
          togglePasswordMask={toggleConfirmPasswordMask}
        />
      </Grid>
      <CancelSaveButtons cancel={cancel} />
    </Grid>
  );

  return (
    <Container>
      <h2>Edit Form</h2>
      {mainContent()}
    </Container>
  )
}

export default ChangePasswordForm;

ChangePasswordForm.propTypes = {
  cancel: PropTypes.func.isRequired
};
