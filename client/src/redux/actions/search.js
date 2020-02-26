import { STORE_SEARCH_VALUE } from './actionTypes';

const storeSearchedValue = (searchedValue) => ({
  type: STORE_SEARCH_VALUE,
  payload: searchedValue
});

export default storeSearchedValue;