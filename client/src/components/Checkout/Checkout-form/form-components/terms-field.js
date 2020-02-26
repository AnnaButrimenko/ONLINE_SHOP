import React from 'react';
import { PropTypes } from 'prop-types';
import { Checkbox, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';

import ModalInfoWindow from '../../../Info-window/info-window';

import useStyles from '../../../Sign-up/Sign-up-footer/_sign-up-footer';

const RenderCheckboxField = ({ input, name, meta: { touched, error } }) => {
  const classes = useStyles();

  const formLabelText = () => (
    <FormLabel className={classes.labelAgreement}>
      I have seen
      &nbsp;
      <ModalInfoWindow
        infoTitle="General Terms and Conditions"
        infoText="General Terms and Conditions text..................................."
      >
        <span className={classes.link}>General Terms and Conditions</span>
      </ModalInfoWindow>
      &nbsp;
      and the
      &nbsp;
      <ModalInfoWindow
        infoTitle="Instructions on the right of withdrawal"
        infoText="Instructions on the right of withdrawal text.................................."
      >
        <span className={classes.link}>Instructions on the right of withdrawal.</span>
      </ModalInfoWindow>
      {
        touched && error &&
        <FormHelperText>{touched && error}</FormHelperText>
      }
    </FormLabel>
  );

  return (
    <FormControlLabel
      className={classes.root}
      control={(
        <Checkbox
          className={classes.radioLabel}
          checked={!!input.value}
          onChange={input.onChange}
        />
      )}
      label={formLabelText()}
    />
  )
};

export default RenderCheckboxField;

RenderCheckboxField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  name: PropTypes.string,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.string]).isRequired,
  touched: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.string),
};

RenderCheckboxField.defaultProps = {
  error: {},
  touched: false,
  name: ''
};
