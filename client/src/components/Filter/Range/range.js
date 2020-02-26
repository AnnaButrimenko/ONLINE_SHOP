import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Slider, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { getFilterProducts } from '../../../redux/actions/filter'

import useStyles from './_range';

const CustomSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    left: '2%',
  },
  thumb: {
    backgroundColor: theme.palette.primary.main,
  },
  valueLabel: {
    top: -22,
    '& *': {
      background: 'transparent',
      color: theme.palette.background.dark,
    },
  },
}))(Slider);

const RangeSlider = ({ getFilterProducts, filterResults, max }) => {
  const classes = useStyles();

  const [value, setValue] = useState([filterResults.price[0], filterResults.price[1]]);

  const changePrice = (price) => {
    setValue(price);
    combineInputs(price);
  };

  const combineInputs = (price) => {
    getFilterProducts({
      ...filterResults,
      price
    });
  };

  const handleRangeChange = (event, price) => {
    setValue(price);
    getFilterProducts({
      ...filterResults,
      price
    });
  };

  const handleInputMin = (event) => {
    let inputValue = event.target.value;
    if (inputValue > max) {
      inputValue = 0
    }
    changePrice([inputValue === '' ? '' : Number(Math.abs(Math.floor(inputValue))), filterResults.price[1]])
  };

  const handleInputMax = (event) => {
    let inputValue = event.target.value;
    if (inputValue > max) {
      inputValue = max
    }
    changePrice([filterResults.price[0], inputValue === '' ? '' : Number(Math.abs(Math.floor(inputValue)))]);
  };

  const handleBlurMin = () => {
    if (filterResults.price[0] === '') {
      const minPrice = 0;
      changePrice([minPrice, filterResults.price[1]]);
    }
  };

  const handleBlurMax = () => {
    if (filterResults.price[1] === '') {
      changePrice([filterResults.price[0], max]);
    }
  };

  const error = 'Warning! Your first value should be lower than the second!';

  const input = (inputValue, setInputValue, setBlurInput) => (
    <Input
      className={classes.input}
      value={inputValue}
      margin="dense"
      onChange={setInputValue}
      onBlur={setBlurInput}
      inputProps={{
        min: 0,
        max,
        type: 'number',
        'aria-labelledby': 'range-slider',
      }}
    />
  );

  return (
    <>
      <CustomSlider
        max={max}
        valueLabelDisplay="auto"
        value={filterResults.price}
        onChange={handleRangeChange}
        aria-labelledby="range-slider"
      />
      <div className={classes.inputs}>
        {(value[1] < value[0]) && <div className={classes.error}>{error}</div>}
        {input(filterResults.price[0], handleInputMin, handleBlurMin)}
        {input(filterResults.price[1], handleInputMax, handleBlurMax)}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  filterResults: state.filterReducer.filterResults
});

const mapDispatchToProps = {
  getFilterProducts
};

RangeSlider.propTypes = {
  max: PropTypes.number,
  getFilterProducts: PropTypes.func.isRequired,
  filterResults: PropTypes.objectOf(PropTypes.array).isRequired,
};

RangeSlider.defaultProps = {
  max: null
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)