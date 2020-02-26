import React from 'react';
import PropTypes from 'prop-types';
import {
  FormLabel,
  TextField,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const renderPasswordField = (props) => {
  const {
    input,
    label,
    meta: { invalid, touched, error },
    classes,
    eyeToggle,
    togglePasswordMask
  } = props;

  return (
    <TextField
      type={eyeToggle ? 'password' : 'text'}
      name={input.name}
      variant="outlined"
      fullWidth
      id={label}
      error={!!(touched && error)}
      helperText={touched && error}
      {...input}
      className={invalid ? classes.invalidPassword : classes.root}
      label={
        (
          <FormLabel
            className={invalid ? classes.invalidPassword : classes.root}
            required
          >
            {label}
          </FormLabel>
        )
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePasswordMask}
            >
              {eyeToggle ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
};

export default renderPasswordField;

renderPasswordField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.string]).isRequired,
  eyeToggle: PropTypes.bool.isRequired,
  togglePasswordMask: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired
};
