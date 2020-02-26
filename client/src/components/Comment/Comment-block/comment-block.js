import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { PropTypes } from 'prop-types';
import useStyles from './_comment-block';

const CommentBlock = ({ currentUser, date, commentText }) => {
  const classes = useStyles();

  return (
    <Box className={classes.comment} mb={2}>
      <Typography variant="subtitle2">
        {currentUser.firstName}
        &nbsp;
        {currentUser.lastName}
      </Typography>
      <Typography variant="caption" paragraph className={classes.commentTitle}>{date}</Typography>
      <Typography variant="body1" align="justify" className={classes.commentBody}>{commentText}</Typography>
    </Box>
  )
};

CommentBlock.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]).isRequired,
  date: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
};

export default CommentBlock;
