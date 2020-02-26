import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  CATALOG_LOCATION
} from '../actions/actionTypes'

export const initialState = {
  catalog: {
    allCategories: [],
    mainCategories: [],
  },
  error: null,
  catalogLoading: true,
  catalogLocation: ''
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATALOG_REQUEST:
      return {
        ...state,
        catalog: {},
        error: null,
        catalogLoading: true
      };

    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        catalog: action.payload.catalog,
        error: null,
        catalogLoading: false,
      };

    case FETCH_CATALOG_FAILURE:
      return {
        ...state,
        catalog: {},
        error: action.payload.error,
        catalogLoading: false
      };

    case CATALOG_LOCATION:
      return {
        ...state,
        catalogLocation: action.payload
      };

    default: {
      return state
    }
  }
}