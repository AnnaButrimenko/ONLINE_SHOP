import React from 'react';
import PropTypes from 'prop-types';
import {
  FormLabel,
  TextField
} from '@material-ui/core';

const renderTextField = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
    placeholder,
    classes,
  } = props;

  return (
    <TextField
      type={type}
      name={input.name}
      variant="outlined"
      fullWidth
      id={input.name}
      error={!!(touched && error)}
      helperText={touched && error}
      className={classes.root}
      placeholder={placeholder || null}
      {...input}
      label={
        (
          <FormLabel
            className={classes.root}
            required
          >
            {label}
          </FormLabel>
        )
      }
    />
  )
};

export default renderTextField;

renderTextField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.string]).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

renderTextField.defaultProps = {
  placeholder: '',
  type: ''
};