import React from 'react';
import { Box, Divider, IconButton, SvgIcon } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import ProductCard from '../Product-card/product-card';
import Carousels from '../Carousel/carousel';
import useStyles from './_product-card-carousel';

function ProductCardCarousel(props) {
  const { products, label, width } = props;
  const classes = useStyles();

  const slidesToShow = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
  };
  const productCardList = (products) => (
    products.map((item) => (
      <div className={classes.wrapper} key={item.itemNo} >
        <ProductCard
          product={item}
        />
      </div>
    ))
  );

  const renderCarousel = () => (
    <>
      <Carousels
      // autoPlay
        wrapAround
        renderBottomCenterControls={null}
        transitionMode="scroll"
        cellSpacing={5}
        slidesToScroll={1}
        slidesToShow={slidesToShow[width]}
        renderCenterLeftControls={({ previousSlide }) => (
          <IconButton
            className={classes.leftArrow}
            onClick={previousSlide}
          >
            <SvgIcon>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
            </SvgIcon>
          </IconButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <IconButton
            className={classes.leftArrow}
            onClick={nextSlide}
          >
            <SvgIcon>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
            </SvgIcon>
          </IconButton>
        )}
      >
        {productCardList(products)}
      </Carousels>
    </>
  );
  
  return (
    <Box className={classes.carousel}>
      <h2 className={classes.title}>{label}</h2>
      {renderCarousel()}
      <Divider />
    </Box>
  );
}

ProductCardCarousel.propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withWidth()(ProductCardCarousel);
