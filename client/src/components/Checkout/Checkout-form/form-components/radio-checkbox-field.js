import React from 'react';
import { PropTypes } from 'prop-types';
import { FormControlLabel, Radio } from '@material-ui/core';

import useStyles from '../_checkout-form';

const RadioCheckboxField = ({ name, value, label, gender }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      value={value}
      label={label}
      gender={gender}
      name={name}
      control={<Radio className={classes.radioLabel} />}
    />
  )
};

export default RadioCheckboxField;

RadioCheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  gender: PropTypes.string
};

RadioCheckboxField.defaultProps = {
  gender: ''
};