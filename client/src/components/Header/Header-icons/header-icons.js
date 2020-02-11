import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Box, Divider, useTheme } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Search from '../../Search/search';
import useStyles from '../_header';
import logoutAction from '../../../redux/actions/logout';
import AccountIcon from './Header-icon/account-icon';
import FavouritesIcon from './Header-icon/favourites-icon';
import CartIcon from './Header-icon/cart-icon';
import HeaderSearchIcon from './Header-icon/search-icon';

const HeaderIcons = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [searchIsShown, setSearchIsShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const totalCartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const { loggedIn } = useSelector((state) => state.user);
  const totalFavoritesQty = useSelector((state) => state.favoritesReducer.favorites.length);

  const dispatch = useDispatch();

  const closeModal = () => {
    setModalVisibility(false);
  };
  const handleClick = () => {
    setModalVisibility(true);
    setOpenTooltip(false);
  };
  const toggleSearch = () => {
    setSearchIsShow((prev) => !prev)
  };
  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };
  const toggleTooltipOpen = () => {
    setOpenTooltip((prev) => !prev);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleSearchAway = () => {
    setSearchIsShow(false);
    setOpenTooltip(false);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  }, [dispatch]);

  const anchorRef = useRef(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <ClickAwayListener onClickAway={handleSearchAway}>
      <Box className={classes.iconButtonBox}>
        {isMobile && <Search searchIsShown={searchIsShown} />}
        {isTablet && <Search searchIsShown />}
        {isDesktop && <Search searchIsShown={searchIsShown} />}
        <HeaderSearchIcon onClick={handleTooltipClose} toggleSearch={toggleSearch} />
        <Divider component="div" orientation="vertical" className={classes.dividerStyle} />
        <FavouritesIcon
          open={openTooltip}
          onClick={toggleTooltipOpen}
          onClose={handleTooltipClose}
          totalFavoritesQty={totalFavoritesQty}
        />
        <Divider component="div" orientation="vertical" className={classes.dividerStyle} />
        <AccountIcon
          handleClick={handleClick}
          open={open}
          handleClose={handleClose}
          loggedIn={loggedIn}
          anchorRef={anchorRef}
          closeModal={closeModal}
          handleListKeyDown={handleListKeyDown}
          handleLogout={handleLogout}
          handleToggle={handleToggle}
          modalIsVisible={modalIsVisible}
        />
        <Divider component="div" orientation="vertical" className={classes.dividerStyle} />
        <CartIcon onClick={handleTooltipClose} totalCartQuantity={totalCartQuantity} />
      </Box>
    </ClickAwayListener>
  )
};

export default HeaderIcons;