import { SORT_CARDS } from './actionTypes';

function sendSortingProducts(sortedProducts, type) {
  return {
    type: SORT_CARDS,
    payload: {
      sortedProducts,
      type
    }
  }
}

export default sendSortingProducts;
