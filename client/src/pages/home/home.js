import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/actions/filter';
import MainSlider from '../../components/Main-carousel/main-carousel';
import CategoryList from '../../components/Category-list/category-list';
import Carousels from '../../components/Carousel/carousel';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  });

  return (
    <>
      <MainSlider />
      <Container maxWidth="xl">
        <CategoryList />
        <Carousels
          autoPlay
          autoplayInterval={2000}
          wrapAround
          slideIndex={0}
          slidesToShow={1}
        />
      </Container>
    </>
  )
}
