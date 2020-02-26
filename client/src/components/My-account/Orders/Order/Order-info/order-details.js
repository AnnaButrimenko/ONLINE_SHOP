import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RoutesName from '../../../../../routes-list';
import OrderTitlesTemplate from './Order-function-templates/order-titles-template';

const OrderDetails = ({ classes, product, cartQuantity }) => {
  const { itemNo, imageUrls, name, currentPrice } = product;
  return (
    <List component="div" disablePadding>
      <Link className={classes.link} to={`${RoutesName.products}/${itemNo}`}>
        <ListItem component="div" button className={classes.nested}>
          <Grid
            component="div"
            item
            container
            xs={12}
            justify="space-between"
            alignItems="center"
            className={classes.orderContainer}
          >
            <Grid
              component="div"
              item
              container
              xs={12}
              sm={2}
              md={2}
              className={classes.imgContainer}
            >
              <img
                className={classes.img}
                src={imageUrls ? imageUrls[0] : ''}
                alt={name ?? ''}
              />
            </Grid>
            <OrderTitlesTemplate
              value={itemNo}
              xs={12}
              sm={3}
              md={2}
              justify="center"
              name="Item-Num: "
              spanNameClass={classes.hiddenName}
            />
            <OrderTitlesTemplate
              value={name}
              xs={12}
              sm={3}
              md={4}
              justify="center"
              name="Product: "
              className={classes.textCenter}
              spanNameClass={classes.hiddenName}
            />
            <OrderTitlesTemplate
              name="Price: "
              value={`€${currentPrice}`}
              xs={12}
              sm={1}
              md={2}
              className={classes.textRight}
              justify="center"
              spanNameClass={classes.hiddenName}
            />
            <OrderTitlesTemplate
              name="Amount: "
              value={cartQuantity}
              xs={12}
              sm={1}
              md={2}
              className={classes.amountContainer}
              spanNameClass={classes.hiddenName}
            />
          </Grid>
        </ListItem>
      </Link>
    </List>
  )
};

export default OrderDetails;

OrderDetails.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  cartQuantity: PropTypes.number.isRequired,
  product: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]).isRequired,
};
