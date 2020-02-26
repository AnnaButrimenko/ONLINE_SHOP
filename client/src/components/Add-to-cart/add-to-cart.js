import React, { useState, useEffect, useCallback } from 'react'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Grid, IconButton, Divider, Button, Box } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CloseIcon from '@material-ui/icons/Close';

import RoutesName from '../../routes-list';
import ModalWindow from '../Modal-window/modal-window';
import { setProductQuantity } from '../../redux/actions/CartActions'
import IncreaseBlock from '../Increase-block/increase-block'

import useStyles from './_add-to-cart';

export default function AddToCart({ open, onModalClose, product }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.cart.products);
  const { imageUrls, name, currentPrice, specialPrice, itemNo, itemId, maxQty } = product;
  const actionSetProductQuantityInCart = useCallback(
    (productData, quantityVal) => dispatch(setProductQuantity(productData, quantityVal)),
    [dispatch]
  );
  const currentProductsFromState = productsState.find((el) => el.product._id === itemId);
  const stateQuantity = currentProductsFromState ? currentProductsFromState.cartQuantity : 1;

  const [totalPrice, setTotalPrice] = useState(currentPrice);

  const handleQty = (newQty) => {
    actionSetProductQuantityInCart(product.itemId, newQty)
  };

  const finalPrice = !specialPrice ? currentPrice : specialPrice;

  useEffect(() => {
    setTotalPrice(stateQuantity * finalPrice)
  }, [stateQuantity, finalPrice]);

  useEffect(() => {
    document.onkeyup = (event) => {
      if (event.key === 'Escape') {
        onModalClose()
      }
    }
  }, [onModalClose]);

  return (
    <ModalWindow
      open={open}
      onModalClose={onModalClose}
    >
      <>
        <div className={classes.header}>
          ADDED TO CART:
          <IconButton onClick={onModalClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.body}>
          <Grid container spacing={4} justify="center">
            <Grid item sm={6} md={4} className={classes.containerImg}>
              <img className={classes.img} src={imageUrls[0]} alt={name} />
            </Grid>
            <Grid item sm={12} md={8}>
              <div className={classes.title}>
                <span>
                  {name.toUpperCase()[0] + name.slice(1)}
                </span>
                <span className={classes.total}>TOTAL:</span>
              </div>
              <p>
                <span style={{ paddingRight: '5px' }}>Item.No</span>
                {itemNo}
              </p>
              <Divider />
              <Box className={classes.pricingBlock}>
                <Box className={classes.price}>
                  <span>
                    &#8364;
                    {finalPrice}
                  </span>
                </Box>
                <IncreaseBlock setQty={handleQty} qty={stateQuantity} maxQty={maxQty} />
                <Box className={classes.total}>
                  <span>
                    &#8364;
                    {totalPrice}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                className={classes.btn}
                size="large"
                variant="contained"
                color="primary"
                disableElevation
                onClick={onModalClose}
              >
                Continue shopping
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link to={RoutesName.cart} className={classes.link}>
                <Button
                  className={classes.btn}
                  size="large"
                  variant="contained"
                  color="secondary"
                  disableElevation
                >
                  <ShoppingCartOutlinedIcon />
                  <div ml={2}>View cart</div>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.footer}>
          <article>
            Free delivery from &#8372;49 | Free returns | Quick delivery with DHL
          </article>
        </div>
      </>
    </ModalWindow>
  )
}

AddToCart.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  product:
  PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number])
  ).isRequired,
};
