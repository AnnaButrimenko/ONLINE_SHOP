import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid/Grid'
import ScrollAnimation from 'react-animate-on-scroll'
import useStyles from './_image-grid';

export default function ImgGrid({ src, animationType }) {
  const classes = useStyles();

  const addBackgroundImg = (src) => ({
    backgroundImage: `url(${src})`
  });

  return (
    <Grid item xs={12} md={6} lg={9} container alignItems="stretch">
      <ScrollAnimation
        className={classes.categoriesImg}
        animateIn={animationType}
        duration={1}
        style={addBackgroundImg(src)}
        animateOnce
      />
    </Grid>
  )
}
ImgGrid.propTypes = {
  src: PropTypes.string.isRequired,
  animationType: PropTypes.string.isRequired
}
