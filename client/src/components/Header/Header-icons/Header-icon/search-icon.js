import { IconButton, MenuItem } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../../_header';

const HeaderSearchIcon = ({ toggleSearch, onClick }) => {
  const classes = useStyles();
  return (
    <MenuItem className={classes.headerMenuItem} onClick={onClick}>
      <IconButton onClick={toggleSearch} edge="end" className={classes.iconButton}>
        <SearchIcon fontSize="large" className={classes.iconsStyle} />
        <span className={classes.menuTitle}>Search</span>
      </IconButton>
    </MenuItem>
  )
};

export default HeaderSearchIcon;

HeaderSearchIcon.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
