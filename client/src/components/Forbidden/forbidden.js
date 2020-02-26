import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import RoutesName from '../../routes-list'

export default function Forbidden() {
  return (
    <Container maxWidth="xl">
      <h1>You do not have access to this page</h1>
      <p>Go to the</p>
      <Link to={RoutesName.home}> homepage</Link>
    </Container>
  );
}