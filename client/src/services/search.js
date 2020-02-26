import axios from 'axios';

export default function getSearchedProducts(searchedValue) {
  const searchItem = {
    query: searchedValue
  };

  return axios
    .post('/api/products/search', searchItem)
    .then((response) => response.data)
    .catch((error) => alert(error.message))
}