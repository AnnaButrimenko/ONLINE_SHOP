import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './_breadcrumbs';

const BreadcrumbsSearch = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.menuItem} component="span">
      Search
    </Typography>
  )
};

export default BreadcrumbsSearch;