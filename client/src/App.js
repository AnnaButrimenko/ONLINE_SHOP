import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';

import ProductList from './components/Product-list/product-list';
import Footer from './components/Footer/footer'

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render () {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <div
              style={
                {
                  height: '50%',
                  backgroundColor: 'tomato',
                  fontSize: '54px'
                }
              }
            >
  FILTER
            </div>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProductList />
          </Grid>
        </Grid>
        <Footer />
      </>

    )
  }
}
