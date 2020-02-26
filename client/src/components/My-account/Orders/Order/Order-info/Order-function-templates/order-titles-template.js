import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import useStylesOrderItem from '../../../Order-list/_order-list';

const OrderTitlesTemplate = ({ name, value, xs, sm, md, justify, className }) => {
  const classes = useStylesOrderItem();
  return (
    <Grid
      component="div"
      item
      container
      xs={xs}
      sm={sm}
      md={md}
      justify={justify}
      className={className}
    >
      <span className={classes.hiddenName}>{name}</span>
      <span className={classes.space}>&nbsp;</span>
      <span>{value}</span>
    </Grid>
  )
};

export default OrderTitlesTemplate;

OrderTitlesTemplate.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
  justify: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  name: PropTypes.string,
};
OrderTitlesTemplate.defaultProps = {
  justify: 'center',
  className: '',
  xs: 12,
  sm: 3,
  md: 3,
  name: '',
};
