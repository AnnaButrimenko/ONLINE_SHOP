import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import FormBlock from './Form-block/form-block';
import postNewComment from '../../services/post-comment';
import getCommentsOfProducts from '../../services/get-comments-of-product';
import {
  commentsLoaded,
  commentsRequest,
  resetCommentsList,
  sendComment
} from '../../redux/actions/comments';
import CommentMap from './Comment-map';

import LoginModal from '../Login-modal-window/login-modal-window';
import useStyles from './_comment';

const Comment = (props) => {
  const {
    currentProduct: { _id: thisId, name }, sendNewComment, fetchComments, commentsList,
    userLoggedIn, loaded
  } = props;
  const classes = useStyles();

  const defaultText = 'Enter here your comment...';
  const [addComment, setComment] = useState(false);
  const [commentText, setCommentText] = useState(defaultText);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [addCommentDisabled, setAddCommentDisabled] = useState(false);
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [btnAddComment, setBthAddComment] = useState(true);
  const [isError, setIsError] = useState(null);

  const closeModal = () => {
    setModalVisibility(false);
  };

  const getComments = useCallback(() => {
    fetchComments(thisId);
    getCommentsOfProducts(thisId)
      .then((comments) => loaded(comments))
      .catch((error) => setIsError(error.message))
  }, [fetchComments, loaded, thisId]);

  const commentHandler = () => {
    if (userLoggedIn) {
      setComment(true);
      setAddCommentDisabled(false);
      setBthAddComment(false);
    } else {
      setModalVisibility(true);
    }
  };

  const focusHandler = () => {
    if (commentText === defaultText) {
      setCommentText('');
    }
  };

  const commentTextHandler = (event) => {
    setCommentText(event.target.value);
    (event.target.value.length && !findSpaces(event.target.value))
      ? setButtonDisabled(false)
      : setButtonDisabled(true);
  };

  const blurHandler = () => {
    if (!commentText) {
      setCommentText(defaultText);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment(false);
    const currentDate = getCurrentDate();
    const newComment = {
      product: thisId,
      content: commentText,
      date: currentDate
    };

    sendNewComment(newComment, thisId);
    postNewComment(newComment)
      .then((response) => {
        if (response.statusText === 'OK') {
          getComments();
        }
      })
      .catch((error) => setIsError(error.message));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const hours = formatDate(today.getHours());
    const minutes = formatDate(today.getMinutes());
    const day = formatDate(today.getDate());
    const month = formatDate(today.getMonth());
    const year = today.getFullYear();
    return `${hours}:${minutes} ${day}/${month}/${year}`;
  };

  const formatDate = (number) => {
    let formattedNumber;
    (number.toString().length === 1) ? (formattedNumber = `0${number}`) : formattedNumber = number;
    return formattedNumber;
  };

  const cancelHandler = () => {
    setComment(false);
    setBthAddComment(true);
  };

  const findSpaces = (text) => !!text.match(/^(\s+)$/g);

  return (
    <Box component="div" mt={2} mb={3} align="center">
      <Typography
        variant="h6"
        component="h4"
        align="center"
        className={classes.title}
      >
        {name}
      </Typography>
      {btnAddComment && (
        <Button
          variant="contained"
          color="primary"
          disabled={addCommentDisabled}
          className={classes.commentBtn}
          onClick={commentHandler}
        >
          Add comment
        </Button>
      )}
      {isError && (
        <Typography
          variant="body1"
          component="p"
          align="center"
          className={classes.error}
        >
          {isError}
        </Typography>
      )}

      {addComment && (
        <FormBlock
          handleSubmit={handleSubmit}
          commentText={commentText}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          commentTextHandler={commentTextHandler}
          buttonDisabled={buttonDisabled}
          cancelHandler={cancelHandler}
        />
      )}
      <Grid container direction="column-reverse" alignItems="center">
        {commentsList &&
        <CommentMap commentsList={commentsList} />}
      </Grid>
      {!userLoggedIn && <LoginModal onModalClose={closeModal} open={modalIsVisible} />}
    </Box>
  )
};

const mapStateToProps = (state) => ({
  commentsList: state.commentsReducer.commentsList,
  productId: state.commentsReducer.productId,
  userLoggedIn: state.user.loggedIn
});

const mapDispatchToProps = (dispatch) => ({
  sendNewComment: (comment) => dispatch(sendComment(comment)),
  fetchComments: (productId) => dispatch(commentsRequest(productId)),
  loaded: (comments) => dispatch(commentsLoaded(comments)),
  reset: () => dispatch(resetCommentsList())
});

Comment.propTypes = {
  currentProduct: PropTypes.oneOfType([PropTypes.object]).isRequired,
  sendNewComment: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  commentsList: PropTypes.oneOfType([PropTypes.array]).isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
  loaded: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
