import * as ServicesCart from '../../services/cart';

const _ = require('lodash');

const transitional = (store) => (next) => (action) => {
  const storeCart = store.getState().cart;
  const cartFromState = _.cloneDeep(storeCart);
  switch (action.type) {
    // cart
    case 'ADD_PRODUCT': {
      const { product } = action.payload;
      const productQuantity = action.payload.quantity ?? 1;
      if (!product || !product._id) {
        return next({ ...action, type: 'ADD_PRODUCT_FAIL' });
      }
      const productIndex = ServicesCart.findProductById(cartFromState.products, product._id);
      // set quantity
      if (productIndex < 0) {
        cartFromState.products.push({
          product,
          cartQuantity: productQuantity
        });
        return next({ ...action, type: 'ADD_PRODUCT', payload: { ...action.payload, cart: cartFromState } });
      } if (productIndex >= 0 || productQuantity > 1) {
        cartFromState.products[productIndex].cartQuantity += productQuantity;
      }
      return next({ ...action, type: 'UPDATE_CART', payload: { ...action.payload, cart: cartFromState } });
    }
    case 'REMOVE_PRODUCT': {
      const { productId } = action.payload;
      const productIndex = ServicesCart.findProductById(cartFromState.products, productId);
      if (!productId || productIndex < 0) {
        return next({ ...action, type: 'REMOVE_PRODUCT_FAIL' });
      }
      const productsArr = [];
      cartFromState.products.forEach((item, index) => {
        if (index !== productIndex) {
          productsArr.push(item);
        }
      });
      cartFromState.products = productsArr;
      return next({
        ...action,
        payload: { ...action.payload, cart: cartFromState }
      });
    }
    case 'SET_PRODUCT_QUANTITY': {
      const newQuantity = action.payload.quantity;
      const _id = action.payload.productId;
      if (newQuantity < 1 || !_id) {
        return next({ ...action, type: 'SET_PRODUCT_QUANTITY_FAIL' });
      }
      const productIndex = ServicesCart.findProductById(cartFromState.products, _id);
      if (!productIndex && !cartFromState.products[productIndex]) {
        return next({ ...action, type: 'SET_PRODUCT_QUANTITY_FAIL' });
      }
      cartFromState.products[productIndex].cartQuantity = newQuantity;

      return next({
        ...action,
        type: 'UPDATE_CART',
        payload: { ...action.payload, cart: cartFromState }
      });
    }
    case 'MERGE_CART': {
      let localStorageCart = window.localStorage.getItem('cart');
      localStorageCart = localStorageCart ? JSON.parse(localStorageCart) : {};

      if (store.getState().user.loggedIn) {
        if (localStorageCart.products && localStorageCart.products.length) {
          return next({
            ...action,
            type: 'SET_CART_FROM_LOCAL_WITH_DB',
            payload: {
              localStorageProducts: localStorageCart.products
            }
          });
        }
        return next({
          ...action,
          type: 'SET_CART_FROM_DB',
        });
      }
      if (localStorageCart.products && localStorageCart.products.length) {
        return next({
          ...action,
          type: 'SET_CART_FROM_LOCAL',
          payload: {
            localStorageProducts: localStorageCart.products
          }
        });
      }

      return next({
        ...action,
        type: 'SET_CART_FAIL'
      })
    }
    default: return next(action);
  }
}

export default transitional;
