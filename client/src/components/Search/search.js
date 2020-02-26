import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Collapse, Grow, useTheme, InputBase } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

import storeSearchedValue from '../../redux/actions/search';

import useStyles from './_search';

const Search = ({ history, searchIsShown }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { searchedValue } = useSelector((state) => state.searchReducer);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    dispatch(storeSearchedValue(event.target.value));
    history.push('/products/search')
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const renderSearch = (desktop) => {
    if (desktop) {
      return (
        <Grow in={searchIsShown} >
          <div className={classes.search}>
            <SearchIcon
              className={classes.searchIcon}
            />
            {inputBase}
          </div>
        </Grow>
      )
    }

    return (
      <div className={classes.search}>
        <SearchIcon
          className={classes.searchIcon}
        />
        <Collapse in={Boolean(searchIsShown)} >
          {inputBase}
        </Collapse>
      </div>
    )
  };

  const inputBase = (
    <InputBase
      placeholder="Search…"
      type="search"
      value={searchInput}
      onChange={(event) => {
        setSearchInput(event.target.value)
      }}
      autoFocus
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          handleChange(event)
        }
      }}
    />
  );

  return (
    <>
      {renderSearch(isDesktop)}
    </>
  )
};

Search.propTypes = {
  searchIsShown: PropTypes.bool.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(Search);