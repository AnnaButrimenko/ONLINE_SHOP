import {
  sendComment,
  commentsRequest,
  commentsLoaded,
  resetCommentsList
} from './comments'
import * as t from './actionTypes'

describe('comments actions', () => {
  it('sendComment()', () => {
    const expectedAction = {
      type: t.SEND_COMMENT,
      payload: {
        comment: '123'
      }
    }
    expect(sendComment('123')).toEqual(expectedAction)
  })

  it('commentsRequest()', () => {
    const expectedAction = {
      type: t.POST_COMMENTS_REQUEST,
      payload: {
        productId: '123'
      }
    }
    expect(commentsRequest('123')).toEqual(expectedAction)
  })

  it('commentsLoaded()', () => {
    const expectedAction = {
      type: t.GET_PRODUCT_COMMENTS,
      payload: {
        comments: '123'
      }
    }
    expect(commentsLoaded('123')).toEqual(expectedAction)
  })

  it('resetCommentsList()', () => {
    expect(resetCommentsList()).toEqual({
      type: t.RESET_COMMENTS_LIST
    })
  })
})