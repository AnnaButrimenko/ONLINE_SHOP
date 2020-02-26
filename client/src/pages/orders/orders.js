import React from 'react';
import { Container } from '@material-ui/core';
import OrderList from '../../components/My-account/Orders/Order-list/order-list';
import useProfileStyles from '../../components/My-account/Profile/_profile'

const OrdersPage = () => {
  const profileClasses = useProfileStyles();
  return (
    <Container maxWidth="xl" className={profileClasses.container}>
      <h1>Your Orders</h1>
      <OrderList />
    </Container>
  )
};

export default OrdersPage;
