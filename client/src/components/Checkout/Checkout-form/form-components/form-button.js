import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';

import useStyles from '../../_checkout';

const FormButton = ({ color, btnText, type, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      type={type}
      size="large"
      variant="contained"
      color={color}
      disableElevation
      className={classes.btn}
      onClick={onClick}
    >
      {btnText}
    </Button>
  )
};

export default FormButton;

FormButton.propTypes = {
  color: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

FormButton.defaultProps = {
  type: '',
  onClick: () => {
  }
};
