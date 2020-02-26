import React from 'react';
import { Link } from 'react-router-dom';

import { Divider, Grid } from '@material-ui/core';
import RoutesName from '../../../../routes-list';

import useStyles from './_styles';

const FooterAccountLink = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={4}>
      <Grid container item direction="column">
        <h2 className={classes.title}>Account</h2>
        <Divider />
        <Link to={RoutesName.signUp} className={classes.links}>Sign up</Link>
        <Link to={RoutesName.login} className={classes.links}>Sign in</Link>
        <Link to={RoutesName.cart} className={classes.links}>Shopping cart</Link>
      </Grid>
    </Grid>
  )
}

export default FooterAccountLink
