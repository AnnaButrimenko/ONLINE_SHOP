import axios from 'axios';

export default function getMainSlides() {
  return axios
    .get('/slides')
}
