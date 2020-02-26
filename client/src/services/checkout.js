import axios from 'axios';

export default function placeOrderToDB(newOrder) {
  return axios
    .post('/api/orders', newOrder)
    .then((response) => {
      if (response.data.productAvailibilityInfo) {
        return {
          orderIsPlaced: false,
          placedOrder: {},
          message: response.data.message
        }
      }
      return {
        orderIsPlaced: true,
        placedOrder: response.data.order,
        message: ''
      }
    })
    .catch((error) => {
      alert(error.response.message);
      return error
    })
}