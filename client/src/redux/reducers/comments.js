import {
  POST_COMMENTS_REQUEST,
  GET_PRODUCT_COMMENTS,
  SEND_COMMENT,
  RESET_COMMENTS_LIST
} from '../actions/actionTypes'

export const initialState = {
  commentsList: [],
  currentComment: {},
  productId: ''
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case POST_COMMENTS_REQUEST: {
      return {
        ...state,
        productId: action.payload.productId
      }
    }
    case GET_PRODUCT_COMMENTS: {
      return {
        ...state,
        commentsList: action.payload.comments,
      }
    }
    case SEND_COMMENT: {
      return {
        ...state,
        currentComment: action.payload.currentComment
      }
    }
    case RESET_COMMENTS_LIST: {
      return {
        ...state,
        commentsList: []
      }
    }
    default:
      return state
  }
}
