import axios from 'axios';

export function getFavoriteProducts() {
  return axios.get('/api/wishlist')
    .then((response) => response.data)
    .catch((err) => err);
}

export function addFavoriteProduct(itemId) {
  return axios
    .put(`/api/wishlist/${itemId}`)
    .then((updatedWishlist) => updatedWishlist.data)
    .catch((err) => err);
}

export function deleteFavoriteProduct(itemId) {
  return axios.delete(`/api/wishlist/${itemId}`)
    .then((response) => response.data)
    .catch((err) => err);
}

export function deleteFavoritesList() {
  return axios.delete('/api/wishlist')
}