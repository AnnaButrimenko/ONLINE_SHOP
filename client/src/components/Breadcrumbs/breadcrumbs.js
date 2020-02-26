import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Breadcrumbs } from '@material-ui/core';

import BreadcrumbsItem from './breadcrumbs-item';
import BreadcrumbsHome from './breadcrumbs-home';
import BreadcrumbsSearch from './breadcrumbs-search';

import useStyles from './_breadcrumbs';

export default function ProductBreadcrumbs({ assortment, product }) {
  const classes = useStyles();
  const { catalog } = useSelector((state) => state.categoriesReducer);
  const { allCategories, mainCategories } = catalog;

  let level = '';
  if (assortment === 'search') {
    level = 'search'
  } else if (!isNaN(assortment)) {
    level = 'item';
  } else if (mainCategories.find((category) => category.id === assortment)) {
    level = 'category';
  } else {
    level = 'subCategory'
  }

  let category = '';
  let subCategory = '';
  let search = false;

  switch (level) {
    case 'item': {
      const subCategoryId = product.categories;
      subCategory = allCategories.find((category) => category.id === subCategoryId);
      category = mainCategories.find((category) => category.id === subCategory.parentId);
      break;
    }

    case 'subCategory': {
      subCategory = allCategories.find((category) => category.id === assortment);
      category = mainCategories.find((category) => category.id === subCategory.parentId);
      break;
    }

    case 'category':
      category = allCategories.find((category) => category.id === assortment);
      break;

    case 'search':
      search = true;
      break;

    default:
      category = '';
      subCategory = '';
      search = false;
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" color="primary" className={classes.wrapper}>
      <BreadcrumbsHome />
      {category &&
      (
        <BreadcrumbsItem
          route={category.id}
          text={category.name}
        />
      )}
      {subCategory &&
      (
        <BreadcrumbsItem
          route={`${category.id}/${subCategory.id}`}
          text={subCategory.name}
        />
      )}
      {search && <BreadcrumbsSearch />}
    </Breadcrumbs>
  );
}

ProductBreadcrumbs.propTypes = {
  assortment: PropTypes.string.isRequired,
  product: PropTypes.oneOfType([PropTypes.object])
};

ProductBreadcrumbs.defaultProps = {
  product: {}
};