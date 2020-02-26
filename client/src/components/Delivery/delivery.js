import React from 'react';
import { Grid, Divider, Container } from '@material-ui/core';

export default function Delivery() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item>
            <h2>Where is my parcel?</h2>
            <p>
              Delivery takes 2-4 working days. You can track the delivery using the DHL shipment
              number found in your shipment email. If you cannot track your order status, please
              contact us. We will be happy to assist you.
            </p>
            <Divider />
            <h2>How much are the delivery charges?</h2>
            <p>
              From &#8364;49.00 there is no charge for delivering your goods. Up to this amount you
              pay &#8364;4.95 per order.
            </p>
            <Divider />
            <h2>What countries does WMF deliver to?</h2>
            We currently deliver to the following countries:
            <ul>
              <li>Ukraine</li>
            </ul>
            <Divider />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}