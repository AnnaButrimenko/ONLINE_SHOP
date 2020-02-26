import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import renderEditTextField from '../../../Render-text-field/render-edit-text-field'

import useStyles from '../../../Sign-up/Sign-up-form/_sign-up-form';

function PutPersonalData ({ firstName, lastName, telephone, email, login }) {
  const classes = useStyles();

  const textFields = () => (
    <Grid component="div" container spacing={2} direction="column" alignContent="center" >
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="firstName"
          component={renderEditTextField}
          defaultValue={firstName}
          classes={classes}
          label="First Name"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="lastName"
          component={renderEditTextField}
          defaultValue={lastName}
          classes={classes}
          label="Last Name"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="login"
          component={renderEditTextField}
          defaultValue={login}
          classes={classes}
          label="Login"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="email"
          component={renderEditTextField}
          defaultValue={email}
          classes={classes}
          label="Email"
          type="text"
        />
      </Grid>
      <Grid component="div" container item xs={12} sm={9} md={7} lg={6}>
        <Field
          name="telephone"
          component={renderEditTextField}
          placeholder="+380XXXXXXXXX"
          defaultValue={telephone}
          classes={classes}
          label="Phone number"
          type="tel"
        />
      </Grid>
    </Grid>
  );

  const mainContent = () => (
    <Grid component="div" item xs={12}>
      <Typography paragraph component="p" variant="subtitle2" className={classes.rightTitle}>
        Please edit the information you want:
      </Typography>
      {textFields()}
    </Grid>
  );

  return (
    <Container>
      <h2>Edit Form</h2>
      {mainContent()}
    </Container>
  )
}

PutPersonalData.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

export default PutPersonalData;
