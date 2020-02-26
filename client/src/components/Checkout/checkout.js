import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Container, Grid, Box } from '@material-ui/core';

import CustomerInfo from './Checkout-form/customer-info';
import DeliveryPaymentInfo from './Checkout-form/delivery-payment-info';
import OrderConfirmation from './Checkout-form/order-confirmation';
import FormButton from './Checkout-form/form-components/form-button';
import validate from './validate';
import Spinner from '../Spinner/spinner';
import RoutesName from '../../routes-list';
import placeOrderToDB from '../../services/checkout';
import { deleteCartFromDB } from '../../services/cart';
import { clearCart } from '../../redux/actions/CartActions';

import useStyles from './_checkout';

let Checkout = (props) => {
  const classes = useStyles();
  const { history, handleSubmit, user: { customer }, cart, clearCart, isFetchingLoadData } = props;

  const createOrder = (order) => {
    const interimOrder = {
      deliveryAddress: {
        country: 'Ukraine',
        city: order.city,
        address: `${order.street} ${order.house}, f.${order.flat}`,
        postal: order.postalCode
      },
      shipping: order.delivery,
      paymentInfo: order.paymentMethod,
      status: 'not shipped',
      email: order.email,
      mobile: order.telephone,
      comments: order.comments || '',
      letterSubject: 'Thank you for your order!',
      letterHtml:
        `<h1>Your order №XXXXXXXX is placed. </h1>
        <p>Looking forward to see you again soon. In case of any questions - we are happy to help!</p>
        <p>Sincerely, your WMF team.</p>`
    };

    if (customer._id) {
      return {
        ...interimOrder,
        customerId: `${customer._id}`
      }
    }

    return {
      ...interimOrder,
      products: cart.products
    }
  };

  const submitNewOrder = (order) => {
    const newOrder = createOrder(order);

    placeOrderToDB(newOrder)
      .then((response) => {
        if (response.orderIsPlaced) {
          const { orderNo, customerId } = response.placedOrder;

          if (customerId) {
            deleteCartFromDB()
              .then(() => clearCart())
              .catch((error) => alert(error.response.message));
          } else {
            window.localStorage.setItem('cart', '');
            clearCart();
          }

          history.push(RoutesName.orderConfirmation, {
            orderDone: true,
            orderNo
          });
        } else {
          history.push(RoutesName.orderConfirmation, {
            orderDone: false,
            message: response.message
          });
        }
      })
      .catch((error) => {
        history.push(RoutesName.orderConfirmation, {
          orderDone: false,
          error
        });
      });
  };

  return (
    <>
      {isFetchingLoadData && <Spinner />}
      {!isFetchingLoadData &&
      (
        <Container component="div" maxWidth="xl">
          <form
            className={classes.form}
            noValidate={false}
            onSubmit={handleSubmit(submitNewOrder)}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <CustomerInfo customer={customer} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <DeliveryPaymentInfo />
              </Grid>
              <Grid item xs={12} md={4}>
                <OrderConfirmation />
                <Box className={classes.btnWrapper}>
                  <FormButton color="primary" type="submit" btnText="PLACE ORDER" />
                  <FormButton
                    type="button"
                    color="secondary"
                    btnText="BACK TO CART"
                    onClick={() => history.push(RoutesName.cart)}
                  />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Container>
      )}
    </>
  )
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user,
  isFetchingLoadData: state.isFetchingLoadData.isFetching,
  initialValues: state.user.customer
});

const mapDispatchToProps = {
  clearCart
};

Checkout = reduxForm({
  form: 'checkout',
  validate,
})(Checkout);

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)

Checkout.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.func
  ]).isRequired,
  // eslint-disable-next-line
  handleSubmit: PropTypes.func,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  cart: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number
  ]).isRequired,
  clearCart: PropTypes.func.isRequired,
  isFetchingLoadData: PropTypes.bool.isRequired,
};
