import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Field } from 'redux-form';

import RenderRadioGroup from './form-components/radio-group';
import RadioCheckboxField from './form-components/radio-checkbox-field';

import useStyles from './_checkout-form';

export default function DeliveryPaymentInfo() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.blockTitle}>2. PAYMENT METHODS</Typography>
      <Field name="paymentMethod" component={RenderRadioGroup}>
        <Box className={classes.cardIconWrapper}>
          <RadioCheckboxField name="paymentMethod" value="creditCard" label="Credit card" />
          <Box>
            <img src="/img/visa-card.png" alt="visa-card" className={classes.cardIcon} />
            <img src="/img/mastercard.png" alt="master-card" className={classes.cardIcon} />
            <img src="/img/maestro.png" alt="maestro-card" className={classes.cardIcon} />
          </Box>
        </Box>
        <RadioCheckboxField name="paymentMethod" value="cash" label="Cash" />
      </Field>
      <Typography className={classes.blockTitle}>3. DELIVERY OPTIONS</Typography>
      <Field name="delivery" component={RenderRadioGroup}>
        <RadioCheckboxField name="deliveryMethod" value="DHL" label="DHL" />
        <RadioCheckboxField name="deliveryMethod" value="Nova Poshta" label="Nova Poshta" />
      </Field>
    </>
  )
}