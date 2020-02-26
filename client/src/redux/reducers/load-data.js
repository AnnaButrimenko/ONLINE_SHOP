import { FETCH_LOAD_REQUEST, FETCH_LOAD_RESPONSE } from '../actions/actionTypes'

export const initialState = {
  isFetching: true
};

export default function loadDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOAD_REQUEST:
      return { isFetching: true };
    case FETCH_LOAD_RESPONSE:
      return { isFetching: false };
    default: return { ...state };
  }
}