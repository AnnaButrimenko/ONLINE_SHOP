import axios from 'axios';


function placeOrderToDB(newOrder) {
  console.log('newOrder =', newOrder);
  return axios
    .post('/orders', newOrder)
    .then((placedOrder) => {
      console.log('placedOrder =', placedOrder);
    })
    .catch((error) => {
      console.log('ERROR =', error.response.data);
    });
}

export {
  placeOrderToDB
}
