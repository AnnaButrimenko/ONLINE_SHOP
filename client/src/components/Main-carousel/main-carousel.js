import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Carousels from '../Carousel/carousel';
import PagingDots from '../Carousel/pagingDots';
import useStylesCarousel from '../Carousel/_carousel';
import useStylesMainCarousel from './_main-carousel';
import getMainSlides from '../../services/get-main-slides';
import slidesToFetch from '../../redux/actions/slides';

function MainSlider ({ fetchSlides }) {
  const { mainSlides } = useSelector((state) => state.slides);

  const classes = useStylesCarousel();
  const mainCarouselClasses = useStylesMainCarousel();

  const dispatch = useDispatch();

  const addBackgroundImg = (src) => ({
    backgroundImage: `url(${src})`
  });
  useEffect(() => {
    if (mainSlides.length < 1) {
      getMainSlides()
        .then((response) => dispatch(slidesToFetch(response.data)))
    }
  }
  , [dispatch, fetchSlides, mainSlides.length]);

  const carouselContent = () => mainSlides.map((item) => {
    const { imageUrl, title, description, route, _id } = item;
    return (
      <div className={mainCarouselClasses.background} style={addBackgroundImg(imageUrl)}>
        <div className={mainCarouselClasses.textBlock}>
          <h3 className={mainCarouselClasses.title}>{title}</h3>
          <p className={mainCarouselClasses.description}>{description}</p>
          <Link to={route} key={_id} className={mainCarouselClasses.link}>
            <Button
              size="large"
              className={mainCarouselClasses.showMore}
              variant="contained"
              color="secondary"
              disableElevation
            >
              Show more
            </Button>
          </Link>
        </div>
      </div>
    )
  });

  return (
    <div className={mainCarouselClasses.displayCarousel}>
      {mainSlides.length && (
        <div className={classes.carouselContainer}>
          <Carousels
            isProductSlider={false}
            autoPlay
            autoplayInterval={2000}
            wrapAround
            slidesToShow={1}
            // dragging
            renderBottomCenterControls={
              ({
                currentSlide, goToSlide, slideCount, slidesToScroll, slidesToShow, cellAlign
              }) => (
                <PagingDots
                  currentSlide={currentSlide}
                  goToSlide={goToSlide}
                  slideCount={slideCount}
                  slidesToScroll={slidesToScroll}
                  slidesToShow={slidesToShow}
                  cellAlign={cellAlign}
                  classItems={mainCarouselClasses.liMainPagingItem}
                  ulPagingItem={mainCarouselClasses.ulMainPagingItem}
                  buttonItems={mainCarouselClasses.buttonMainPagingItem}
                />
              )
            }
          >
            {carouselContent()}
          </Carousels>
        </div>
      )}
      {!mainSlides.length && null}
    </div>
  )
}

export default MainSlider;

MainSlider.propTypes = {
  fetchSlides: PropTypes.func,
};
MainSlider.defaultProps = {
  fetchSlides: () => {},
};