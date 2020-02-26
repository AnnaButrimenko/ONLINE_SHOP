import favoritesReducer, { initialState } from './favorites'
import * as t from '../actions/actionTypes'

describe('favorites reducer', () => {
  it('UPDATE_FAVORITES_SUCCESS', () => {
    const action = {
      type: t.UPDATE_FAVORITES_SUCCESS,
      payload: {
        favorites: '123'
      }
    }
    expect(favoritesReducer(initialState, action)).toEqual({
      ...initialState,
      favorites: action.payload,
      favoritesLoading: false
    })
  })

  it('CLEAR_FAVORITES', () => {
    const action = {
      type: t.CLEAR_FAVORITES,
    }
    expect(favoritesReducer(initialState, action)).toEqual({
      ...initialState,
      favorites: [],
      favoritesLoading: false
    })
  })
})