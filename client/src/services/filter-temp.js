import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const tempFilterData = () => {
  return axios('/products')
    .then((response) => response.data)
};

export {
  tempFilterData
}