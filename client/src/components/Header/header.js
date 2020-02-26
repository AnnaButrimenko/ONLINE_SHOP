import React, { useState } from 'react'
import { AppBar, Toolbar, Menu, MenuItem, Box, Container, Divider } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderNavbar from '../Header-navbar/header-navbar';
import useStyles from './_header';
import HeaderIcons from './Header-icons/header-icons';
import MenuLogoIcons from './Header-icons/Header-icon/menu-and-logo-icons';

function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [drawer, setDrawer] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose()
  };
  const toggleDrawer = (open) => {
    setDrawer(open)
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    />
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      elevation={0}
    >
      <MenuItem component="div" className="header-login" onClick={handleProfileMenuOpen}>
        <img src={`${process.env.PUBLIC_URL}/img/header/my_wmf.png`} alt="" />
        <ArrowForwardIosIcon fontSize="small" alt="arrow_icon" />
      </MenuItem>
    </Menu>
  );

  const freeShippingMessage = (
    <Box className={classes.delivery}>
      <Container maxWidth="xl">
        <p className={classes.deliveryTitle}>Free shipping on all orders over &#8364;49</p>
      </Container>
    </Box>
  );

  const mainHeaderContent = (
    <AppBar position="sticky" top="0" color="inherit" elevation={0}>
      <Container maxWidth="xl" disableGutters className={classes.grow}>
        <Toolbar className={classes.justify}>
          <MenuLogoIcons mobileMenuId={mobileMenuId} toggleDrawer={toggleDrawer} />
          <HeaderNavbar drawer={drawer} toggleDrawer={toggleDrawer} />
          <HeaderIcons />
        </Toolbar>
      </Container>
      <Divider component="div" />
    </AppBar>
  );

  return (
    <>
      <CssBaseline />
      {freeShippingMessage}
      {mainHeaderContent}
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

export default Header;
