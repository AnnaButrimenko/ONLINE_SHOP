import { GET_MAIN_SLIDES } from '../actions/actionTypes'

export const initialState = {
  mainSlides: []
};

const slides = (state = initialState, action) => {
  if (action.type === GET_MAIN_SLIDES) {
    return {
      ...state,
      mainSlides: action.payload
    }
  }
  return state;
};

export default slides;
