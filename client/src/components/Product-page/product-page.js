import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import getProductsByItemNo from '../../services/get-products';
import ProductDetail from '../Product-detail/product-detail';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';

import Spinner from '../Spinner/spinner';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';
import { getFilteredProducts } from '../../services/filter';
import { getCategory } from '../../services/get-categories';
import getCommentsOfProducts from '../../services/get-comments-of-product';
import { commentsLoaded, commentsRequest } from '../../redux/actions/comments';

function ProductPage(props) {
  const {
    assortment,
    itemNo,
    fetchComments
  } = props;

  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    setProductLoading(true);

    getProductsByItemNo(itemNo)
      .then((response) => {
        setCurrentProduct(response.data);
        setProductLoading(false);
      });
  }, [itemNo, fetchComments]);

  useEffect(() => {
    if (Object.keys(currentProduct).length) {
      fetchComments(currentProduct._id);

      getCategory(currentProduct.categories)
        .then((response) => {
          if (response.topSellers) {
            setTopList(response.topSellers)
          }
        });
    }
  }, [currentProduct, assortment]);

  useEffect(() => {
    const cardsToShowString = topList.toString();
    getFilteredProducts(`itemNo=${cardsToShowString}`)
      .then((response) => {
        setProductsToShow(response)
      })
  }, [topList]);

  return (
    <>
      {productLoading || !Object.keys(currentProduct).length
        ? <Spinner />
        : (
          <>
            <Container maxWidth="xl">
              <ProductBreadcrumbs assortment={assortment} product={currentProduct} />
              <div className="product-essential">
                <Grid key={currentProduct.itemNo}>
                  <ProductDetail
                    product={currentProduct}
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

const mapStateToProps = (state) => ({
  productsLoading: state.productsReducer.productsLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (productId) => {
    dispatch(commentsRequest(productId));
    getCommentsOfProducts(productId)
      .then((comments) => {
        dispatch(commentsLoaded(comments))
      }).catch((error) => alert(error.message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

ProductPage.propTypes = {
  assortment: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  fetchComments: PropTypes.func.isRequired
};

// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';
// import getProductsByItemNo from '../../services/get-products';
// import ProductDetail from '../Product-detail/product-detail';
// import { productsRequested, productsLoaded } from '../../redux/actions/products';
// import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';
//
// import Spinner from '../Spinner/spinner';
// import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';
// import { getFilteredProducts } from '../../services/filter';
// import getCurrentProduct from '../../redux/actions/current-product';
// import { getCategory } from '../../services/get-categories';
// import getCommentsOfProducts from '../../services/get-comments-of-product';
// import { commentsLoaded, commentsRequest } from '../../redux/actions/comments';
//
// function ProductPage(props) {
//   const {
//     assortment,
//     itemNo,
//     chosenProduct,
//     fetchProduct,
//     getChosenProduct,
//     fetchComments
//   } = props;
//   const [topList, setTopList] = useState([]);
//   const [productsToShow, setProductsToShow] = useState([]);
//
//   useEffect(() => {
//     if (!chosenProduct) {
//       fetchProduct(itemNo);
//     } else {
//       getChosenProduct(chosenProduct);
//       fetchComments(chosenProduct._id);
//     }
//   }, [itemNo, getChosenProduct, fetchComments]);
//
//   useEffect(() => {
//     if (chosenProduct) {
//       getCategory(chosenProduct.categories)
//         .then((response) => {
//           if (response.topSellers) {
//             setTopList(response.topSellers)
//           }
//         });
//     }
//   }, [chosenProduct, assortment]);
//
//   useEffect(() => {
//     const cardsToShowString = topList.toString();
//     getFilteredProducts(`itemNo=${cardsToShowString}`)
//       .then((response) => {
//         setProductsToShow(response)
//       })
//   }, [topList]);
//
//   return (
//     <>
//       {!chosenProduct
//         ? <Spinner />
//         : (
//           <>
//             <Container maxWidth="xl">
//               <ProductBreadcrumbs assortment={assortment} />
//               <div className="product-essential">
//                 <Grid key={chosenProduct.itemNo}>
//                   <ProductDetail
//                     product={chosenProduct}
//                   />
//                 </Grid>
//               </div>
//               <ProductCardCarousel
//                 products={productsToShow}
//                 label="Most Popular Products"
//               />
//             </Container>
//           </>
//         )}
//     </>
//   )
// }
//
// const mapStateToProps = (state, { itemNo }) => {
//   const chosenProduct = state.productsReducer.products
//     ? state.productsReducer.products.find((product) => (
//       product.itemNo === itemNo
//     ))
//     : null;
//
//   return {
//     chosenProduct,
//     productsLoading: state.productsReducer.productsLoading
//   }
// };
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchProduct: (itemNo) => {
//     dispatch(productsRequested());
//     getProductsByItemNo(itemNo)
//       .then((response) => {
//         dispatch(productsLoaded({ products: [response.data] }));
//       })
//   },
//   getChosenProduct: (product) => dispatch(getCurrentProduct(product)),
//   fetchComments: (productId) => {
//     dispatch(commentsRequest(productId));
//     getCommentsOfProducts(productId)
//       .then((comments) => {
//         dispatch(commentsLoaded(comments))
//       }).catch((error) => alert(error.message));
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
//
// ProductPage.propTypes = {
//   assortment: PropTypes.string.isRequired,
//   itemNo: PropTypes.string.isRequired,
//   // chosenProduct: PropTypes.oneOfType([PropTypes.object]),
//   fetchProduct: PropTypes.func.isRequired,
//   getChosenProduct: PropTypes.func.isRequired,
//   fetchComments: PropTypes.func.isRequired
// };
//
// // ProductPage.defaultProps = {
// //   chosenProduct: {}
// // };
