import { CURRENT_PRODUCT } from './actionTypes';

export default function getCurrentProduct(currentProduct) {
  return {
    type: CURRENT_PRODUCT,
    payload: {
      currentProduct
    }
  }
}