import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Field } from 'redux-form';
import { Grid, Typography } from '@material-ui/core';

import RenderTextField from './form-components/text-field';
import RenderRadioGroup from './form-components/radio-group';
import TextArea from './form-components/text-area';
import RadioCheckboxField from './form-components/radio-checkbox-field';

import useStyles from './_checkout-form';

export default function CustomerInfo({ customer }) {
  const classes = useStyles();

  const { gender } = useSelector((state) => state.user.customer);

  const genderRadioGroup = (
    <Field name="gender" component={RenderRadioGroup} gender={gender}>
      <RadioCheckboxField name="gender" value="male" label="Male" gender={gender} />
      <RadioCheckboxField name="gender" value="female" label="Female" gender={gender} />
    </Field>
  );

  const textField = (name, label) => (
    <Field
      name={name}
      component={RenderTextField}
      classes={classes}
      defaultValue={customer[name] || ''}
      label={label}
    />
  );

  return (
    <>
      <Grid>
        <Typography className={classes.blockTitle}>1. CUSTOMER INFO</Typography>
        {genderRadioGroup}
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            {textField('firstName', 'First Name')}
          </Grid>
          <Grid item xs={12} lg={6}>
            {textField('lastName', 'Last Name')}
          </Grid>
          <Grid item xs={12}>
            {textField('email', 'Email')}
          </Grid>
          <Grid item xs={12}>
            {textField('telephone', 'Telephone')}
          </Grid>
          <Grid item xs={12}>
            {textField('street', 'Street')}
          </Grid>
          <Grid item xs={12} lg={6}>
            {textField('house', 'House')}
          </Grid>
          <Grid item xs={12} lg={6}>
            {textField('flat', 'Flat')}
          </Grid>
          <Grid item xs={12} lg={6}>
            {textField('postalCode', 'Postal code')}
          </Grid>
          <Grid item xs={12} lg={6}>
            {textField('city', 'City')}
          </Grid>
          <Grid item xs={12}>
            <Field
              name="comments"
              component={TextArea}
              label="Additional comments..."
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

CustomerInfo.propTypes = {
  customer: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired
};