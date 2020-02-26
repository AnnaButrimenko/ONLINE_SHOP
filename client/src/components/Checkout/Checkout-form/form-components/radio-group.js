import React from 'react';
import { PropTypes } from 'prop-types';
import { FormHelperText, RadioGroup } from '@material-ui/core';

import useStyles from './_form-components';

const RenderRadioGroup = (props) => {
  const classes = useStyles();
  const { input, meta: { touched, error }, children, gender } = props;

  return (
    <>
      <RadioGroup
        aria-label={input.name}
        className={classes[input.name]}
        name={input.name}
        defaultValue={gender || ''}
        onChange={(event, value) => input.onChange(value)}
      >
        {children}
      </RadioGroup>
      {
        (touched && error) &&
        <FormHelperText className={classes.radioErrorMsg}>{error}</FormHelperText>
      }
    </>
  )
};

export default RenderRadioGroup;

RenderRadioGroup.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.string]).isRequired,
  touched: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  gender: PropTypes.string
};

RenderRadioGroup.defaultProps = {
  error: {},
  touched: false,
  gender: ''
};