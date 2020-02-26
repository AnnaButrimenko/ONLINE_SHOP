import React from 'react';
import { Grid } from '@material-ui/core';
import useHeaderStyles from './_cart-product-list-header';

export default function CartProductListHeader() {
  const classes = useHeaderStyles();

  return (
    <Grid container justify="center" className={`${classes.root} ${classes.underline}`}>
      <Grid item container md={3} >
        Product
      </Grid>
      <Grid item md={4} />
      <Grid item md={1} className={classes.alignFlexible}>
        Price
      </Grid>
      <Grid item md={3} className={classes.alignFlexible}>
        Q-ty
      </Grid>
      <Grid item md={1} className={classes.alignFlexible}>
        Total
      </Grid>
    </Grid>
  );
}
