import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Hidden } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RoutesName from '../../../../routes-list';
import useStyles from './_cart-product-item';
import DialogModal from '../../Dialog-modal/dialog-modal';
import useHeaderStyles from '../Cart-product-list-header/_cart-product-list-header';
import IncreaseBlock from '../../../Increase-block/increase-block';

export default function CartProductItem({ product, onSetProductQuantity, onRemoveProduct }) {
  const classes = useStyles();
  const headerClasses = useHeaderStyles();
  const { product: currentProduct, cartQuantity } = product;
  const subTotalProduct = currentProduct.currentPrice * cartQuantity;

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const onCloseDialogWithStatus = (status) => {
    if (status) {
      onRemoveProduct(currentProduct._id);
    }
    setDialogOpen(false);
  };

  const setQty = (qty) => {
    onSetProductQuantity(currentProduct._id, qty)
  };

  const productImage = (
    <Link to={`${RoutesName.products}/${currentProduct.itemNo}`}>
      <img
        className={classes.img}
        src={currentProduct.imageUrls ? currentProduct.imageUrls[0] : ''}
        alt={currentProduct.name ?? ''}
      />
    </Link>
  );

  const productDesc = (
    <>
      <p className={`${classes.marginTop} ${classes.title}`}>{currentProduct.name}</p>
      <p className={classes.itemNum}>
          Item No.&nbsp;
        {currentProduct.itemNo}
      </p>
    </>
  );

  const mobileProductPriceTitle = (
    <Hidden mdUp>
      <Grid item xs={6}>
        <p>Price</p>
      </Grid>
    </Hidden>
  );
  const mobileProductAmountTitle = (
    <Hidden mdUp>
      <Grid item xs={6} md={12}>
        <p>Q-ty</p>
      </Grid>
    </Hidden>
  );
  const mobileProductSubtotalTitle = (
    <Hidden mdUp>
      <Grid item xs={6}>
        <p>Total</p>
      </Grid>
    </Hidden>
  );

  return (
    <Grid item container sm={12} justify="space-between" className={`${classes.root} ${headerClasses.underline}`}>
      <Grid container item lg={3} md={4} sm={12} className={classes.img_block}>
        <Grid item xs={12}>
          {productImage}
        </Grid>
      </Grid>

      <Grid item lg={3} md={2} xs={11}>
        {productDesc}
      </Grid>
      <Grid item md={1} xs={1} className={headerClasses.alignFlexible}>
        <DeleteIcon color="secondary" className={classes.deleteBtn} onClick={() => { handleDialogOpen() }} />
      </Grid>

      <DialogModal onCloseDialogWithStatus={onCloseDialogWithStatus} isOpen={isDialogOpen} />
      <Grid item container justufy="space-between" md={1} xs={12}>
        {mobileProductPriceTitle}
        <Grid item md={12} xs={6} className={headerClasses.alignRight}>
          <p className={`${classes.marginTop} ${classes.price} ${headerClasses.alignFlexible}`}>
            €
            {currentProduct.currentPrice}
          </p>
        </Grid>
      </Grid>
      <Grid item container md={3} xs={12} >
        {mobileProductAmountTitle}
        <Grid item xs={6} md={12} className={headerClasses.alignFlexible}>
          <IncreaseBlock setQty={setQty} qty={cartQuantity} maxQty={currentProduct.quantity} />
        </Grid>
      </Grid>
      <Grid item container justufy="space-between" md={1} xs={12}>
        {mobileProductSubtotalTitle}
        <Grid item xs={6} md={12} className={headerClasses.alignFlexible}>
          <p className={`${classes.marginTop} ${classes.price}`}>
            €
            { subTotalProduct }
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}

CartProductItem.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.any
  ).isRequired,
  onSetProductQuantity: PropTypes.func.isRequired,
  onRemoveProduct: PropTypes.func.isRequired
};