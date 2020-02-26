import axios from 'axios';

export default function putPassword(passwords) {
  return axios
    .put('/api/customers/password', passwords)
}
