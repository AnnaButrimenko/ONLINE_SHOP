import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RoutesName from '../../../routes-list';
import { catalogLocation } from '../../../redux/actions/categories';
import { resetFilters } from '../../../redux/actions/filter';

import useStyles from '../_header-navbar';

function Categories(props) {
  const classes = useStyles();
  const {
    chosenCategory,
    mainCategories,
    toggleSubCategories,
    toggleCatalog,
    catalogLocation,
    resetFilters
  } = props;

  const categoryList = mainCategories.map((category) => {
    const classNames = `
    js_catalog-list-item 
    ${classes.catalogListItem} 
    ${category.id === chosenCategory ? classes.categoryHover : ''}
    `;

    return (
      <Link
        to={`${RoutesName.products}/${category.id}`}
        key={category.id}
        id={category.id}
        className={classNames}
        onClick={(event) => {
          resetFilters();
          catalogLocation(event.target.textContent.toLowerCase());
          toggleCatalog()
        }}
        onMouseEnter={(event) => toggleSubCategories(event)}
      >
        <div>
          {category.name.toUpperCase()}
        </div>
      </Link>
    )
  });

  return (
    <div className={`js_catalog-list ${classes.catalogList}`}>
      {categoryList}
    </div>
  )
}

const mapDispatchToProps = {
  catalogLocation,
  resetFilters
};

export default connect(null, mapDispatchToProps)(Categories)

Categories.propTypes = {
  chosenCategory: PropTypes.string,
  toggleSubCategories: PropTypes.func.isRequired,
  toggleCatalog: PropTypes.func.isRequired,
  mainCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  catalogLocation: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired
};

Categories.defaultProps = {
  chosenCategory: null
};