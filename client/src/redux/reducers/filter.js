import {
  GET_FILTER_PRODUCTS,
  FETCH_FILTER_PARAMS_SUCCESS,
  FILTER_TYPE,
  FILTER_SORT,
  RESET_FILTERS,
  FILTER_INCREASE_PAGE
} from '../actions/actionTypes'

export const initialState = {
  filterResults: {
    color: [],
    brand: [],
    price: [0, 700]
  },
  filterParams: {
    colors: [],
    brands: [],
  },
  filterPages: {
    perPage: 6,
    startPage: 1
  },
  sort: {
    sortName: '',
    sortValue: ''
  },
  filterType: ''
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_PRODUCTS: {
      return {
        ...state,
        filterResults: action.payload,
        filterPages: {
          perPage: 6,
          startPage: 1
        },
      };
    }

    case FETCH_FILTER_PARAMS_SUCCESS:
      return {
        ...state,
        filterParams: {
          ...state.filterParams,
          [action.payload.filterTitle]: action.payload.params
        }
      };

    case FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload
      };

    case FILTER_SORT:
      return {
        ...state,
        sort: action.payload
      };
    case FILTER_INCREASE_PAGE:
      return {
        ...state,
        filterPages: { ...state.filterPages, startPage: state.filterPages.startPage + 1 }
      };

    case RESET_FILTERS:
      return {
        ...state,
        filterResults: {
          color: [],
          brand: [],
          price: [0, 700]
        },
        filterPages: {
          perPage: 6,
          startPage: 1
        },
        sort: {
          sortName: '',
          sortValue: ''
        }
      };

    default:
      return state
  }
}
