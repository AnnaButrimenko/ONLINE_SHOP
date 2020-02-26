import React from 'react';
import { Link } from 'react-router-dom';

import { Divider, Grid } from '@material-ui/core';
import RoutesName from '../../../../routes-list';

import useStyles from './_styles';

const FooterCompanyLink = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={3}>
      <Grid container item direction="column">
        <h2 className={classes.title}>Company</h2>
        <Divider />
        <Link to={RoutesName.home} className={classes.links}>Home</Link>
        <Link to={RoutesName.aboutUs} className={classes.links}>About us</Link>
      </Grid>
    </Grid>
  )
}

export default FooterCompanyLink