import React, { useState } from 'react';
import { Field } from 'redux-form';
import { Link as RouteLink } from 'react-router-dom';
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import RenderCheckboxField from '../../Render-checkbox-field/render-checkbox-field';
import LoginModal from '../../Login-modal-window/login-modal-window';

import useStyles from './_sign-up-footer';

const SignUpFooter = () => {
  const classes = useStyles();

  const [modalIsVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleClick = () => {
    setModalVisibility(true);
  };

  return (
    <Grid item xs={12} md={11} className={classes.accountContentFooter}>
      <Typography paragraph variant="subtitle2">
        Secure your welcome bonus!
      </Typography>
      <Typography paragraph variant="body2" align="justify">
        Receive a €10 welcome bonus for your next purchase as well as information and
        special invitations to the VIP sale and events. For this, we need your consent to
        use your data:
      </Typography>
      <Grid item xs={12}>
        <Field name="agreement" component={RenderCheckboxField} />
      </Grid>
      <Button type="submit" variant="contained" color="primary" className={classes.submit}>
        Become a myWMF Club member now
      </Button>
      <RouteLink
        onClick={handleClick}
        className={classes.linkSignIn}
        to="/sign-up"
      >
        Already have an account?
        <b> Sign in</b>
      </RouteLink>
      <LoginModal
        onModalClose={closeModal}
        open={modalIsVisible}
      />
    </Grid>
  )
};

export default SignUpFooter;
