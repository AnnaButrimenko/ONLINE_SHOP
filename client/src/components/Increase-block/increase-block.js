import React from 'react';
import { PropTypes } from 'prop-types';
import { IconButton, Input } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './_increase-block';

export default function IncreaseBlock({ qty, setQty, maxQty }) {
  const classes = useStyles();

  const handleChange = (event) => {
    if (event.target.value === '') {
      setQty('');
    } else if (event.target.value >= maxQty) {
      setQty(maxQty);
    } else if (event.target.value === '0') {
      setQty(1);
    } else if (event.target.value.length > 2) {
      setQty(Number(Math.floor(event.target.value)));
    } else {
      setQty(Number(Math.abs(event.target.value)))
    }
  };

  const handleBlurMin = () => {
    if (qty === '') {
      setQty(1);
    }
  };

  return (
    <>
      <div className={classes.qtyPicker}>
        <IconButton
          disabled={qty === 1 ? Boolean(true) : false}
          onClick={() => {
            if (qty <= 1) return;
            setQty(qty - 1)
          }}
        >
          <RemoveIcon />
        </IconButton>

        <Input
          className={classes.input}
          value={qty}
          onBlur={handleBlurMin}
          onChange={handleChange}
          inputProps={{
            min: 1,
            type: 'number',
          }}
        />

        <IconButton
          onClick={() => {
            if (qty >= 99 || qty >= maxQty) return;
            setQty(qty + 1)
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </>
  )
}

IncreaseBlock.propTypes = {
  qty: PropTypes.number.isRequired,
  setQty: PropTypes.func.isRequired,
  maxQty: PropTypes.number.isRequired
};