import React from 'react';
import { Divider, Container } from '@material-ui/core';

import useStyles from './_about-us';

import About from './About/about'
import Video from './Video/video'
import Brands from './Brands/brands'
import Awards from './Awards/awards'

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.text}>
      <h2>About us</h2>
      <Divider />
      <About />
      <Video />
      <Brands />
      <Awards />
    </Container>
  )
};

export default AboutUs;
