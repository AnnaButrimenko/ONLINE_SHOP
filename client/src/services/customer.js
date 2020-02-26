import axios from 'axios';

const getCustomer = () => axios
  .get('/api/customers/customer')
  .then((loggedInCustomer) => loggedInCustomer)
  .catch((err) => err);
export default getCustomer
