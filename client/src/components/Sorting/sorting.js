import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Select,
  Grid
} from '@material-ui/core';

import { filterSort } from '../../redux/actions/filter';

import useStyles from './_sorting';

const Sorting = (props) => {
  const {
    filterSort, sort
  } = props;

  const classes = useStyles();
  const inputLabel = useRef(null);

  const [labelWidth, setLabelWidth] = useState(0);
  let sortVal = sort.sortValue < 0 ? '-' : '';
  sortVal += sort.sortName;

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const getSortedList = (event) => {
    const type = event.target.value;

    const splitting = type.split('-');
    if (splitting.length === 1) {
      filterSort({
        sortName: splitting[0],
        sortValue: 1
      });
    } else {
      filterSort({
        sortName: splitting[1],
        sortValue: -1
      });
    }
  };

  return (
    <Grid container justify="flex-end">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-sorting-filter" className={classes.label}>
          Sorting by:
        </InputLabel>
        <Select
          native
          value={sortVal}
          onChange={getSortedList}
          labelWidth={labelWidth}
          inputProps={{
            name: 'sort',
            id: 'outlined-sorting-filter',
            className: classes.input
          }}
        >
          <option value="">&nbsp;</option>
          <option value="currentPrice">Price: low to high</option>
          <option value="-currentPrice">Price: high to low</option>
          <option value="-previousPrice">Sale items first</option>
        </Select>
      </FormControl>
    </Grid>
  )
};

const mapDispatchToProps = (dispatch) => ({
  filterSort: (sortValue) => dispatch(filterSort(sortValue)),
});

Sorting.propTypes = {
  sort: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  filterSort: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Sorting);
