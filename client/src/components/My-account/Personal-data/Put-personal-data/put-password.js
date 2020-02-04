import React, { useState } from 'react';
import { Field } from 'redux-form';
import { useSelector } from 'react-redux';
import { Container, Grid, } from '@material-ui/core';
import useStyles from '../../../SignUp/Sign-up-form/_sign-up-form';
import usePdstyles from '../_personal-data';
import renderPasswordField from '../../../Render-password-field/render-password-field';
import CancelSaveButtons from './cancel-save-buttons';

function ChangePasswordForm ({ cancel }) {
  const { invalid } = useSelector((state) => state.passwordForm);
  const classes = useStyles();
  const pdClasses = usePdstyles();

  const [eyeToggleOld, setEyeToggleOlg] = useState(true);
  const toggleOldPasswordMask = () => {
    setEyeToggleOlg((prev) => (setEyeToggleOlg(!prev)));
  };

  const [eyeToggleNew, setEyeToggleNew] = useState(true);
  const toggleNewPasswordMask = () => {
    setEyeToggleNew((prev) => (setEyeToggleNew(!prev)));
  };

  const [eyeToggleConfirm, setEyeToggleConfirm] = useState(true);
  const toggleConfirmPasswordMask = () => {
    setEyeToggleConfirm((prev) => (setEyeToggleConfirm(!prev)));
  };

  return (
    <Container maxWidth="xl">
      <h2>Edit Form</h2>
      <Grid spacing={2} container xs={12} direction="column" alignContent="center">
        <Grid container item xs={12} sm={9} md={7} lg={5}>
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
        <Grid container item xs={12} sm={9} md={7} lg={5}>
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
        <Grid container item xs={12} sm={9} md={7} lg={5}>
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
    </Container>
  )
}

export default ChangePasswordForm;