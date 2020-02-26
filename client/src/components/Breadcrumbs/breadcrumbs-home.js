import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import useStyles from './_breadcrumbs';

const BreadcrumbsHome = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.item}>
      <MenuItem className={classes.menuItem} component="span">
        <HomeIcon />
      </MenuItem>
    </Link>
  )
};

export default BreadcrumbsHome;