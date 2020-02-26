import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Hidden, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SummaryItem from './Summary-item/summary-item';
import RoutesList from '../../../routes-list';
import useStyles from './_summary';

function Summary({ totalCartPrice }) {
  const classes = useStyles();
  return (
    <Box>
      <Hidden smDown>
        <SummaryItem title="Summary" type="title" />
        <SummaryItem title="Grand Total" value={`€${totalCartPrice}`} type="total" />
        <Grid container justify="center">
          <Link to={RoutesList.checkout} className={classes.link}>
            <Button variant="contained" color="primary" className={classes.button}>
              Proceed to Checkout
            </Button>
          </Link>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <SummaryItem title="Grand Total" value={`€${totalCartPrice}`} type="total" />
        <Grid container justify="center">
          <Link to={RoutesList.checkout} className={classes.link}>
            <Button variant="contained" color="primary" className={classes.button}>
              Proceed to Checkout
            </Button>
          </Link>
        </Grid>
      </Hidden>
    </Box>
  );
}
export default Summary;

Summary.propTypes = {
  totalCartPrice: PropTypes.number.isRequired
};
