import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import useStylesOrderItem from '../../../Order-list/_order-list'

const OrderParamsTemplates = ({ name, value, classContainer, classTitle, classDivider }) => {
  const classes = useStylesOrderItem();
  return (
    <Grid component="div" item container className={classContainer}>
      <span className={`${classes.title} ${classTitle}`}>{name}</span>
      <span className={classes.space}>&nbsp;</span>
      <span>{value}</span>
      <Divider
        className={`${classes.hiddenCollapse} ${classDivider}`}
        orientation="horizontal"
        variant="middle"
        component="div"
      />
    </Grid>
  )
};

export default OrderParamsTemplates;

OrderParamsTemplates.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classContainer: PropTypes.string,
  classTitle: PropTypes.string,
  classDivider: PropTypes.string
};
OrderParamsTemplates.defaultProps = {
  classContainer: '',
  classTitle: '',
  classDivider: '',
};
