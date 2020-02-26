import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_MORE_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SORTING_PRODUCTS,
  RESET_SORTING
} from './actionTypes'

const productsRequested = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

const productsLoaded = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const moreProductsLoaded = (products) => ({
  type: FETCH_MORE_PRODUCTS_SUCCESS,
  payload: products
});

const productsError = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: {
    products: [],
    error
  }
});

const sortingProducts = (products, sortingType) => ({
  type: SORTING_PRODUCTS,
  payload: {
    products,
    sorting: sortingType
  }
});

const sortingReset = () => ({
  type: RESET_SORTING
});

export {
  productsRequested,
  productsLoaded,
  moreProductsLoaded,
  productsError,
  sortingProducts,
  sortingReset
}
