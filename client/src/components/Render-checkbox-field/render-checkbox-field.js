import React from 'react';
import { PropTypes } from 'prop-types';
import { Checkbox, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';

import useStyles from '../Sign-up/Sign-up-footer/_sign-up-footer';

const RenderCheckboxField = ({ input, name, meta: { touched, error }, ...rest }) => {
  const classes = useStyles();

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
      label={(
        <FormLabel className={classes.labelAgreement}>
          I agree that the WMF Group may create a personal profile based on my
          personal data, purchasing and usage behaviour, in order to better tailor
          advertising and web offers to my personal interests and to send me these
          offers and a newsletter on products, innovations and special promotions by
          e-mail. You may revoke your consent at any time, e.g. in your myWMF customer
          account in the “My communication” section.
          {
            touched && error &&
            <FormHelperText>{touched && error}</FormHelperText>
          }
        </FormLabel>
      )}
    />
  )
};

export default RenderCheckboxField;

RenderCheckboxField.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]).isRequired,
  name: PropTypes.string,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool, PropTypes.string]).isRequired,
};

RenderCheckboxField.defaultProps = {
  name: '',
};