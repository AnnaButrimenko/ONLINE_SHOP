import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Paper, Backdrop } from '@material-ui/core';

import useStyles from './_modal-window';

export default function ModalWindow(props) {
  const classes = useStyles();
  const { open, onModalClose, children } = props;

  const handleClose = () => {
    onModalClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          <Paper className={classes.paper}>
            {children}
          </Paper>
        </>
      </Modal>
    </div>
  );
}

ModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.symbol]),
};

ModalWindow.defaultProps = {
  children: {},
};
