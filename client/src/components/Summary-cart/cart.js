import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container, Box } from '@material-ui/core';
import Summary from './Summary/summary';
import * as cartActions from '../../redux/actions/CartActions'
import CartProductList from './Cart-product-list/cart-product-list';
import EmptyCart from './Empty-cart/empty-cart'
import HelpPanel from './Help-panel/help-panel'
import useStyles from './_cart';
import ContinueBtn from './Continue-btn/continue-btn';

function Cart() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  );

  const bottomBlock = (
    <>
      <HelpPanel />
      <ContinueBtn />
    </>
  );

  let mainContainer = (
    <Grid container spacing={4} alignItems="flex-start" className={classes.root}>
      <Grid item container md={9} xs={12}>
        <CartProductList products={cart.products} actions={actions} />
        <Grid item xs={12}>
          {bottomBlock}
        </Grid>
      </Grid>
      <Grid item md={3} xs={12} className={`${classes.summary} ${classes.sticky}`}>
        <Summary totalCartPrice={cart.totalCartPrice} />
      </Grid>
    </Grid>
  );

  if (!cart.products.length) {
    mainContainer = (
      <Box>
        <EmptyCart />
        {bottomBlock}
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <h1>Your Shopping Cart</h1>
      {mainContainer}
    </Container>
  );
}
export default Cart;
