import { GET_MAIN_SLIDES } from './actionTypes'

const slidesToFetch = (data) => ({
  type: GET_MAIN_SLIDES,
  payload: data
});

export default slidesToFetch;
