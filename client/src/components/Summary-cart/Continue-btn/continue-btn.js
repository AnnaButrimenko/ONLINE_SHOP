import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid } from '@material-ui/core';
import RoutesName from '../../../routes-list';
import useStyles from './_continue-btn';

export default function ContinueBtn () {
  const classes = useStyles();
  const firstCategory = useSelector((state) => state.categoriesReducer.catalog.mainCategories[0]);

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item>
        <ArrowBackIosIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <Link to={`${RoutesName.products}/${firstCategory.id}`} className={classes.link}>
          <span className={classes.text}>Continue Shopping</span>
        </Link>
      </Grid>
    </Grid>
  )
}