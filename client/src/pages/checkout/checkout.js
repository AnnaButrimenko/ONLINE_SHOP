import React from 'react';
import { PropTypes } from 'prop-types';

import Checkout from '../../components/Checkout/checkout';

export default function CheckoutPage({ history }) {
  return (
    <Checkout history={history} />
  )
}

CheckoutPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
}
