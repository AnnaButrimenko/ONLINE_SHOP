import axios from 'axios';

export default function putUserData(newUserData) {
  return axios
    .put('/api/customers', newUserData)
}
