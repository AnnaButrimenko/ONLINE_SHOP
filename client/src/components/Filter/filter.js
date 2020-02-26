import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FilterPanel from './Filter-panel/filter-panel'
import { getColors, getBrands } from '../../services/filter'
import { filterParamsLoaded } from '../../redux/actions/filter';

const Filter = () => {
  const filterParams = useSelector((state) => state.filterReducer.filterParams);
  const dispatch = useDispatch();
  const filterParamsLoadedFunc = useCallback(
    (type, data) => dispatch(filterParamsLoaded(type, data)),
    [dispatch]
  );

  useEffect(() => {
    getColors().then((colors) => {
      filterParamsLoadedFunc('colors', colors);
    });
    getBrands().then((brands) => {
      filterParamsLoadedFunc('brands', brands);
    });
  }, []);

  const filterText = ['Brand', 'Price', 'Color'];

  const filter = filterText.map((name) => (
    <FilterPanel
      max={700}
      key={name}
      name={name}
      colors={filterParams.colors}
      brands={filterParams.brands}
    />
  ));

  return (
    <>
      {filter}
    </>
  );
};

export default Filter;