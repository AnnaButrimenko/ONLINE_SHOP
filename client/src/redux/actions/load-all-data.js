import axios from 'axios'
import { getCatalogFromDB } from './categories'
import { loginLoaded, fetchCustomerData } from './user'
import { mergeDBWithLocalStorage } from './CartActions'
import { getFavoritesFromDB } from './favorites'
import { FETCH_LOAD_REQUEST, FETCH_LOAD_RESPONSE } from './actionTypes'

const fetchRequest = () => ({
  type: FETCH_LOAD_REQUEST
});

const fetchResponse = () => ({
  type: FETCH_LOAD_RESPONSE
});

function loadAllData() {
  if (process.env.NODE_ENV !== 'production') {
    axios.defaults.baseURL = 'http://localhost:5000';
  }
  return (dispatch) => Promise.all([
    dispatch(fetchRequest()),
    dispatch(getCatalogFromDB()),
    dispatch(loginLoaded()),
    dispatch(fetchCustomerData()),
    dispatch(mergeDBWithLocalStorage()),
    dispatch(getFavoritesFromDB()),
  ]).then(() => { dispatch(fetchResponse()) })
}

function loadAllDataAfterLogin() {
  return (dispatch) => Promise.all([
    dispatch(fetchRequest()),
    dispatch(loginLoaded()),
    dispatch(fetchCustomerData()),
    dispatch(mergeDBWithLocalStorage()),
    dispatch(getFavoritesFromDB()),
  ]).then(() => { dispatch(fetchResponse()) })
}

export {
  loadAllData,
  loadAllDataAfterLogin,
  fetchResponse,
  fetchRequest
}