import { Grow, IconButton, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Link } from 'react-router-dom';
import React from 'react';
import PersonIcon from '@material-ui/icons/Person'
import PropTypes from 'prop-types';
import LoginModal from '../../../Login-modal-window/login-modal-window';
import RoutesName from '../../../../routes-list';
import useStyles from '../../_header';

const AccountIcon = (props) => {
  const classes = useStyles();
  const {
    handleToggle,
    handleClick,
    anchorRef,
    open,
    handleListKeyDown,
    handleClose,
    handleLogout,
    modalIsVisible,
    closeModal,
    loggedIn
  } = props;

  const profileMenu = () => (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
              >
                <Link to={RoutesName.personalData} className={classes.menuLink}>
                  <MenuItem component="div" onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to={RoutesName.myOrders} className={classes.menuLink}>
                  <MenuItem component="div" onClick={handleClose}>My orders</MenuItem>
                </Link>
                <MenuItem component="div" onClick={handleLogout} className={classes.menuLink}>
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  const personBtn = () => (
    <IconButton edge="end" className={classes.iconButton}>
      <PersonIcon fontSize="large" className={loggedIn ? classes.iconLoggedIn : classes.iconsStyle} />
    </IconButton>
  );

  return (
    <>
      <MenuItem
        className={classes.headerMenuItem}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={loggedIn ? handleToggle : handleClick}
        component=""
        ref={loggedIn ? anchorRef : null}
      >
        {personBtn()}
        <span className={classes.menuTitle}>{loggedIn ? 'My Account' : 'Login'}</span>
      </MenuItem>
      {loggedIn && profileMenu()}
      {!loggedIn && (<LoginModal onModalClose={closeModal} open={modalIsVisible} />)}
    </>
  )
};

export default AccountIcon;

AccountIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleListKeyDown: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  modalIsVisible: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  anchorRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};
