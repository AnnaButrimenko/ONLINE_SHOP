import React from 'react';
import { Input, FormLabel, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoutesName from '../../../routes-list';

export default function SignInForm (props) {
  const {
    classes,
    handleOnChangeLogin,
    eyeToggle,
    handleOnChangePassword,
    togglePasswordMask,
    handleClick,
    handleRegistrationRoute
  } = props;
  return (
    <form className={classes.passwordForm} noValidate onSubmit={handleClick}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label={(
          <FormLabel component="div" className={classes.labelText} required>Email Address</FormLabel>
        )}
        name="email"
        autoComplete="email"
        autoFocus
        onBlur={handleOnChangeLogin}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label={(
          <FormLabel component="div" className={classes.labelText} required>Password</FormLabel>
        )}
        type={eyeToggle ? 'password' : 'text'}
        id="password"
        autoComplete="current-password"
        onChange={handleOnChangePassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={togglePasswordMask}>
                {eyeToggle ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Input value="Sign In" fullWidth disableUnderline color="primary" type="submit" className={classes.submit} />
      <Link className={classes.text} to={RoutesName.signUp} onClick={handleRegistrationRoute}>
        Don&#8242;t have an account?
        <strong> Sign Up </strong>
      </Link>
    </form>
  )
}

SignInForm.propTypes = {
  togglePasswordMask: PropTypes.func.isRequired,
  handleOnChangeLogin: PropTypes.func.isRequired,
  handleOnChangePassword: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  handleRegistrationRoute: PropTypes.func.isRequired,
  eyeToggle: PropTypes.bool.isRequired,
};
