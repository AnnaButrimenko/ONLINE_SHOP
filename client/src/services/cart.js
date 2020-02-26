import enhancerAxios from './enhancer-axios';

export function getCart() {
  return enhancerAxios('/api/cart', { method: 'get' });
}

export function addProductToCart(productId) {
  return enhancerAxios(`/api/cart/${productId}`, { method: 'put' });
}
export function updateCart(updatedCart) {
  return enhancerAxios('/api/cart', { method: 'put' }, updatedCart);
}
export function deleteProductFromCart(productId) {
  return enhancerAxios(`/api/cart/${productId}`, { method: 'delete' });
}
export function deleteCartFromDB() {
  return enhancerAxios('/api/cart', { method: 'delete' });
}

export function getCartQuantity (products) {
  return products.reduce(
    (totalQuantity, current) => totalQuantity + current.cartQuantity,
    0
  );
}
export function getTotalCartPrice (products) {
  return products.reduce(
    (totalPrice, current) => totalPrice + (current.cartQuantity * current.product.currentPrice),
    0
  );
}
export function findProductById (products, productId) {
  if (products.length > 0) {
    return products.indexOf(products.find((el) => el.product._id === productId));
  }
  return -1;
}
