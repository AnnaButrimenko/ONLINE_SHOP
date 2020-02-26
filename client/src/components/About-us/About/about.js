import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './_about';

const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Grid container item md={6} className={classes.textImage}>
            <h3 className={classes.imageTitle}>WMF brings pleasure into your life</h3>
            <p className={classes.imageParagraph}>
              WMF offers gourmets high-quality, functional and
              beautifully crafted products that satisfy even the most stringent design
              standards.
            </p>
          </Grid>
        </div>
      </div>
      <p className={classes.text}>
        Every day, more than 100 million people around the world use products from WMF, Silit and
        Kaiser to prepare, cook, bake, eat and drink in their homes. And when they are not doing
        that, they are enjoying coffee specialities and foods prepared by the hotel and catering
        industry using WMF, Schaerer or Hepp products. Our employees are passionate about bringing
        people together, whether at home, on the move or at fine-dining establishments, in order
        to
        give them shared moments that are both precious and delicious. All this with products
        which
        have outstanding design, perfect functionality and excellent quality to make every
        culinary
        experience a real joy. Our business has a long tradition, having been founded in
        Geislingen
        an der Steige in 1853, and has been part of the French Groupe SEB since the end of 2016.
      </p>
    </>
  )
}

export default About