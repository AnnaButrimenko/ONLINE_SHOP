import axios from 'axios';

export default function getOrders() {
  return axios.get('/api/orders')
    .then((response) => response.data)
}
