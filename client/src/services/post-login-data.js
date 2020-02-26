import axios from 'axios';

export default function postLoginData (userData) {
  return axios
    .post('/api/customers/login', userData)
}
