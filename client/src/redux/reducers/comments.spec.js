import comments, { initialState } from './comments'
import * as t from '../actions/actionTypes'

describe('comments reducer', () => {
  it('POST_COMMENTS_REQUEST', () => {
    const action = {
      type: t.POST_COMMENTS_REQUEST,
      payload: {
        productId: '123'
      }
    }
    expect(comments(initialState, action)).toEqual({
      ...initialState,
      productId: action.payload.productId
    })
  })

  it('GET_PRODUCT_COMMENTS', () => {
    const action = {
      type: t.GET_PRODUCT_COMMENTS,
      payload: {
        comments: '123'
      }
    }
    expect(comments(initialState, action)).toEqual({
      ...initialState,
      commentsList: action.payload.comments
    })
  })

  it('SEND_COMMENT', () => {
    const action = {
      type: t.SEND_COMMENT,
      payload: {
        currentComment: '500 server error'
      },
    }
    expect(comments(initialState, action)).toEqual({
      ...initialState,
      currentComment: action.payload.currentComment
    })
  })

  it('RESET_COMMENTS_LIST', () => {
    const action = {
      type: t.RESET_COMMENTS_LIST,
    }
    expect(comments(initialState, action)).toEqual({
      ...initialState,
      commentsList: []
    })
  })
})