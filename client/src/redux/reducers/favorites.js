import { UPDATE_FAVORITES_SUCCESS, CLEAR_FAVORITES } from '../actions/actionTypes'

export const initialState = {
  favorites: [],
  error: null,
  favoritesLoading: true
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FAVORITES_SUCCESS:
      return {
        favorites: action.payload,
        error: null,
        favoritesLoading: false
      };

    case CLEAR_FAVORITES:
      return {
        favorites: [],
        error: null,
        favoritesLoading: false
      };

    default:
      return state
  }
}