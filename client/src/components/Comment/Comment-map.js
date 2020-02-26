import React from 'react';
import { PropTypes } from 'prop-types';

import CommentBlock from './Comment-block/comment-block';

const CommentMap = ({ commentsList }) => (
  <>
    {
      commentsList.map((comment) => (
        <CommentBlock
          key={comment._id + comment.data}
          currentUser={comment.customer}
          date={comment.date}
          commentText={comment.content}
        />
      ))
    }
  </>
);

CommentMap.propTypes = {
  commentsList: PropTypes.oneOfType([PropTypes.array]).isRequired
};

export default CommentMap;
