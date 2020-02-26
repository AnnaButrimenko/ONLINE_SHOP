import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart';
import categoriesReducer from './categories';
import productsReducer from './products';
import filterReducer from './filter';
import user from './user';
import notification from './notification';
import favoritesReducer from './favorites';
import loadDataReducer from './load-data';
import carouselReducer from './carousel';
import slides from './slides'
import passwordForm from './password-form';
import currentProduct from './currentProduct';
import comments from './comments';
import searchReducer from './search';

export default combineReducers({
  cart,
  categoriesReducer,
  productsReducer,
  form: formReducer,
  filterReducer,
  notification,
  user,
  favoritesReducer,
  isFetchingLoadData: loadDataReducer,
  carouselReducer,
  slides,
  passwordForm,
  currentProduct,
  commentsReducer: comments,
  searchReducer
})
