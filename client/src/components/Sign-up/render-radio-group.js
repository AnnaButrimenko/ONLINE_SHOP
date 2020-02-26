import React from 'react';
import { PropTypes } from 'prop-types';

import { RadioGroup } from '@material-ui/core';

const renderRadioGroup = ({ input, name, classes, gender, setGender, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    value={gender}
    aria-label="gender"
    defaultValue="Male"
    className={classes.radioGender}
    name={name}
    onChange={(event, value) => {
      input.onChange(value);
      setGender(event.target.value);
    }}
  />
);

export default renderRadioGroup;

renderRadioGroup.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  name: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired,
};

renderRadioGroup.defaultProps = {
  name: ''
};