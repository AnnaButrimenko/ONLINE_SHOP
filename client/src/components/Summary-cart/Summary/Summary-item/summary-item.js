import React from 'react';
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core';
import useStyles from './_summary-item';

function SummaryItem({ title, value, type }) {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" className={`${classes.root} ${classes[type]}`}>
      <Grid item xs={9} sm={6}>
        {title}
      </Grid>
      <Grid item xs={3} sm={6} className={classes.alignRight}>
        {value}
      </Grid>
    </Grid>
  );
}
export default SummaryItem;

SummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string
};

SummaryItem.defaultProps = {
  value: '',
  type: 'item'
};
