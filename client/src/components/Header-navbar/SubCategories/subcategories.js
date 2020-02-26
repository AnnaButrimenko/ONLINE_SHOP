import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import RoutesName from '../../../routes-list';
import { resetFilters } from '../../../redux/actions/filter';

import useStyles from '../_header-navbar';

export default function SubCategories({ allCategories, chosenCategory, toggleCatalog }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const subCategories = allCategories.filter((category) => category.parentId === chosenCategory);
  const subCategoriesList = subCategories.map((subCategory) => (
    <Link
      to={`${RoutesName.products}/${chosenCategory}/${subCategory.id}`}
      key={subCategory.id}
      className={`js_catalog-list-item ${classes.subCategoryListItem}`}
      onClick={() => {
        dispatch(resetFilters());
        toggleCatalog();
      }}
    >
      <div className={classes.subCategoryItemContent}>
        <img
          className={classes.subCategoryItemImg}
          src={`/img/products/${chosenCategory}/${subCategory.id}/${subCategory.id}.png`}
          alt={`img: ${subCategory.name}`}
        />
        {subCategory.name}
      </div>
    </Link>
  ));

  return (
    <div className={`js_catalog-list ${classes.subCategoryList}`}>
      {subCategoriesList}
    </div>
  )
}

SubCategories.propTypes = {
  allCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  chosenCategory: PropTypes.string,
  toggleCatalog: PropTypes.func.isRequired,
};

SubCategories.defaultProps = {
  chosenCategory: null
};