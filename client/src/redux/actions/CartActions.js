export function addProductToCart (product, quantity) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      product,
      quantity
    }
  }
}
export function removeProductFromCart (productId) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      productId
    }
  }
}
export function setProductQuantity (productId, quantity) {
  return {
    type: 'SET_PRODUCT_QUANTITY',
    payload: {
      productId,
      quantity
    }
  }
}

export function mergeDBWithLocalStorage () {
  return {
    type: 'MERGE_CART',
  }
}

export function clearCart () {
  return {
    type: 'CLEAR_CART',
  }
}
export function removeCart () {
  return {
    type: 'REMOVE_CART',
  }
}