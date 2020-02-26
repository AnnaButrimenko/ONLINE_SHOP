import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

import RoutesName from '../../routes-list';
import { resetFilters } from '../../redux/actions/filter';

import useStyles from './_breadcrumbs';

const BreadcrumbsItem = ({ route, text }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Link
      to={`${RoutesName.products}/${route}`}
      className={classes.item}
      onClick={() => dispatch(resetFilters())}
    >
      <MenuItem className={classes.menuItem} component="span">
        {text}
      </MenuItem>
    </Link>
  )
};

export default BreadcrumbsItem;

BreadcrumbsItem.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};