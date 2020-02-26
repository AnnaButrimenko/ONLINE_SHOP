import React from 'react';

import { Grid, Container } from '@material-ui/core';
import MainText from './Main-text/main-text'
import FooterNavbar from './Footer-navbar/footer-navbar'

import useStyles from './_footer';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <Container maxWidth="xl">
        <Grid container justify="space-between" spacing={2} className={classes.container}>
          <MainText />
          <FooterNavbar />
        </Grid>
      </Container>
    </div>
  )
}

export default Footer;
