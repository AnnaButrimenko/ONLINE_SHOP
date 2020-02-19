import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import getProductsByItemNo from '../../services/get-products';
import ProductDetail from '../Product-detail/product-detail';
import { productsRequested, productsLoaded } from '../../redux/actions/products';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';

import Spinner from '../Spinner/spinner';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';
import { getFilteredProducts } from '../../services/filter';
import getCurrentProduct from '../../redux/actions/current-product';
import { getCategory } from '../../services/get-categories';
import getCommentsOfProducts from '../../services/get-comments-of-product';
import { commentsLoaded, commentsRequest } from '../../redux/actions/comments';

function ProductPage(props) {
  // console.log('PROPS =', props);
  const { assortment, itemNo, chosenProduct, fetchProduct, productsLoading, setProducts, getChosenProduct, fetchComments } = props;
  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    if (!chosenProduct) {
      fetchProduct(itemNo);
    } else {
      getChosenProduct(chosenProduct);
      // console.log(chosenProduct);
      fetchComments(chosenProduct._id);
    }
  }, [itemNo, getChosenProduct, fetchComments]);

  useEffect(() => {
    if (chosenProduct) {
      getCategory(chosenProduct.categories)
        .then((response) => setTopList(response.topSellers));
    }
  }, [chosenProduct, assortment]);
  //
  const cardsToShowString = topList.toString();

  useEffect(() => {
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        // console.log('resp', response);
        setProductsToShow(response)
      })
  }, [cardsToShowString]);
  // console.log('products slider', productsToShow);

  return (
    <>
      {!chosenProduct
        ? <Spinner />
        : (
          <>
            <Container maxWidth="xl">
              <ProductBreadcrumbs assortment={assortment} />
              <div className="product-essential">
                <Grid key={chosenProduct.itemNo}>
                  <ProductDetail
                    product={chosenProduct}
                  />
                </Grid>
              </div>
              <ProductCardCarousel
                products={productsToShow}
                label="Most Popular Products"
              />
            </Container>
          </>
        )}
    </>
  )
}

const mapStateToProps = (state, { itemNo }) => {
  const chosenProduct = state.productsReducer.products
    ? state.productsReducer.products.find((product) => (
      product.itemNo === itemNo
    ))
    : null ;

  return {
    chosenProduct,
    productsLoading: state.productsReducer.productsLoading
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (itemNo) => {
    dispatch(productsRequested());
    getProductsByItemNo(itemNo)
      .then((response) => {
        dispatch(productsLoaded({ products: [response.data] }));
      })
  },
  getChosenProduct: (product) => dispatch(getCurrentProduct(product)),
  fetchComments: (productId) => {
    dispatch(commentsRequest(productId));
    getCommentsOfProducts(productId)
      .then((comments) => {
        dispatch(commentsLoaded(comments))
      }).catch((error) => console.log(error));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

ProductPage.propTypes = {
  itemUrl: PropTypes.string.isRequired,
};
