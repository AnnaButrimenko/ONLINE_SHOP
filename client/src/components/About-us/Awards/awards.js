import React from 'react'
import { Divider, Grid } from '@material-ui/core'

import useStyles from './_awards';

const Awards = () => {
  const classes = useStyles()
  return (
    <>
      <h3>WMF Design – Winner of multiple awards</h3>
      <Divider />
      <Grid container spacing={5}>
        <Grid item md={6}>
          <img
            src={`${process.env.PUBLIC_URL}/img/about/awards.jpg`}
            alt="Our rewards"
            className={classes.img}
          />
        </Grid>
        <Grid item md={6}>
          <p>
            Design has always been an integral part of WMF&#8242;s corporate philosophy. The
            products are
            designed to be distinctive. Today, WMF&#8242;s internal creative team works in close
            cooperation with renowned international designers from many different disciplines. The
            company takes a holistic approach to design, combining aesthetics, function and
            usability, while always focusing on the customer. WMF products are intended to make
            preparing, cooking, eating and drinking an emotional experience for customers. WMF’s
            success in this is shown in the numerous design awards that the company receives year
            after year.
          </p>
        </Grid>
      </Grid>
    </>
  )
}

export default Awards;