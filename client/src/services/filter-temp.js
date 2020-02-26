import axios from 'axios';

const tempFilterData = () => axios('/api/products')
  .then((response) => response.data);

export default tempFilterData