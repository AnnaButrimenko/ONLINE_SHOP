import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function AddToCartButton({ handleClick, quantity }) {
  return (
    <Button
      size="large"
      fullWidth
      variant="contained"
      color="primary"
      disableElevation
      onClick={handleClick}
      disabled={!quantity}
    >
      {
        quantity === 0
          ? <span>Out of stock</span>
          : <ShoppingCartOutlinedIcon />
      }
    </Button>
  )
}

export default AddToCartButton;

AddToCartButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
