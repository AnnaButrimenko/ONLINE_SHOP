import {
  favoritesUpdated,
  getFavoritesFromDB,
  favoritesCleared
} from './favorites'
import * as t from './actionTypes'

describe('favorites actions', () => {
  it('favoritesUpdated()', () => {
    const expectedAction = {
      type: t.UPDATE_FAVORITES_SUCCESS,
      payload: '123'
    }
    expect(favoritesUpdated('123')).toEqual(expectedAction)
  })

  it('favoritesCleared()', () => {
    expect(favoritesCleared()).toEqual({
      type: t.CLEAR_FAVORITES
    })
  })

  it('getFavoritesFromDB()', () => {
    expect(getFavoritesFromDB()).toEqual({
      type: t.SET_FAVORITES_FROM_DB
    })
  })
})