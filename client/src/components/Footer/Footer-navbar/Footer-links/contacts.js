import React from 'react';
import { Link } from 'react-router-dom';

import { Divider, Grid } from '@material-ui/core';
import RoutesName from '../../../../routes-list';

import useStyles from './_styles';

const FooterContactsLink = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={5}>
      <Grid container item direction="column">
        <h2 className={classes.title}>Contacts</h2>
        <Divider />
        <Link to={RoutesName.contacts} className={classes.links}> Contact list </Link>
        <span>Professional Contacts</span>
        <span>WMF Coffeemachines</span>
        <span>WMF Professional Hotel Equipment</span>
        <span>+38 (044) 123-456-789</span>
        <span>+38 (050) 123-456-789</span>
        <span>Mo-Fr: 08:00 - 18:00</span>
      </Grid>
    </Grid>
  )
}

export default FooterContactsLink