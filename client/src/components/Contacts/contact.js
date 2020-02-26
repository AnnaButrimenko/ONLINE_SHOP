import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import useStyles from './_contact';

const Contact = ({ icon, children }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>{icon}</Grid>
        <Grid item>
          <span className={classes.contact}>{children}</span>
        </Grid>
      </Grid>
    </>
  )
}

Contact.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node.isRequired
};

Contact.defaultProps = {
  icon: null,
};

export default Contact;