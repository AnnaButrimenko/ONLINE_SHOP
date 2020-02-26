import * as ServicesCart from '../../services/cart';
import { getFavoriteProducts } from '../../services/favorites';
import getCategories from '../../services/get-categories';
import getCustomer from '../../services/customer';

const db = (store) => (next) => async (action) => {
  const { loggedIn, token } = store.getState().user;
  switch (action.type) {
    case 'SET_CATALOG_FROM_DB': {
      const catalog = await getCategories();
      return next({
        type: 'FETCH_CATALOG_SUCCESS',
        payload: {
          catalog: {
            allCategories: catalog,
            mainCategories: catalog.filter((category) => category.parentId === 'null')
          },
          error: null
        }
      })
    }
  }

  if (loggedIn && token) {
    switch (action.type) {
      case 'ADD_PRODUCT': {
        const newCart = await ServicesCart.addProductToCart(action.payload.product._id);
        if (!newCart) {
          return next({
            ...action,
            type: 'OPEN_NEW_NOTIFICATION',
            payload: { type: 'error', message: 'Can not add product' }
          });
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({
          ...action,
          type: 'ADD_PRODUCT_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }
      case 'SET_CART_FROM_DB': {
        const cartFromDB = await ServicesCart.getCart();
        let products = []
        if (cartFromDB && cartFromDB.products.length) {
          products = cartFromDB.products;
        }
        if (!products && !products.length) {
          return next({ ...action, type: 'SET_CART_FAIL' });
        }
        const newCart = { products };
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({
          ...action,
          type: 'UPDATE_CART_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }
      case 'SET_CART_FROM_LOCAL_WITH_DB': {
        const { localStorageProducts } = action.payload;
        const cartFromDB = await ServicesCart.getCart();
        let products = []
        if (cartFromDB && cartFromDB.products && cartFromDB.products.length) {
          products = cartFromDB.products;
        }
        if (!products.length) {
          products = localStorageProducts;
        } else {
          localStorageProducts.forEach((el, index) => {
            if (ServicesCart.findProductById(products, el.product._id) < 0) {
              products.push(el);
            }
          });
        }

        action.payload.cart = {
          products
        }
      }

      case 'UPDATE_CART': {
        const newCart = await ServicesCart.updateCart(action.payload.cart);
        if (!newCart) {
          return next({
            ...action,
            type: 'OPEN_NEW_NOTIFICATION',
            payload: { type: 'error', message: 'Can not update cart' }
          });
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        window.localStorage.removeItem('cart');
        return next({
          ...action,
          type: 'UPDATE_CART_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }
      case 'REMOVE_PRODUCT': {
        const newCart = await ServicesCart.deleteProductFromCart(action.payload.productId);
        if (!newCart) {
          return next({
            ...action,
            type: 'OPEN_NEW_NOTIFICATION',
            payload: { type: 'error', message: 'Can not remove product from cart' }
          });
        }
        newCart.totalCartQuantity = ServicesCart.getCartQuantity(newCart.products);
        newCart.totalCartPrice = ServicesCart.getTotalCartPrice(newCart.products);
        return next({
          ...action,
          type: 'REMOVE_PRODUCT_SUCCESS',
          payload: { ...action.payload, newCart }
        });
      }
      case 'REMOVE_CART': {
        const newCart = await ServicesCart.deleteCartFromDB();
        if (!newCart) {
          return next({
            ...action,
            type: 'OPEN_NEW_NOTIFICATION',
            payload: { type: 'error', message: 'Can not remove cart' }
          });
        }
        return next({
          type: 'CLEAR_CART',
        });
      }

      case 'SET_FAVORITES_FROM_DB': {
        const favorites = await getFavoriteProducts();
        return favorites
          ? next({
            type: 'UPDATE_FAVORITES_SUCCESS',
            payload: favorites.products
          })
          : next({
            type: 'UPDATE_FAVORITES_SUCCESS',
            payload: []
          });
      }

      case 'SET_CUSTOMER_DATA_FROM_DB': {
        const customer = await getCustomer();
        return customer
          ? next({
            type: 'FETCH_CUSTOMER_DATA_SUCCESS',
            payload: customer.data
          })
          : next({
            type: 'FETCH_CUSTOMER_DATA_FAILURE',
            payload: {}
          });
      }

      default:
        return next(action);
    }
  }
  return next(action);
};

export default db;
