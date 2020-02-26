import React from 'react';
import { PropTypes } from 'prop-types';
import { FormLabel, TextField } from '@material-ui/core';

import useStyles from '../_checkout-form';

const RenderTextField = (props) => {
  const classes = useStyles();

  const {
    input: { onBlur, onChange, value },
    name,
    meta: { touched, error },
    label,
    defaultValue,
  } = props;

  return (
    <TextField
      name={name}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      className={classes.root}
      onBlur={onBlur}
      onChange={(event) => onChange(event.target.value)}
      defaultValue={!touched ? defaultValue : value}
      label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
    />
  )
};

export default RenderTextField;

RenderTextField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.string]).isRequired,
  touched: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired
};

RenderTextField.defaultProps = {
  error: {},
  touched: false,
  name: '',
  value: '',
  onBlur: () => {},
  onChange: () => {}
};