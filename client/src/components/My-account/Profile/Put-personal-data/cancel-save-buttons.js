import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import useProfileStyles from '../_profile';

const CancelSaveButtons = ({ cancel }) => {
  const profileClasses = useProfileStyles();
  const classesBtn = `${profileClasses.cancelSubmit} ${profileClasses.button}`;
  return (
    <div className={profileClasses.buttonsContainer}>
      <Button variant="contained" color="secondary" className={classesBtn} onClick={cancel}>
        CANCEL
      </Button>
      <Button type="submit" variant="contained" color="primary" className={classesBtn}>
        SAVE
      </Button>
    </div>
  )
};

export default CancelSaveButtons;

CancelSaveButtons.propTypes = {
  cancel: PropTypes.func.isRequired
};
