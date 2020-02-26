import {
  ADD_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
  UPDATE_CART_SUCCESS,
  CLEAR_CART
} from '../actions/actionTypes'

export const initialState = {
  products: [],
  totalCartQuantity: 0,
  totalCartPrice: 0
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
    case REMOVE_PRODUCT_SUCCESS:
    case UPDATE_CART_SUCCESS: {
      const { newCart } = action.payload;
      if (newCart) {
        return {
          ...state,
          ...newCart
        };
      }
    }

    case CLEAR_CART: {
      return {
        products: [],
        totalCartQuantity: 0,
        totalCartPrice: 0
      };
    }

    default:
      return { ...state };
  }
}