import React from 'react';
import { Link } from 'react-router-dom';

import { Divider, Grid } from '@material-ui/core';
import RoutesName from '../../../routes-list';

import useStyles from './_main-text';

const MainText = () => {
  const classes = useStyles();
  return (
    <Grid xs={12} md={5} item container wrap="nowrap" alignItems="flex-start">
      <Link to={RoutesName.home}>
        <img
          src={`${process.env.PUBLIC_URL}/img/wmf-footer.jpg`}
          alt="WMF"
          className={classes.img}
        />
      </Link>
      <div>
        <h2 className={classes.title}>The culinary experts</h2>
        <Divider />
        <p className={classes.text}>
          For more than 160 years, the brands that make up the WMF Group have represented the
          best in cooking, drinking and dining.
        </p>
      </div>
    </Grid>
  )
}

export default MainText