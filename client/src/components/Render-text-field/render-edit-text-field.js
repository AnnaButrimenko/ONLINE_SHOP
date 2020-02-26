import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, TextField } from '@material-ui/core';

import useStyles from '../Sign-up/Sign-up-form/_sign-up-form';

const RenderEditTextField = (props) => {
  const classes = useStyles();
  const {
    placeholder,
    label,
    type,
    defaultValue,
    meta: { touched, error },
    input: { name, value, onBlur, onChange, onFocus },
  } = props;

  return (
    <TextField
      type={type}
      name={name}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      id={name}
      error={!!(touched && error)}
      helperText={touched && error}
      onBlur={(event) => onBlur(event)}
      onFocus={(event) => onFocus(event)}
      onChange={(event) => onChange(event.target.value)}
      defaultValue={value || defaultValue}
      className={classes.root}
      label={(<FormLabel className={classes.root} required>{label}</FormLabel>)}
    />
  )
};

export default RenderEditTextField;

RenderEditTextField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.string]).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired
};

RenderEditTextField.defaultProps = {
  placeholder: ''
};