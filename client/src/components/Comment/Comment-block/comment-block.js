import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './_comment-block';

const CommentBlock = ({currentUser, date, commentText}) => {
  const classes = useStyles();

  return (
    <Box className={classes.comment} mb={2}>
      <Typography variant="subtitle2">
        {currentUser.firstName}
        {' '}
        {currentUser.lastName}
      </Typography>
      <Typography variant="caption" paragraph className={classes.commentTitle}>{date}</Typography>
      <Typography variant="body1" align="justify" className={classes.commentBody}>{commentText}</Typography>
    </Box>
  )
};

export default CommentBlock;