export const CURRENT_PRODUCT = 'CURRENT_PRODUCT';

const initialState = {
  currentProduct: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_PRODUCT: {
      return {
        ...state,
        currentProduct: action.payload.currentProduct
      }
    }
    default:
      return state
  }
}
