import { STORE_SEARCH_VALUE } from '../actions/actionTypes';

export const initialState = {
  searchedValue: ''
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_SEARCH_VALUE:

      return {
        searchedValue: action.payload
      };

    default:
      return {
        ...state
      }
  }
}