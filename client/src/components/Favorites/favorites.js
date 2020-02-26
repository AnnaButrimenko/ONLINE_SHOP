import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

import ProductList from '../Product-list/product-list';

export default function Favorites() {
  const { favorites } = useSelector((state) => state.favoritesReducer);

  return (
    <Container maxWidth="xl">
      {
        !favorites.length
          ? <h2>NOTHING ADDED TO FAVORITES.</h2>
          : <ProductList products={favorites} productsQuantity={favorites.length} />
      }
    </Container>
  )
}
