import React from 'react';
import { PropTypes } from 'prop-types'
import { Container } from '@material-ui/core';

import useStyles from './_status';

export default function CheckoutStatus(props) {
  const classes = useStyles();
  const { location: { state: { orderDone, orderNo, message } } } = props;

  const statusMessageSuccess = (
    <>
      <h2>
        Your order&nbsp;
        <strong>
          №
          {orderNo}
          &nbsp;
        </strong>
        has been successfully placed.
      </h2>
      <p>It is already on its way to you!</p>
      <img src="/img/car-delivery.png" alt="delivery-car" />
      <p>Thank you for your choice!</p>
    </>
  );

  const statusMessageFailure = (
    <>
      <h2>Your order wasn&apos;t placed. </h2>
      <p className={classes.statusText}>
        {message}
        .
      </p>
      <p className={classes.statusText}>Please, try again later.</p>
    </>
  );

  const statusMessage = orderDone ? statusMessageSuccess : statusMessageFailure;

  return (
    <Container maxWidth="xl">
      {statusMessage}
    </Container>
  )
}

CheckoutStatus.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};
