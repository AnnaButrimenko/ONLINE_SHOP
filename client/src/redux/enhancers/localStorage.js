import * as ServicesCart from '../../services/cart';

const localStorage = (store) => (next) => (action) => {
  const { loggedIn, token } = store.getState().user;
  if (!loggedIn || !token) {
    switch (action.type) {
      // cart
      case 'SET_CART_FROM_LOCAL': {
        const products = action.payload.localStorageProducts;
        const newCart = {
          products,
          totalCartQuantity: ServicesCart.getCartQuantity(products),
          totalCartPrice: ServicesCart.getTotalCartPrice(products)
        }
        return next({ ...action, type: 'UPDATE_CART_SUCCESS', payload: { newCart } });
      }
      case 'ADD_PRODUCT':
      case 'UPDATE_CART':
      case 'REMOVE_PRODUCT': {
        const newCart = { ...action.payload.cart };
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        return next({ ...action, type: `${action.type}_SUCCESS`, payload: { newCart } });
      }
      case 'REMOVE_CART': {
        window.localStorage.removeItem('cart');
        return next({
          type: 'CLEAR_CART',
        });
      }
      default: return next(action);
    }
  }
  return next(action);
};

export default localStorage;
