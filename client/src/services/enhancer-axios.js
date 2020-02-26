import axios from 'axios';

export default function enhancerAxios(url, options = { method: 'get' }, data = {}) {
  axios.defaults.headers = axios.defaults.headers || {};
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const token = window.localStorage.getItem('token');
  if (!axios.defaults.headers.common.Authorization) {
    axios.defaults.headers.common.Authorization = token ?? '';
  }

  return (axios({
    method: `${options.method}`,
    url: `${url}`,
    data
  })
    .then((response) => response.data)
    .catch((err) => err)
  )
}
