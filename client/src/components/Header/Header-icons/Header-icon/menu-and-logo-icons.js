import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoutesName from '../../../../routes-list';

import useStyles from '../../_header';

const MenuLogoIcons = ({ toggleDrawer, mobileMenuId }) => {
  const classes = useStyles();

  const burgerMenu = () => (
    <IconButton
      onClick={() => toggleDrawer(true)}
      edge="start"
      className={classes.menuButton}
      aria-label="show more"
      aria-controls={mobileMenuId}
      aria-haspopup="true"
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  );

  const logoIcon = () => (
    <Link to={RoutesName.home}>
      <IconButton edge="start" className={classes.logoIcon}>
        <img
          src={`${process.env.PUBLIC_URL}/img/header/wmf-logo-30x35.svg`}
          alt="logo"
          className="header-logo"
        />
      </IconButton>
    </Link>
  );

  return (
    <Box className={classes.boxLogo}>
      {burgerMenu()}
      {logoIcon()}
    </Box>
  )
};

export default MenuLogoIcons

MenuLogoIcons.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  mobileMenuId: PropTypes.string.isRequired
};
