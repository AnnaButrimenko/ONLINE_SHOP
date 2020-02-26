import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Paper, Box, Divider } from '@material-ui/core';

import NavBar from './Navbar/navbar';
import Categories from './Categories/categories';
import SubCategories from './SubCategories/subcategories';

import useStyles from './_header-navbar';

function HeaderNavbar(props) {
  const classes = useStyles();
  const [features, setFeatures] = useState({
    categoriesVisible: false,
    subCategoriesVisible: false,
    chosenCategory: null,
  });

  const { categoriesVisible, subCategoriesVisible, chosenCategory } = features;

  const { drawer, toggleDrawer } = props;
  const { catalog } = useSelector((state) => state.categoriesReducer);
  const { mainCategories, allCategories } = catalog;

  const toggleCatalog = () => {
    categoriesVisible
      ? hideCatalog()
      : showCatalog()
  };

  const showCatalog = () => {
    setFeatures({
      categoriesVisible: true,
      chosenCategory: null
    })
  };

  const hideCatalog = () => {
    setFeatures({
      categoriesVisible: false,
      subCategoriesVisible: false,
      chosenCategory: null
    });
  };

  const toggleSubCategories = (event) => {
    const chosenCategory = event.currentTarget.id;
    const haveSubCategories = !!allCategories.find((category) => (
      category.parentId === chosenCategory
    ));
    setFeatures({
      ...features,
      subCategoriesVisible: haveSubCategories,
      chosenCategory
    })
  };

  const categoriesList = (
    <Categories
      chosenCategory={chosenCategory}
      mainCategories={mainCategories}
      toggleSubCategories={toggleSubCategories}
      toggleCatalog={toggleCatalog}
    />
  );

  const subCategoriesList = (
    <SubCategories
      chosenCategory={chosenCategory}
      allCategories={allCategories}
      toggleCatalog={toggleCatalog}
    />
  );

  return (
    <>
      <div className={classes.headerMenuWrapper}>
        <NavBar
          drawer={drawer}
          toggleDrawer={toggleDrawer}
          hideCatalog={hideCatalog}
          toggleCatalog={toggleCatalog}
        >
          <Box
            className={classes.catalogWrapper}
            onMouseLeave={hideCatalog}
          >
            <Paper className={classes.headerMenuCatalog}>
              {categoriesVisible && categoriesList}
              {subCategoriesVisible && subCategoriesList}
            </Paper>
          </Box>
        </NavBar>
      </div>
      <Divider />
    </>
  )
}

export default HeaderNavbar;

HeaderNavbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawer: PropTypes.bool.isRequired
};
