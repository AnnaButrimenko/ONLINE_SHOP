import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core';
import './Product-detail-carousel/carousel-react.scss';
import StopIcon from '@material-ui/icons/Stop';

import ProductDetailCollapse from './Product-detail-collapse/product-detail-collapse';
import AddToCart from '../Add-to-cart/add-to-cart';
import ProductDetailCarousel from './Product-detail-carousel/product-detail-carousel'
import FeatureItem from './Feature-item/feature-item';
import ProductDetailTab from './Product-detail-tab/product-detail-tab';

import AddToFavoriteBtn from '../Add-to-favorites/Add-to-favorite-btn';
import IncreaseBlock from '../Increase-block/increase-block';
import { addProductToCart } from '../../redux/actions/CartActions';
import AddToCartButton from '../Add-to-cart-button/add-to-cart-button';

import useStyles from './_product-detail';

function ProductDetail({ loggedIn, product, favorites, actionAddProductToCart }) {
  const {
    imageUrls,
    name,
    currentPrice,
    previousPrice,
    myCustomParams,
    brand,
    itemNo,
    _id: itemId,
    quantity: quantityAvailable
  } = product;
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const closeModal = () => {
    setModalVisibility(false)
  };

  const images = imageUrls.map((url) => (
    {
      original: url,
      thumbnail: url
    }
  ));
  const renderTitle = () => (
    <>
      <h1 className={classes.title}>{name.toUpperCase()[0] + name.slice(1)}</h1>
      <p className={classes.itemNo}>
        Item No.&nbsp;
        {itemNo}
      </p>
    </>
  );
  const renderPrice = () => (
    <div className={classes.priceBox}>
      {previousPrice && (
        <span className={classes.oldPrice}>
                        &#8364;
          {previousPrice}
        </span>
      )}
      <span
        className={previousPrice ? classes.specialPrice : classes.regularPrice}
      >
                      &#8364;
        {currentPrice}
      </span>
    </div>
  );

  const renderProductFeatures = () => (
    <Box
      border={1}
      borderColor="text.primary"
      className={classes.productFeatures}
    >
      <ul className={classes.MuiListRoot}>
        <li>
          {brand}
        </li>
        <li>
          Collection:&nbsp;
          {myCustomParams.collection}
        </li>
        <li>
          {myCustomParams.setSize > 1 ? `${myCustomParams.setSize}-pcs.` : `${myCustomParams.setSize}-pc.`}
        </li>
      </ul>
    </Box>
  );

  const renderQuantity = () => {
    if (quantityAvailable !== 0) {
      return (
        <div className={classes.disableBlock}>
          <span>Availability:</span>
          {quantityAvailable < 5
            ? (
              <span>
                <StopIcon className={classes.lowStock} />
                      Low stock
              </span>
            )
            : (
              <span>
                <StopIcon className={classes.inStock} />
                      In stock
              </span>
            )}
        </div>
      )
    }
    return null;
  };

  const renderDeliveryFeatures = () => (
    <Grid container>
      <Grid item xs={12} sm={6} md={12} xl={12}>
        <FeatureItem label="Free delivery over 49€" />
        <FeatureItem label="Free returns" />
      </Grid>
      <Grid item xs={12} sm={6} md={12} xl={12}>
        <FeatureItem label="Secure payment" />
        <FeatureItem label="Certified online shop" />
      </Grid>
    </Grid>
  );

  const renderProductMediaAre = () => (
    <>
      {loggedIn && (
        <Box display="flex" justifyContent="flex-end">
          <AddToFavoriteBtn
            favorites={favorites}
            itemId={itemId}
          />
        </Box>
      )}
      <Container>
        <ProductDetailCarousel
          images={images}
        />
      </Container>
      {!isTablet && <Divider />}
    </>
  );

  const renderProductShopArea = () => (
    <Box
      className={classes.productShopArea}
    >
      <Container>
        {renderPrice()}
        <div className={classes.increaseWrapper}>
          <IncreaseBlock
            qty={quantity}
            setQty={setQuantity}
            maxQty={quantityAvailable}
          />
        </div>
        {renderQuantity()}
        <div className={classes.addToCart}>
          <AddToCartButton
            handleClick={() => {
              actionAddProductToCart(product, quantity);
              setModalVisibility(true)
            }}
            quantity={quantityAvailable}
          />
        </div>
      </Container>
    </Box>
  );

  const renderProductDetail = () => (
    <>
      {renderTitle()}
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={12} md={6} xl={5}>
          {renderProductMediaAre()}
        </Grid>
        <Grid item md={1} xl={3} />
        <Grid item xs={12} sm={12} md={5} xl={4}>
          <Grid container spacing={1}>
            {!isTablet && (
              <Grid item xs={12} sm={6} md={12} xl={6}>
                {renderProductFeatures()}
              </Grid>
            )}
            <Grid item xs={12} sm={6} md={12} xl={12}>
              {renderProductShopArea()}
            </Grid>
            <Grid item xl={6} />
            <Grid item xs={12} sm={12} md={12} xl={12}>
              {renderDeliveryFeatures()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {!isDesktop && <Divider />}
      <Grid container>
        <Grid item xs={12}>
          <h3
            className={classes.sectionTitle}
          >
            Product details
          </h3>
          {isDesktop && <ProductDetailTab currentProduct={product} />}
          {!isDesktop && <ProductDetailCollapse currentProduct={product} />}
          {!isTablet && <Divider />}
        </Grid>
      </Grid>
    </>
  );

  return (
    <Container maxWidth="xl">
      <AddToCart
        open={modalIsVisible}
        onModalClose={closeModal}
        product={{ imageUrls, name, currentPrice, itemId, itemNo, maxQty: quantityAvailable }}
      />
      {renderProductDetail()}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favoritesReducer.favorites,
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
  actionAddProductToCart:
    (productData, quantityVal) => dispatch(addProductToCart(productData, quantityVal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

ProductDetail.propTypes = {
  product:
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object
    ])
  ).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  actionAddProductToCart: PropTypes.func.isRequired,
};
