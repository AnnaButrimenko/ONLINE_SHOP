import { Link } from 'react-router-dom';
import { Badge, IconButton, MenuItem, Tooltip, Zoom } from '@material-ui/core';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import RoutesName from '../../../../routes-list';
import useStyles from '../../_header';

const FavouritesIcon = ({ onClick, open, onClose }) => {
  const classes = useStyles();
  const totalFavoritesQty = useSelector((state) => state.favoritesReducer.favorites.length);
  const { loggedIn } = useSelector((state) => state.user);

  const tooltipBlock = () => (
    <div className={classes.toolTipContainer}>
      <h4 className={classes.wishlistMessege}>Wishlist is empty</h4>
      <p className={classes}>
        If you want to be able to add goods to your wish list, please
        &nbsp;
        <Link to={RoutesName.favorites} className={classes.logInLink}>Log in.</Link>
      </p>
    </div>
  );

  const iconForLoggedIn = () => (
    <MenuItem className={classes.headerMenuItem}>
      <Link to={RoutesName.favorites}>
        <IconButton edge="end" className={classes.iconButton}>
          <Badge badgeContent={totalFavoritesQty.toString()} color="error">
            <FavoriteBorderIcon fontSize="large" className={classes.iconLove} />
          </Badge>
        </IconButton>
        <span className={classes.menuTitle}>Favorites</span>
      </Link>
    </MenuItem>
  );

  if (!loggedIn) {
    return (
      <Tooltip
        title={tooltipBlock()}
        onClick={onClick}
        onClose={onClose}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        open={open}
        placement="bottom-end"
        interactive
        arrow
        TransitionComponent={Zoom}
      >
        <MenuItem className={classes.headerMenuItem}>
          <IconButton edge="end" className={classes.iconButton}>
            <Badge badgeContent={totalFavoritesQty.toString()} color="error">
              <FavoriteBorderIcon fontSize="large" className={classes.iconsStyle} />
            </Badge>
          </IconButton>
          <span className={classes.menuTitle}>Favorites</span>
        </MenuItem>
      </Tooltip>
    )
  }

  return iconForLoggedIn()
};

export default FavouritesIcon;

FavouritesIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
