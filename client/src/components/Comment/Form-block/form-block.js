import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';

import { PropTypes } from 'prop-types';
import useStyles from './_form-block';

const FormBlock = (props) => {
  const {
    handleSubmit,
    commentText,
    focusHandler,
    blurHandler,
    commentTextHandler,
    buttonDisabled,
    cancelHandler
  } = props;

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Box align="center">
        <TextField
          id="outlined-multiline-static"
          multiline
          rows="4"
          value={commentText}
          variant="outlined"
          className={classes.field}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onChange={commentTextHandler}
        />
        <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.commentBtn}
            type="submit"
            disabled={buttonDisabled}
          >
            Send comment
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={`${classes.commentBtn} ${classes.cancelBtn}`}
            type="submit"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  )
};

FormBlock.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  commentText: PropTypes.string.isRequired,
  focusHandler: PropTypes.func.isRequired,
  blurHandler: PropTypes.func.isRequired,
  commentTextHandler: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  cancelHandler: PropTypes.func.isRequired
};

export default FormBlock;
