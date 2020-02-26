import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './_spinner';

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size="6em" />
    </div>
  );
}