import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './_contact';

export default function Contact(props) {
  const classes = useStyles();
  const { icon, children } = props;
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
  children: PropTypes.node
};

Contact.defaultProps = {
  icon: null,
  children: null
};