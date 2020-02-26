import axios from 'axios';

function getCommentsOfProducts(productId) {
  return axios
    .get(`/api/comments/product/${productId}`)
    .then((comments) => comments.data)
    .catch((err) => alert(err.message));
}

export default getCommentsOfProducts;
