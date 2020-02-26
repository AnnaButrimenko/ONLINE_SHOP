import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
import RoutesName from '../../routes-list'
import useNoMatchStyles from './_no-match';
import FormButton from '../Checkout/Checkout-form/form-components/form-button';

export default function NoMatch () {
  const classes = useNoMatchStyles();
  return (
    <Container maxWidth="xl">
      <div className={classes.container}>
        <div className={classes.noFoundBlock}>
          <div className={classes.errorText}>
            <h1 className={classes.errorTitle}>Oops!</h1>
            <h2 className={classes.secondErrorTitle}>404 - The Page can&apos;t be found</h2>
          </div>
          <Link to={RoutesName.home} className={classes.link}>
            <FormButton btnText="GO TO HOMEPAGE" color="primary" type="button" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
