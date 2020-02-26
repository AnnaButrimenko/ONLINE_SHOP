import {
  SET_CATALOG_FROM_DB,
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  CATALOG_LOCATION
} from './actionTypes'

const getCatalogFromDB = () => ({
  type: SET_CATALOG_FROM_DB
});

const catalogRequested = () => ({
  type: FETCH_CATALOG_REQUEST
});

const catalogLoaded = (allCategories) => ({
  type: FETCH_CATALOG_SUCCESS,
  payload: {
    catalog: {
      allCategories,
      mainCategories: allCategories.filter((category) => category.parentId === 'null')
    },
    error: null
  }
});

const catalogError = (error) => ({
  type: FETCH_CATALOG_FAILURE,
  payload: {
    catalog: {},
    error
  }
});

const catalogLocation = (category) => ({
  type: CATALOG_LOCATION,
  payload: category
})

export {
  getCatalogFromDB,
  catalogRequested,
  catalogLoaded,
  catalogError,
  catalogLocation
}