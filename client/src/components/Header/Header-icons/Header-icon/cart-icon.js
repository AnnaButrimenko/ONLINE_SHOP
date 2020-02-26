import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { Link } from 'react-router-dom';
import { Badge, IconButton, MenuItem } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import RoutesName from '../../../../routes-list';
import useStyles from '../../_header';

const CartIcon = ({ onClick }) => {
  const classes = useStyles();
  const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);

  return (
    <MenuItem className={classes.headerMenuItem} onClick={onClick}>
      <Link to={RoutesName.cart}>
        <IconButton edge="end" aria-label="card" className={classes.iconButton}>
          <Badge badgeContent={totalCartQuantity.toString()} color="error">
            <ShoppingCartOutlinedIcon fontSize="large" className={classes.iconsStyle} />
          </Badge>
        </IconButton>
        <span className={classes.menuTitle}>Cart</span>
      </Link>
    </MenuItem>
  )
};

export default CartIcon;

CartIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
