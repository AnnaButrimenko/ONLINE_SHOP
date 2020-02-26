import {
  SEND_COMMENT,
  GET_PRODUCT_COMMENTS,
  POST_COMMENTS_REQUEST,
  RESET_COMMENTS_LIST
} from './actionTypes';

export function sendComment(comment) {
  return {
    type: SEND_COMMENT,
    payload: { comment }
  }
}

export function commentsRequest(productId) {
  return {
    type: POST_COMMENTS_REQUEST,
    payload: { productId }
  }
}

export function commentsLoaded(comments) {
  return {
    type: GET_PRODUCT_COMMENTS,
    payload: { comments }
  }
}

export function resetCommentsList() {
  return {
    type: RESET_COMMENTS_LIST
  }
}
