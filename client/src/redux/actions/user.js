import jwtDecode from 'jwt-decode';
import axios from 'axios'
import {
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_SUCCESS,
  SET_CUSTOMER_DATA_FROM_DB,
  FETCH_ORDERS_SUCCESS
} from './actionTypes'

const loginLoaded = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return {
      type: FETCH_LOGIN_ERROR,
    }
  }

  const decoded = jwtDecode(token);
  const { firstName, lastName, exp } = decoded;

  const time = new Date().getTime() / 1000;

  if (time < exp) {
    if (!axios.defaults.headers.common.Authorization) {
      axios.defaults.headers.common.Authorization = token ?? '';
    }
    if (process.env.NODE_ENV !== 'production') {
      axios.defaults.baseURL = 'http://localhost:5000';
    }
    return {
      type: FETCH_LOGIN_SUCCESS,
      payload: {
        loggedIn: true,
        token,
        firstName,
        lastName
      }
    }
  }

  return {
    type: FETCH_LOGIN_ERROR,
  }
};

const fetchCustomerData = () => ({
  type: SET_CUSTOMER_DATA_FROM_DB
});

const orders = (data) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: {
    orders: data
  }
});

export {
  loginLoaded,
  fetchCustomerData,
  orders
}
