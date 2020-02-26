import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

export default function getProductsByItemNo(itemNo) {
  return axios
    .get(`/api/products/${itemNo}`)
    .then((product) => product)
    .catch((err) => alert(err.message));
}
