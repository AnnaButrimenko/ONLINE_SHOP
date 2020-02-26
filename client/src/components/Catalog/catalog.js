import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid,
  Container,
  useTheme,
  SwipeableDrawer,
  Button,
  useMediaQuery
} from '@material-ui/core';

import Filter from '../Filter/filter';
import ProductList from '../Product-list/product-list';
import ProductBreadcrumbs from '../Breadcrumbs/breadcrumbs';
import Sorting from '../Sorting/sorting';

import {
  productsRequested,
  productsLoaded,
  moreProductsLoaded
} from '../../redux/actions/products';
import { getCategory } from '../../services/get-categories';
import {
  getFilteredProducts,
  getInfinityFilteredProducts,
  parseToFilterValue
} from '../../services/filter';
import ProductCardCarousel from '../Product-card-carousel/product-card-carousel';
import getSearchedProducts from '../../services/search';

import useStyles from './_catalog';

const Catalog = (props) => {
  const classes = useStyles();
  const {
    assortment,
    catalog,
    filter,
    productsLoaded,
    moreProductsLoaded,
    productsStore,
    searchedValue,
    productsRequested
  } = props;

  const { productsLoading, products, productsQuantity } = productsStore;

  const { filterResults, filterPages, sort } = filter;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [topList, setTopList] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [filterIsOpenMobile, setFilterIsOpenMobile] = useState(false);
  const { allCategories } = catalog;

  const handleProductsRequest = async () => {
    let searchedResult = [];
    if (assortment === 'search' && searchedValue) {
      await getSearchedProducts(searchedValue)
        .then((products) => {
          if (!products.length) {
            productsLoaded({ products: [], productsQuantity: 0 });
          }
          searchedResult = products.map((product) => product.itemNo);
        });
      if (!searchedResult.length) return;
    }

    const valToFilter = parseToFilterValue(
      searchedResult,
      filterResults,
      sort,
      filterPages,
      allCategories,
      assortment
    );
    getInfinityFilteredProducts(valToFilter)
      .then((newProducts) => {
        if (filterPages.startPage > 1) {
          moreProductsLoaded(newProducts);
        } else {
          productsLoaded(newProducts);
        }
      });
  };

  useEffect(() => {
    const request = assortment === 'search' ? 'cooking' : assortment;
    getCategory(request)
      .then((response) => {
        if (response.topSellers) {
          setTopList(response.topSellers)
        }
      });
  }, [assortment]);

  useEffect(() => {
    handleProductsRequest();
  }, [sort, filterResults, filterPages, searchedValue]);

  useEffect(() => {
    const cardsToShowString = topList.toString();
    if (cardsToShowString) {
      getFilteredProducts(`itemNo=${cardsToShowString}`)
        .then((response) => {
          setProductsToShow(response)
        })
    }
  }, [topList]);

  const toggleFilterMobile = (open) => {
    setFilterIsOpenMobile(open);
  };

  const filterRender = (desktop) => {
    if (desktop) {
      return (
        <div className={classes.filterDesktop}>
          <Filter />
        </div>
      )
    }

    return (
      <div className={classes.filterMobile}>
        <Button
          onClick={() => toggleFilterMobile(true)}
          className={classes.button}
        >
          Open Filter
        </Button>

        <SwipeableDrawer
          onOpen={() => toggleFilterMobile(true)}
          anchor="bottom"
          open={Boolean(filterIsOpenMobile)}
          onClose={() => toggleFilterMobile(false)}
        >

          <Filter />
          <div className={classes.filterButton}>
            <Button
              className={classes.button}
              onClick={() => toggleFilterMobile(false)}
            >
              Close filter
            </Button>
          </div>
        </SwipeableDrawer>
      </div>
    )
  };
  return (
    <>
      <Container maxWidth="xl">
        <ProductBreadcrumbs assortment={assortment} />
        <Grid container spacing={2} className={classes.root}>
          <Grid item sm={12} md={4}>
            {filterRender(isDesktop)}
          </Grid>
          <Grid item xs={12} md={8}>
            <Sorting sort={sort} />
            <ProductList
              products={products}
              productsQuantity={productsQuantity}
            />
          </Grid>
          <Grid item xs={12}>
            {productsToShow && (
              <ProductCardCarousel
                products={productsToShow}
                label="most popular products"
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
};

const mapStateToProps = (state) => ({
  catalog: state.categoriesReducer.catalog,
  filter: state.filterReducer,
  productsStore: state.productsReducer,
  searchedValue: state.searchReducer.searchedValue
});

const mapDispatchToProps = (dispatch) => ({
  productsRequested: () => dispatch(productsRequested()),
  productsLoaded: (products) => dispatch(productsLoaded(products)),
  moreProductsLoaded: (products) => dispatch(moreProductsLoaded(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

Catalog.propTypes = {
  assortment: PropTypes.string.isRequired,
  searchedValue: PropTypes.string,
  catalog: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.symbol,
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])).isRequired,
  filter: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])).isRequired,
  productsStore: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.string
  ])).isRequired,
  productsRequested: PropTypes.func.isRequired,
  productsLoaded: PropTypes.func.isRequired,
  moreProductsLoaded: PropTypes.func.isRequired
};

Catalog.defaultProps = {
  searchedValue: ''
};
