import React, { useState } from 'react';
import { Collapse, Divider, List } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStylesOrderItem from '../Order-list/_order-list';
import OrderCustomerInfo from './Order-info/order-customer-info';
import OrderTitles from './Order-info/order-titles';
import OrderParams from './Order-info/order-params';
import OrderDetails from './Order-info/order-details';

const Order = ({ item }) => {
  const classes = useStylesOrderItem();

  const {
    products,
    deliveryAddress: { country, city, address, postal },
    paymentInfo,
    shipping,
    email,
    mobile,
    status,
    orderNo,
    date,
    totalSum
  } = item;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const orderDetailsInfo = () => products.map((its) => (
    <Collapse in={open} timeout="auto" unmountOnExit key={its.product.itemNo}>
      <Divider variant="middle" component="div" />
      <OrderDetails classes={classes} cartQuantity={its.cartQuantity} product={its.product} />
    </Collapse>
  ));

  return (
    <List key={orderNo} component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      <OrderParams
        classes={classes}
        open={open}
        date={date}
        handleClick={handleClick}
        orderNo={orderNo}
        products={products}
        status={status}
        totalSum={totalSum}
      />
      <Collapse in={open} timeout="auto" unmountOnExit onClick={handleClick}>
        <OrderCustomerInfo
          classes={classes}
          address={address}
          city={city}
          country={country}
          email={email}
          mobile={mobile}
          paymentInfo={paymentInfo}
          postal={postal}
          shipping={shipping}
        />
        <Divider variant="middle" component="div" />
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit onClick={handleClick} className={classes.hiddenCollapse}>
        <OrderTitles classes={classes} />
      </Collapse>
      {orderDetailsInfo()}
    </List>
  )
};

export default Order;

Order.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};
